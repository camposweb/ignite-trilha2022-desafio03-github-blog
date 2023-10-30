import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 54rem;
  margin-top: -5.7rem;
  margin-bottom: 14.62rem;

  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 834px) {
    padding: 0 3rem;
  }
`

export const PostInfoContainer = styled.div`
  display: flex;
  width: 100%;
  //justify-content: space-between;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.baseProfile};
  border-radius: 0.625rem;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const PostInfoNav = styled.section`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    gap: 0.5rem;
    text-decoration: none;
    font-weight: 700;
    line-height: 1.2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fonts.componentsLink};
    transition: 0.2s;

    &:hover {
      //border-bottom: 0.063rem solid ${({ theme }) => theme.colors.blue};
      box-shadow: 0 1px 0 0 ${({ theme }) => theme.colors.blue};
    }
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
    flex-wrap: wrap;
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

  @media (max-width: 768px) {
    section {
      gap: 1rem;
    }
  }
`

export const PostContent = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;

  section {
    h1 {
      font-weight: 700;
      line-height: 1.95rem;
      color: ${({ theme }) => theme.colors.baseTitle};
      font-size: ${({ theme }) => theme.fonts.titleL};
    }

    h2 {
      margin-top: 1rem;
      color: ${({ theme }) => theme.colors.baseTitle};
      font-size: ${({ theme }) => theme.fonts.titleM};
    }

    hr {
      display: flex;
      width: 100%;
      height: 0.063rem;
      background: ${({ theme }) => theme.colors.baseLabel};
    }

    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      margin-top: 1rem;
      margin-left: 2rem;
      li {
        //margin-top: 1rem;
      }
    }

    p {
      margin-top: 1rem;
      font-size: ${({ theme }) => theme.fonts.textM};
      color: ${({ theme }) => theme.colors.baseText};
    }

    a {
      //display: flex;
      //gap: 0.5rem;
      text-decoration: none;
      font-weight: 700;
      line-height: 1.2rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.blue};
      font-size: ${({ theme }) => theme.fonts.componentsLink};
      box-shadow: 0 1px 0 0 ${({ theme }) => theme.colors.blue};
      transition: 0.2s;
    }

    pre {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      background: ${({ theme }) => theme.colors.basePost};

      code {
        flex-direction: column;
        padding: 1rem 0;
        background: ${({ theme }) => theme.colors.basePost};
        overflow-x: auto;
      }
    }
    code {
      //margin-top: 1rem;
      padding: 0.063rem;
      background: ${({ theme }) => theme.colors.basePost};
    }
  }

  @media (max-width: 768px) {
    section {
      pre {
      }
      code {
      }
    }
  }
`
