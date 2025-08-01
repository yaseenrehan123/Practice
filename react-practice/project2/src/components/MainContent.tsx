import React from 'react'
import CharacterCard from './CharacterCard'
import characterCardsData from '../data/characterCardsData'
import type { CharacterCardData } from '../types'
const MainContent = () => {
  return (
    <div className='main-content'>
        <div><h2>Characters</h2></div>
        <div className='card-container'>
            {characterCardsData.map((data:CharacterCardData)=>(
              <CharacterCard key = {`character-card-${data.heading}`}{...data}/>
            ))}
        </div>
    </div>
  )
}

export default MainContent