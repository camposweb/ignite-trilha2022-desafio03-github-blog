import { CardList } from './components/CardList'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <CardList />
    </HomeContainer>
  )
}
