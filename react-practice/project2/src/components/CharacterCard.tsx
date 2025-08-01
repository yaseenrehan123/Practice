import React from 'react'

const CharacterCard = (props:{url:string,imgUrl:string,heading:string,description:string}) => {
  return (
    <div className='character-card'>
      <a href={props.url} className='link' target='blank'></a>
      <div className='img-container'><img src={props.imgUrl} alt="" /></div>
      <div className='heading-container'><h2>{props.heading}</h2></div>
      <div className='description'><p>{props.description}</p></div>
    </div>
  )
}

export default CharacterCard