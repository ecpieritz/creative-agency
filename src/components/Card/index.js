import React from 'react'

const Card = ({img, imgBgColor, imgAlt, title, text}) => {
  return (
    <div className='card'>
      <img className={`ca-colors__bg__${imgBgColor}`} src={img} alt={imgAlt} />
      <p className='font-weight-600 text-center'>{title}</p>
      <p className='text-center'>{text}</p>
    </div>
  )
}

export default Card
