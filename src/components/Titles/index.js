import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <>
     <h4 className='ca-colors__text__yellow text-center'>{subtitle}</h4> 
     <h3 className='text-center mx-5'>{title}</h3>
    </>
  )
}

export default Title