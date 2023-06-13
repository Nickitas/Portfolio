import React, { useState, useEffect } from 'react'
import cls from './glowing_elements.module.scss'


const GlowingElements = () => {
    const [elements, setElements] = useState([])

    useEffect(() => {
        const numElements = 5
        const newElements = Array.from({ length: numElements }, (_, index) => {
            return {
                id: index,
                left: Math.floor(Math.random() * window.innerWidth),
                top: Math.floor(Math.random() * document.body.clientHeight),
            }
        })

        setElements(newElements)
    }, [])

    const glowing_elements = (
        <div className={cls.glow_wrapper}>
            {
                elements.map(element => (
                    <div className={cls.glow} key={element.id}
                        style={{
                            left: `${element.left}px`,
                            top: `${element.top}px`,
                        }}
                    />
                ))
            }
        </div>
    )

    return glowing_elements
}

export { GlowingElements }