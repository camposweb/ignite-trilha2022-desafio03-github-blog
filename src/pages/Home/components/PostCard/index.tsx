import Markdown from 'react-markdown'
import { CardContainer, CardContent, CardDescription, CardInfo } from './styles'
import remarkGfm from 'remark-gfm'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface IssuesProps {
  id?: number
  number: number
  title: string
  created_at: string
  body: string
}

interface CardProps {
  cards: IssuesProps
}

export function PostCard({ cards }: CardProps) {
  const date = new Date(`${cards.created_at}`)
  const dateFormatted = formatDistanceToNow(date, { locale: ptBR })

  return (
    <CardContainer to={`/post/${cards.number}`}>
      <CardContent>
        <CardInfo>
          <h3>
            {cards.title.length >= 70
              ? `${cards.title.substring(0, 70)}...`
              : `${cards.title}`}
          </h3>
          <span data-testid="span">{`Há ${dateFormatted
            .split('cerca de')
            .slice(-1)}`}</span>
        </CardInfo>
        <CardDescription data-testid="description">
          <Markdown remarkPlugins={[remarkGfm]}>{`${cards.body.substring(
            5,
            190,
          )}...`}</Markdown>
        </CardDescription>
      </CardContent>
    </CardContainer>
  )
}
