import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.baseProfile};
  border-radius: 0.625rem;
  padding: 2rem 2.5rem;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const ProfileImg = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
  //background: ${({ theme }) => theme.colors.baseText};
`

export const ProfileInfo = styled.div`
  width: 38.25rem;
  display: flex;
  flex-direction: column;
  font-family: 'Nunito', sans-serif;
  //justify-content: space-between;
`

export const ProfileTitle = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0rem;

  h1 {
    font-style: normal;
    font-weight: 700;
    line-height: 1.95rem;
    font-size: ${({ theme }) => theme.fonts.textL};
    color: ${({ theme }) => theme.colors.baseTitle};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-style: normal;
    line-height: 1.2rem;
    font-size: ${({ theme }) => theme.fonts.componentsLink};
    color: ${({ theme }) => theme.colors.blue};
  }
`

export const ProfileBio = styled.section`
  display: flex;

  p {
    font-style: normal;
    font-weight: 400;
    line-height: 1.6rem;
    font-size: ${({ theme }) => theme.fonts.textM};
    color: ${({ theme }) => theme.colors.baseText};
  }
`

export const ProfileData = styled.section`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  span {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.colors.baseSubtitle};
    font-size: ${({ theme }) => theme.fonts.textM};
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${({ theme }) => theme.colors.baseLabel};
    }
  }
`
