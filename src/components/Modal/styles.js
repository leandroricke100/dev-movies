import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background: #000;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;

  iframe {
    border: none;
  }

  .icon {
    color: #fff;
    position: fixed;
    top: 0;
    display: flex;
    margin-top: 120px;
    cursor: pointer;
  }
`
