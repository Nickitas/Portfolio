import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ComputersCanvas } from '../canvas/ComputersCanvas'
import cls from './hero.module.scss'


const Hero = () => {
    const [startAnimation, setStartAnimation] = useState(false)
    
    useEffect(() => {
        animatedText()
    }, [startAnimation])

    setTimeout(() => {
        setStartAnimation(!startAnimation)
    }, 5500)

    const animatedText = () => {
        const animatedElements = document.querySelectorAll('#animated')
        if (animatedElements) {
            animatedElements.forEach((element) => {
                const textArray = element.innerHTML.split('')
                element.innerHTML = ''
    
                textArray.forEach((letter, i) => {
                    setTimeout(() => (element.innerHTML += letter), 75 * i)
                })
            })
        }
    }

    const hero = (
        <section className={cls.hero}>
            <div className={cls.baner}>
                <div className={cls.line}>
                    <div className={cls.head} />
                    <div className={cls.body} />
                </div>
                <div>
                    <h1 className='hero_title'>Hi, I`m <span>Nickita</span>!</h1>
                    <p className='hero_subtext' id='animated'>I passionate developer from Russia, Rostov-on-Don</p>
                </div>
            </div>

            <ComputersCanvas />
            
            <div className={cls.scrollButtonWrapper}>
                <a href='#about' className={cls.scrollButton}>
                    <motion.div className={cls.tumb}
                        animate={{y: [0, 24, 0]}}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                    />
                </a>
            </div>
        </section>
    )

    return hero
}

export { Hero }