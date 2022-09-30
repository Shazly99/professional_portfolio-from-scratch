import React, { useEffect, useState } from 'react'
import { images } from '../../constants'
import { motion } from 'framer-motion'
 import './Header.scss'
import AppWrap from './../../wrapper/AppWrap';
import { client, urlFor } from '../../client';
 

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
function Header() {
  const [CV, setCV] = useState([])
   useEffect(() => {
    const query = '*[_type == "cv"]'
    client.fetch(query).then((data) => {
     let newStr = data[0].CV.asset._ref.replace('file-', '').replace('-pdf','.pdf');
     setCV(newStr)
     });
  }, []);
  return (
    <>
      <div   className=" app__header app__flex">
        <motion.div whileInView={{ x: [-100, 2], opacity: [0, 1] }} transition={{ duration: 5 }} className="app__header-info" >
          <div className="app__header-badge">

            <div className="badge-cmp  app__flex mt-5 ">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className='head-text'>Shazly</h1>
              </div>
            </div>

            <div className="tag-cmp  app__flex">
              <p className="p-text">Web Developer </p>
              <p className="p-text  ">Freelancer</p>
            </div>
            <a  href={`https://cdn.sanity.io/files/phr2vgm6/production/${CV}`}  target="_blank" download className="app__cv">
                Download CV
            </a>
          </div>
        </motion.div>

        <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 5, delayChildren: 0.5 }} className="app__header-img" >
          <img src={images.profile}  className="app__shazly-img" />
          <motion.img whileInView={{ scale: [0, 1] }} transition={{ duration: 5, ease: 'easeInOut' }} className="overlay__circle" src={images.circle}/>
        </motion.div>

        
        <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles" >
          {[  images.react ,images.angular,images.sass ].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  )
}
export default  AppWrap(Header, 'home')

 