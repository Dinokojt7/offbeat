import React from 'react'
import css from './Hero.module.css'
import HeroImage from '../../assets/hero.png'
import {CgSmartHomeWashMachine} from 'react-icons/cg'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Hero = () => {
    const transition = {duration: 3, type: 'spring'}
  return (
    <div className={css.container}>
        {/*left side*/}
        <div className={css.h_sides}>
            <span className={css.text1}>  
                <span>PREMIUM SNEAKER CARE</span>
            </span>
            <div className={css.text2}>
                <span>YOUR OLD NEW</span>
                <span>Sneaker cleaning and restoration specialists</span>
            </div>
        </div>

         {/*middle hero image side*/}
         <div className={css.middle}>

            {/*background circle*/}
            <motion.div
            initial={{bottom: '2rem'}}
            whileInView={{bottom: '0rem'}}
            className={css.whiteCircle}
            transition={transition}
            ></motion.div>

            {/*hero image*/}
            <motion.img
            transition={transition}
            initial={{bottom:'-2rem'}} 
            whileInView={{bottom: '0rem'}}
            src={HeroImage} alt='' width={80}/>

            {/*hero image*/}
            <div className={css.cart2}>  
                {/* <CgSmartHomeWashMachine/> */}
                <div className={css.signup}>
                    <span> Best Signup Offers</span>

                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </div>
         </div>

          {/*right side*/}
          <div className={css.h_sides}>
            <div className={css.mission}>
                <span>5 pairs</span>
                <span>Free collection and delivery</span>
            </div>

            <div className={css.mission}>
            <span>24hrs</span>
                <span>Fast and reliable</span>
            </div>
        </div>
    </div>
  )
}

export default Hero