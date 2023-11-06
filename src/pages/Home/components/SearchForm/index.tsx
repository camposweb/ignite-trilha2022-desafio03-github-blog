import { useContext } from 'react'
import { SearchFormContainer, SearchFormInput, SearchInfo } from './styles'
import { DataContext } from '../../../../contexts/DataContext'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { issues, fetchIssues } = useContext(DataContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInput) {
    await fetchIssues(data.query)
  }

  return (
    <SearchFormContainer data-testid="container-searchForm">
      <SearchInfo>
        <h3>Publicações</h3>
        <span>
          {issues && issues.length > 1
            ? `${issues && issues.length} publicações`
            : `${issues && issues.length} publicação`}
        </span>
      </SearchInfo>
      <SearchFormInput onSubmit={handleSubmit(handleSearchIssues)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          disabled={isSubmitting}
          {...register('query')}
        />
      </SearchFormInput>
    </SearchFormContainer>
  )
}
