import React, { Fragment } from 'react';
import styled from 'styled-components'
import GlobalStyle from './theme/globalStyle';
import { CardsDeck } from './components/CardsDeck';

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <CardsDeck/>
      </Container>
    </Fragment>
   
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: palevioletred;
  positon: relative;
 
`
