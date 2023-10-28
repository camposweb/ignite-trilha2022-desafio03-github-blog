import { NavLink } from 'react-router-dom'
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

export function Post() {
  return (
    <PostContainer>
      <PostInfoContainer>
        <PostInfoNav>
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            voltar
          </NavLink>
          <NavLink to={'#'}>
            ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </PostInfoNav>
        <PostInfo>
          <h1>JavaScript data types and data structures</h1>
          <section>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              camposweb
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              Há 1 dia
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              55 comentários
            </span>
          </section>
        </PostInfo>
      </PostInfoContainer>
      <PostContent>
        <section>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
          <p>Dynamic typing</p>
          <p>
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </p>
          <code>
            let foo = 42; // foo is now a number foo = ‘bar’; // foo is now a
            string foo = true; // foo is now a boolean
          </code>
        </section>
      </PostContent>
    </PostContainer>
  )
}
