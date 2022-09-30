import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip';
import AppWrap from '../../wrapper/AppWrap'
import { client, urlFor } from '../../client';
import './Skills.scss'
import MotionWrap from '../../wrapper/MotionWrap';

const Skills = () => {
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text mt-2">Skills & Experiences</h2>
      <div className="app__skills-container row">
        <div className="col-md-8">
        <motion.div className='app__skills-list '>
          {
            skills.map((skill, item) => (
              <motion.div className=' app__skills-item app__flex' whileInView={{ opacity: [0, 1] }} transition={{ duration: 1.2 }} key={skill.name} >
                <div className="shadow-lg app__flex" style={{ backgroundColor: skill.bgColor }}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))
          }
        </motion.div>
        </div>
        <div className="col mt-5 ">
          
        <div className="app__skills-exp  ">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item " key={experience.year}
            whileInView={{ y: [200, 2], opacity: [0, 1] }} transition={{ duration: 2 }}
            > 
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ y: [100, 2], opacity: [0, 1] }} transition={{delay:2, duration: 2 }} 
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip id={work.name} effect="solid" arrowColor="#fff" className="skills-tooltip"> 
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}
 
export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'Skills',
  'app__whitebg',
);