import styled from '@emotion/styled'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`

const ModalWrapper = styled.div`
  max-width: calc(100vw - 100px);
  max-height: calc(100vh - 30px);
`

const Img = styled.img`
  width: 700px;
  height: 500px;
`

export { Overlay, ModalWrapper, Img }
