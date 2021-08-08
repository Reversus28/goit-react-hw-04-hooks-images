import styled from '@emotion/styled'

const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.h1`
  margin-top: 50px;

  margin-bottom: 0;

  font-size: 35px;
  text-align: center;
  color: #292f50;
`
const LoaderWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export { List, Title, LoaderWrap }
