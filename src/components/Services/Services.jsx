import React from 'react'
import css from './Services.module.css'
import Plane from '../../assets/plane.png'

const Services = () => {
  return (
   <div className={css.container}>
        <img src={Plane} alt=''/>
        <h1 >Our Featured Serivces</h1>

        
    </div>

  )
}

export default Services