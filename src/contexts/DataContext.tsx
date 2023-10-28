import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface UserProps {
  id: number
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: string
}

interface DataContextType {
  user?: UserProps
  fetchUser: () => Promise<void>
}

interface DataProviderProps {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextType)

export function DataProvider({ children }: DataProviderProps) {
  const [user, setUser] = useState<UserProps>()

  const fetchUser = useCallback(async () => {
    const response = await api.get(`users/${import.meta.env.VITE_APP_USERNAME}`)
    setUser(response.data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <DataContext.Provider value={{ user, fetchUser }}>
      {children}
    </DataContext.Provider>
  )
}
