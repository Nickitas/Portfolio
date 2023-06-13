import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { SectionWrapper } from '../../hoc'
import { slideIn } from '../../utils/mothion'
import { Alert } from '../UI/alert/Alert'
import { EarthCanvas } from '../canvas/EarthCanvas'
import cls from './contacts.module.scss'


const Contacts = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({
        show: false,
        title: '',
        message: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send(
            'service_p2hof18', 
            'template_8pilr8j', 
            {
                from_name:  form.name,
                to_name: 'Nickita',
                from_email: form.email,
                to_email: 'nickitadatsky@gmail.com',
                message: form.message
            },
            'qsHtKqz3iHIBLwsUs'
        ).then(() => {
            setLoading(false)
            setAlert({
                show: true,
                title: 'Thank you!',
                message: 'I will back to you as soon as possible'
            })

            setForm({
                name: '',
                email: '',
                message: ''
            })
        }, (error) => {
            setLoading(false)
            console.error(error)
            setAlert({
                show: true,
                title: 'Something went wrong.',
                message: 'Try to repeat your action'
            })
        })
    }

    const openTelegram = () => {
        window.open('https://t.me/Nidatsky', '_blank')
    }

    const contacts = (
        <div className={cls.contacts}>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className={cls.col}>
                <p className='section_subtext'>Get in touch</p>
                <h3 className='section_title'>Contact.</h3>

                <form ref={formRef} onSubmit={handleSubmit}
                    className={cls.form}
                >
                    <label>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder='What`s your good name?'
                        />
                    </label>
                    <label>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder='What`s your web address?'
                        />
                    </label>
                    <label>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                        />
                    </label>
                    <button type='submit'>
                        { loading ? 'Sending...' : 'Send' }
                    </button>   
                    <div className={cls.row}>
                        <p className={cls.more}>or contact me via telegram</p>
                        <span className='violet-text-gradient' onClick={openTelegram}>@Nidatsky</span>
                    </div>
                </form>
            </motion.div>
            <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className={cls.earthWrapper}>
                <EarthCanvas />
            </motion.div>

            <Alert 
                setShowAlert={setAlert}
                showAlert={alert.show}
                title={alert.title}
                message={alert.message}
            />
        </div>
    )

    return contacts
}

export default SectionWrapper(Contacts, 'contact')