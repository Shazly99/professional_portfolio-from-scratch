import React, { useState } from 'react'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion'
import './Navbar.scss'

export default function Navbar() {
  const [Toggle, setToggle] = useState(false);

  return (
    <>
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
        <span className="logo" >EL-Shazly<span></span>  </span>
        </div>
        <ul className='app__navbar-links'>
          {['home', 'about', 'works', 'Skills' , "Contact"].map((item) =>
          (<li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
          ))}
        </ul>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {
            Toggle && (
              <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 1.5, ease: 'backOut' }} >
                <HiX  onClick={() => setToggle(false)} />
                  <ul >    
                    {['home', 'about', 'works', 'Skills',   "Contact"].map((item) =>
                    (<li key= {item}>
                      <a href={`#${item}`}>{item}</a>
                     </li>
                    ))}
                  </ul>
              </motion.div>
            )
          }
        </div>
      </nav>
    </>

  )
}
