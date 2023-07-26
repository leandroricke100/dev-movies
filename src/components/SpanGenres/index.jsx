import { Container } from './styles'

// eslint-disable-next-line react/prop-types
function SpanGenres({ genres }) {
  return (
    <Container>
      {genres &&
        // eslint-disable-next-line react/prop-types
        genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
    </Container>
  )
}

export default SpanGenres
