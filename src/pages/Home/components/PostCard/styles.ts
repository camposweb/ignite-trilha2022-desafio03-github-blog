import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled(NavLink)`
  //width: 26rem;
  //min-height: 16.25rem;
  display: flex;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.basePost};
  border-radius: 0.625rem;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.baseLabel};
  }
`

export const CardContent = styled.div`
  display: flex;
  //padding: 2rem;
  flex-direction: column;
`

export const CardInfo = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    flex: 1;
    font-weight: 700;
    line-height: 2rem;
    font-size: ${({ theme }) => theme.fonts.titleM};
    color: ${({ theme }) => theme.colors.baseTitle};
  }

  span {
    line-height: 1.4rem;
    font-size: ${({ theme }) => theme.fonts.textS};
    color: ${({ theme }) => theme.colors.baseSpan};
  }
`

export const CardDescription = styled.p`
  //margin-top: 1.25rem;
  font-size: ${({ theme }) => theme.fonts.textM};
  color: ${({ theme }) => theme.colors.baseText};
`
