import { Container, Menu, Li } from './styles'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

// eslint-disable-next-line react/prop-types
function Header() {
  return (
    <Container>
      <img src={Logo} alt="logo-dev-movies" />
      <Menu>
        <Li>
          <Link to="/">Home</Link>
        </Li>

        <Li>
          <Link to="/filmes">Filmes</Link>
        </Li>

        <Li>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header
