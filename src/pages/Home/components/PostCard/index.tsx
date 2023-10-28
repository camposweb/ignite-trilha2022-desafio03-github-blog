import { CardContainer, CardContent, CardDescription, CardInfo } from './styles'

interface IssuesProps {
  id?: number
  title: string
  body: string
}

interface CardProps {
  cards: IssuesProps
}

export function PostCard({ cards }: CardProps) {
  return (
    <CardContainer to={'/post'}>
      <CardContent>
        <CardInfo>
          <h3>{`${cards.title.substring(0, 70)}...`}</h3>
          <span>Há 1 dia</span>
        </CardInfo>
        <CardDescription>{`${cards.body.substring(
          0,
          190,
        )}...`}</CardDescription>
      </CardContent>
    </CardContainer>
  )
}
