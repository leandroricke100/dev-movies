import { useEffect, useState } from 'react'
import { Container, Background } from './styles'
import api from '../../services/api'

// eslint-disable-next-line react/prop-types
function Modal({ movieId }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get(`/movie/${movieId}/videos`)
      console.log(results)
      setMovie(results)
    }

    getMovies()
  }, [])

  return (
    <Background>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal
