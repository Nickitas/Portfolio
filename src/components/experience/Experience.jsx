import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { SectionWrapper } from '../../hoc'
import { experiences } from '../../constants'
import { textVariant } from '../../utils/mothion'
import cls from './experience.module.scss'


const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement contentStyle={{
            background: '#1d1836',
            color: '#fff',
        }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className={cls.companyMarker}>
                    <img src={experience.icon} alt={experience.company_name} />
                </div>
            }
        >
        <div className={cls.head}>
            <h3>{ experience.title }</h3>
            <p>{ experience.company_name }</p>
        </div>
  
        <ul className={cls.list}>
            {
                experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`}>
                        { point }
                    </li>
                ))
            }
        </ul>
      </VerticalTimelineElement>
    )
}


const Experience = () => {

    const experience = (
        <>
            <motion.div variants={textVariant()}>
                <p className='section_subtext'>What I have done so far</p>
                <h2 className='section_title'>Experience.</h2>
            </motion.div>
            <div className={cls.cardsWrapper}>
                <VerticalTimeline>
                    {
                        experiences.map((experience, index) => (
                            <ExperienceCard key={`experience-${index}`}
                                experience={experience}
                            />
                        ))
                    }
                </VerticalTimeline>
            </div>
        </>
    )

    return experience
}

export default SectionWrapper(Experience, '')