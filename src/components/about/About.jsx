import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { services } from '../../constants'
import { fadeIn, textVariant } from '../../utils/mothion'
import cls from './about.module.scss'


const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className={cls.card}>
            <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                className={cls.border}
            >
            <div className={cls.cover} options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            >
                <img src={icon} alt={title} />
                <h3>{ title }</h3>
            </div>
        </motion.div>
      </Tilt>
    )
}


const About = () => {
    const about = (
        <>
            <motion.div variants={textVariant()}>
                <p className='section_subtext'>Introduction</p>
                <h2 className='section_title'>Overview.</h2>
            </motion.div>
            <motion.p className='text' variants={fadeIn('', '', 0.1, 1)}>
                I'm a skilled software developer with experience in JavaScript, TypeScript, Python. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. I find Interest in web programming and Internet Technologies, Artificial Intelligence and Information Security. Let's work together to bring your ideas to life!
            </motion.p>
            <div className={cls.cardsWrapper}>
                {
                    services.map((service, index) => (
                        <ServiceCard key={service.title} index={index} {...service} />
                    ))
                }
            </div>
        </>
    )

    return about
}

export default SectionWrapper(About, 'about') 