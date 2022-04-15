import React from 'react'
import styled from 'styled-components'
import TinderCard from 'react-tinder-card'

type CardProps = {
  film: {
    id: string
    imageURL:string
    title: string
    summary: string
    rating: number
  },
  
}

export const Card = (props: CardProps) => {

  const onSwipe = (direction:string) => {
    //reject movie and remove from stos
   }
  return (
    <div>
      <TinderCard onSwipe={onSwipe} key={props.film.id}>
      <SingleCard background={props.film.imageURL}>
        <h1>{props.film.title}</h1>   
      </SingleCard>
    </TinderCard>

    
    </div>
    
  )
}


const SingleCard = styled.div`
  position: absolute;
  background: url(${props => props.background}) no-repeat top center;
  width: 200px;
  height: 300px;

`