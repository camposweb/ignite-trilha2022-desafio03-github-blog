import { CardContainer, CardContent, CardDescription, CardInfo } from './styles'

export function Card() {
  return (
    <CardContainer to={'#'}>
      <CardContent>
        <CardInfo>
          <h3>JavaScript data types and data structures</h3>
          <span>Há 1 dia</span>
        </CardInfo>
        <CardDescription>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in...
        </CardDescription>
      </CardContent>
    </CardContainer>
  )
}
