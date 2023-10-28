import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.75rem;
`

export const SearchInfo = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;

  h3 {
    line-height: 1.8rem;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fonts.titleS};
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }

  span {
    line-height: 1.4rem;
    font-size: ${({ theme }) => theme.fonts.textS};
    color: ${({ theme }) => theme.colors.baseSpan};
  }
`

export const SearchFormInput = styled.form`
  //display: flex;
  //width: 100%;

  input {
    display: flex;
    width: 100%;
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    background: ${({ theme }) => theme.colors.baseInput};
    border: 0.063rem solid ${({ theme }) => theme.colors.baseBorder};

    font-size: ${({ theme }) => theme.fonts.textM};
    color: ${({ theme }) => theme.colors.baseText};

    &::placeholder {
      color: ${({ theme }) => theme.colors.baseLabel};
    }
  }
`
