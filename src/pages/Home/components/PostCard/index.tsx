import Markdown from 'react-markdown'
import { CardContainer, CardContent, CardDescription, CardInfo } from './styles'
import remarkGfm from 'remark-gfm'

interface IssuesProps {
  id?: number
  number: number
  title: string
  body: string
}

interface CardProps {
  cards: IssuesProps
}

export function PostCard({ cards }: CardProps) {
  return (
    <CardContainer to={`/post/${cards.number}`}>
      <CardContent>
        <CardInfo>
          <h3>
            {cards.title.length >= 70
              ? `${cards.title.substring(0, 70)}...`
              : `${cards.title}`}
          </h3>
          <span>Há 1 dia</span>
        </CardInfo>
        <CardDescription>
          <Markdown remarkPlugins={[remarkGfm]}>{`${cards.body.substring(
            5,
            190,
          )}...`}</Markdown>
        </CardDescription>
      </CardContent>
    </CardContainer>
  )
}
