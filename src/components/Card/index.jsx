import { getImages } from '../../utils/getImages'
import { Container } from './styles'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function Card({ item }) {
  return (
    <Container>
      <img src={getImages(item.poster_path)} />
      <h3>{item.original_title}</h3>
    </Container>
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
}

export default Card
