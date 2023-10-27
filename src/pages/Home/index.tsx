import { PostCardList } from './components/PostCardList'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <PostCardList />
    </HomeContainer>
  )
}
