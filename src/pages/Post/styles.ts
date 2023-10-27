import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 54rem;
  //height: 13.25rem;
  margin-top: -5.7rem;
  margin-bottom: 14.62rem;

  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`

export const PostInfoContainer = styled.div`
  display: flex;
  width: 100%;
  //justify-content: space-between;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.baseProfile};
  border-radius: 0.625rem;
  padding: 2rem;
`

export const PostInfoNav = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    line-height: 1.2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fonts.componentsLink};
  }
`

export const PostInfo = styled.section`
  h1 {
    margin-top: 1.25rem;
    font-weight: 700;
    line-height: 1.95rem;
    color: ${({ theme }) => theme.colors.baseTitle};
    font-size: ${({ theme }) => theme.fonts.titleL};
  }

  section {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;

    span {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.baseSpan};
      font-size: ${({ theme }) => theme.fonts.textM};
      gap: 0.5rem;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme.colors.baseLabel};
      }
    }
  }
`

export const PostContent = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  //margin-bottom: 8rem;

  section {
    p {
      margin-bottom: 1rem;
    }

    code {
      display: flex;
      flex-direction: column;
      background: ${({ theme }) => theme.colors.basePost};
    }
  }
`
