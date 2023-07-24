import { ButtonRed, ButtonWhite } from './styles'

// eslint-disable-next-line react/prop-types
function Button({ children, red }) {
  return (
    <>
      {red ? (
        <ButtonRed>{children}</ButtonRed>
      ) : (
        <ButtonWhite>{children}</ButtonWhite>
      )}
    </>
  )
}

export default Button
