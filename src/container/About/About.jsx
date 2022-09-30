import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import { urlFor, client } from '../../client'
import AppWrap from '../../wrapper/AppWrap'
import MotionWrap from '../../wrapper/MotionWrap'

const About = () => { 
  const [abouts, setabouts] = useState([])
  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query).then((data) => {
      setabouts(data)
    })
  }, [])
  return (
    <>
      <h2 className="head-text" style={{ marginTop: 50 }}>I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
      <div className="app__profiles">
        {
          abouts.map((about, i) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + i}
            >
              <img src={urlFor(about.imgUrl)} alt={about.imgUrl} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 1 }}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}
 
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);