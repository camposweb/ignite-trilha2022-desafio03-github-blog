import { SearchFormContainer, SearchFormInput, SearchInfo } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchInfo>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </SearchInfo>
      <SearchFormInput>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchFormInput>
    </SearchFormContainer>
  )
}
