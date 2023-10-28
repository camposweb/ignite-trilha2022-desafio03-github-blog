import { useContext } from 'react'
import { SearchFormContainer, SearchFormInput, SearchInfo } from './styles'
import { DataContext } from '../../../../contexts/DataContext'

export function SearchForm() {
  const { issues } = useContext(DataContext)
  return (
    <SearchFormContainer>
      <SearchInfo>
        <h3>Publicações</h3>
        <span>
          {issues.length > 1
            ? `${issues.length} publicações`
            : `${issues.length} publicação`}
        </span>
      </SearchInfo>
      <SearchFormInput>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchFormInput>
    </SearchFormContainer>
  )
}
