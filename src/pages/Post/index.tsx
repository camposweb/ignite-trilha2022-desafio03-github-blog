import { NavLink, useParams } from 'react-router-dom'
import {
  PostContainer,
  PostContent,
  PostInfo,
  PostInfoContainer,
  PostInfoNav,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function Post() {
  const { issues } = useContext(DataContext)
  const { number } = useParams()
  return (
    <PostContainer>
      {issues
        .filter((issue) => issue.number === Number(number))
        .map((issue) => {
          return (
            <>
              <PostInfoContainer key={issue.id}>
                <PostInfoNav>
                  <NavLink to={'/'}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    voltar
                  </NavLink>
                  <NavLink to={`${issue.html_url}`} target="_blank">
                    ver no github
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </NavLink>
                </PostInfoNav>
                <PostInfo>
                  <h1>{issue.title}</h1>
                  <section>
                    <span>
                      <FontAwesomeIcon icon={faGithub} />
                      {issue.user.login}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCalendarDay} />
                      Há 1 dia
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faComment} />
                      {issue.comments} comentários
                    </span>
                  </section>
                </PostInfo>
              </PostInfoContainer>
              <PostContent>
                <section>
                  <Markdown remarkPlugins={[remarkGfm]}>{issue.body}</Markdown>
                </section>
              </PostContent>
            </>
          )
        })}
    </PostContainer>
  )
}
