import React, {useState} from 'react'
import styled from 'styled-components'
import { Card } from './Card'
import { FilmsData } from "../data";
export const CardsDeck = () => {

    const [films, setFilms] = useState(FilmsData())

    return (
      <Wrapper>
         <CardsContainer>
          {films && (
            films.map(film =>{
              return <Card film={film}/>
            })
          )}
        </CardsContainer>
      </Wrapper>                                  
   
    )
}

const CardsContainer = styled.div`
  position: relative;
  background-color: purple;
  width: 100%;
  height: 100%;


`

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;


`