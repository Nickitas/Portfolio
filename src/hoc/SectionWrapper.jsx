import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/mothion'


const randomPoint = (min, max) => Math.random() * (max - min) + min

const Wrapper = (Component, idName) => function HOC() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='wrapper'
    >
      <span className='hash-span' id={idName}>
        &nbsp;
        <div className='glow' style={{
          top: `${randomPoint(1, 2) * 100}%`,
          left: `${randomPoint(1, 2) * 100}%`,
        }}

        />
      </span>

      <Component />
    </motion.section>
  )
}

export default Wrapper