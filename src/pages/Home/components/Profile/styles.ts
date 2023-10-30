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
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 751px) {
    flex-direction: column;
  }
`

export const ProfileImg = styled.img`
  display: flex;
  width: 100%;
  //margin: 0 auto;
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
  //background: ${({ theme }) => theme.colors.baseText};

  @media (max-width: 751px) {
    margin: 0 auto;
    justify-content: center;
  }
`

export const ProfileInfo = styled.div`
  //max-width: 38.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    //padding: 0 1rem;
  }
`

export const ProfileTitle = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;

  h1 {
    font-weight: 700;
    line-height: 1.95rem;
    font-size: ${({ theme }) => theme.fonts.titleL};
    color: ${({ theme }) => theme.colors.baseTitle};
  }

  a {
    display: flex;
    height: 1.1875rem;
    gap: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.2rem;
    font-size: ${({ theme }) => theme.fonts.componentsLink};
    color: ${({ theme }) => theme.colors.blue};
    transition: 0.2s;

    &:hover {
      //border-bottom: 0.063rem solid ${({ theme }) => theme.colors.blue};
      box-shadow: 0 1px 0 0 ${({ theme }) => theme.colors.blue};
    }
  }

  @media (max-width: 751px) {
    flex-direction: column;

    align-items: center;

    h1 {
    }

    a {
    }
  }
`

export const ProfileBio = styled.section`
  display: flex;

  p {
    line-height: 1.6rem;
    font-size: ${({ theme }) => theme.fonts.textM};
    color: ${({ theme }) => theme.colors.baseText};
  }

  @media (max-width: 751px) {
    justify-content: center;
    p {
    }
  }
`

export const ProfileData = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1.5rem;

  span {
    display: flex;
    align-items: center;
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
