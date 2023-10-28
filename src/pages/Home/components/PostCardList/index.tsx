import { useContext } from 'react'
import { PostCard } from '../PostCard'
import { PostCardListContainer } from './styles'
import { DataContext } from '../../../../contexts/DataContext'

export function PostCardList() {
  const { issues } = useContext(DataContext)
  return (
    <PostCardListContainer>
      {issues.map((issue) => {
        return <PostCard key={issue.id} cards={issue} />
      })}
    </PostCardListContainer>
  )
}
