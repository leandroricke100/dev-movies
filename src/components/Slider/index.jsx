import { Container } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import PropTypes from 'prop-types'
import Card from '../Card'

// eslint-disable-next-line react/prop-types
function Slider({ info, title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={'auto'}
        className="Swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

Slider.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
}

export default Slider
