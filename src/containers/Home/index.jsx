import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries,
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [topPeople, setTopPeople] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople(),
      ])
        .then(([movie, topMovie, topSeries, popularSeries, topPeople]) => {
          setMovie(movie)
          setTopMovies(topMovie)
          setTopSeries(topSeries)
          setPopularSeries(popularSeries)
          setTopPeople(topPeople)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button
                  red={true}
                  onClick={() => navigate(`/detalhe/${movie.id}`)}
                >
                  Assista agora
                </Button>
                <Button red={false} onClick={() => setShowModal(true)}>
                  Assista o trailer
                </Button>
              </ContainerButtons>
            </Info>

            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
      {popularSeries && <Slider info={popularSeries} title={'Lançamentos'} />}
      {topPeople && <Slider info={topPeople} title={'Artistas Populares'} />}
    </>
  )
}
export default Home
