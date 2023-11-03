import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface UserProps {
  id: number
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string | null
  followers: number
}

interface IssuesProps {
  id: number
  number: number
  html_url: string
  title: string
  body: string
  created_at: string
  comments: number
  user: {
    login: string
  }
}

interface DataContextType {
  user?: UserProps
  issues: IssuesProps[]
  fetchUser: () => Promise<void>
  fetchIssues: (query?: string) => Promise<void>
}

interface DataProviderProps {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextType)

export function DataProvider({ children }: DataProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const [issues, setIssues] = useState<IssuesProps[]>([])

  const fetchUser = useCallback(async () => {
    const response = await api.get(`users/${import.meta.env.VITE_APP_USERNAME}`)
    setUser(response.data)
  }, [])

  const fetchIssues = useCallback(async (query?: string) => {
    if (query) {
      const response = await api.get(
        `search/issues?q=${query}%20repo:${import.meta.env.VITE_APP_USERNAME}/${
          import.meta.env.VITE_APP_REPOSITORIE
        }`,
      )
      setIssues(response.data.items)
    } else {
      const response = await api.get(
        `repos/${import.meta.env.VITE_APP_USERNAME}/${
          import.meta.env.VITE_APP_REPOSITORIE
        }/issues`,
      )
      setIssues(response.data)
    }
  }, [])

  useEffect(() => {
    fetchUser()
    fetchIssues()
  }, [fetchUser, fetchIssues])

  return (
    <DataContext.Provider value={{ user, fetchUser, issues, fetchIssues }}>
      {children}
    </DataContext.Provider>
  )
}
