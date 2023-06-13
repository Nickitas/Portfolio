import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { fadeIn, textVariant } from '../../utils/mothion'
import { testimonials } from '../../constants'
import cls from './feedbacks.module.scss'


const FeedbackCard = ({ index, testimonial, name, designation, company, link, image }) => (
    <motion.div variants={fadeIn('', 'spring', index * 0.5, 0.75)} className={cls.card}>
        <p className={cls.quot}>"</p>
        <p className={cls.review}>{ testimonial }</p>
        <div className={cls.personWrapper}>
            <div className={cls.person}>
                <p className={cls.name}>{ name }</p>
                <p className={cls.designation}>{ designation } of { company }</p>
                {link && <span className={`${cls.link} blue-text-gradient`}>@{link}</span>}
            </div>
            <img src={image} alt={`feedback_by-${name}`} />
        </div>
    </motion.div>
)


const Feedbacks = () => {
    const feedbacks = (
        <div className={cls.feedbacksWrapper}>
            <motion.div variants={textVariant()}>
                <p className='section_subtext'>What others say</p>
                <h2 className='section_title'>Testimonials.</h2>
            </motion.div>
            <div className={cls.cardsWrapper}>
                {
                    testimonials.map((testimonial, index) => (
                        <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
                    ))
                }
            </div>
        </div>
    )

    return feedbacks
}

export default SectionWrapper(Feedbacks, '')