import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {CgSmartHomeWashMachine} from 'react-icons/cg'
import { GoThreeBars } from 'react-icons/go'
import { useState } from 'react'

function Header() {
  const [ShowMenue, setShowMenue] = useState(true)

  const toggleMenu = () => {
    setShowMenue((ShowMenue)=>!ShowMenue)
  }
  return (
  <div className={css.container}>
    <div className={css.logo}>
        <img src={Logo} width={130} alt='Offbeat'/>
    </div>
 
    <div className={css.right}>
        <div className={css.bars}
        onClick={toggleMenu}
        >
          <GoThreeBars/>
        </div>
        <div className={css.menu}>
            <ul className={css.menu} style={{display: ShowMenue? 'inherit': 'none'}}>
                <li>Home</li>
                <li>Meet us</li>
                <li>Rates</li>
                <li>Schedule</li>
                <li>Contact</li>
            </ul>
            <input type='text' className={css.search} placeholder={'search'}/>
            <CgSmartHomeWashMachine className={css.cart}/>
        </div>
    </div>
  </div>
  )
}

export default Header