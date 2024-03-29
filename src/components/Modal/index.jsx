import { useEffect, useState } from 'react'
import { Container, Background } from './styles'
import CancelIcon from '@mui/icons-material/Cancel'
import { getMovie } from '../../services/getData'
// eslint-disable-next-line react/prop-types
function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovie(movieId))
    }

    getMovies()
  }, [])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <CancelIcon className="icon" />
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
