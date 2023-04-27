import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from '@heroicons/react/outline'

const Footer = () => {
  return (
   <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.logo}>
            <img src={Logo} width={130} alt='Offbeat'/>
            </div>
       

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact US</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>70 Juta Street, Braamfontein, 2001</span>
                    </span>
                    <span className={css.pngLine}>
                        <PhoneIcon className={css.icon}/>
                        <span>076 657 8663</span>
                    </span>
                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon}/>
                        <span>twitter.com/offbeatsnkrs</span>
                    </span>
                </div> 
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon}/>
                        <span>Sign In</span>
                    </span>
                </div> 
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon}/>
                        <span>About us</span>
                    </span>
                </div> 
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon}/>
                        <span>Policy & Privacy</span>
                    </span>
                </div> 
            </div>
        </div>
        <div className={css.copyRight}>
            <span>Copyright (c)2023 Offbeat Sneaker Care</span>
            <span>All rights reserved</span>
        </div>
   </div>

  )
}

export default Footer