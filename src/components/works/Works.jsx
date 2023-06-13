import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/mothion'
import { github } from '../../assets'
import { projects } from '../../constants'
import { SectionWrapper } from '../../hoc'
import cls from './works.module.scss'


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
            <Tilt className={cls.card} options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}>
                <div className={cls.head}>
                    <img src={image} alt='project_image' />
                    <div className={cls.gitHub}>
                        <div className={cls.gitBtn} onClick={() => window.open(source_code_link, '_blank')}>
                            <img src={github} alt='source code' />
                        </div>
                    </div>
                </div>
                <div className={cls.body}>
                    <h3>{ name }</h3>
                    <p>{ description }</p>
                </div>
                <div className={cls.tags_wrapp}>
                    {
                        tags.map(tag => (
                            <p key={`${name}-${tag.name}`} className={tag.color} >
                                #{tag.name}
                            </p>
                        ))
                    }
                </div>
            </Tilt>
        </motion.div>
    )
}


const Works = () => {
    const works = (
        <>
            <motion.div variants={textVariant()}>
                <p className='section_subtext'>My work</p>
                <h2 className='section_title'>Projects.</h2>
            </motion.div>
            <motion.p className='text' variants={fadeIn('', '', 0.1, 1)}>
                Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
            </motion.p>
            <div className={cls.cardsWrapper}>
                { 
                    projects.map((project, index) => (
                        <ProjectCard 
                            key={`project-${index}`} 
                            index={index} 
                            {...project} 
                        />
                    ))
                }
            </div>
        </>
    )

    return works
}

export default SectionWrapper(Works, 'work')