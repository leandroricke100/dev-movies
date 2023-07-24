import React from 'react'
import { getImages } from '../../utils/getImages'
import { Container } from './styles'
import PropTypes from 'prop-types'

function Card({ item }) {
  return (
    <Container>
      <img src={getImages(item.poster_path || item.profile_path || '')} />
      <h3>{item.title || item.name}</h3>
    </Container>
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    poster_path: PropTypes.string,
    profile_path: PropTypes.string,
  }),
}

export default Card
