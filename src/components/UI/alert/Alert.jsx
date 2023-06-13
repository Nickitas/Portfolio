import { useEffect } from 'react'
import { close, smile } from '../../../assets'
import cls from './alert.module.scss'


const Alert = ({ setShowAlert, showAlert, title, message }) => {

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
        }, 4_000)
    }, [showAlert])

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

    const alert = (
        <div className={`${cls.alert} ${showAlert ? cls.animation : ''}`}>
            <div className={cls.icon}>
                <img src={smile} alt='info_icon' />
            </div>
            <div className={cls.message}>
                <h5>{ title }</h5>
                <p>{ message }</p>
            </div>
            <div className={cls.close} onClick={handleCloseAlert}>
                <img src={close} alt='close' />
            </div>
        </div>
    )

    return alert
}

export { Alert }