import { Html, useProgress } from '@react-three/drei';
import cls from './loader.module.scss'

const CanvasLoader = () => {
    const { progress } = useProgress()

    const loader = (
        <Html as='div'
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <span className={cls.canvasLoader}></span>
            <p className={cls.progress}>{ progress.toFixed(2) }%</p>
        </Html>
    )
    return loader
}

export { CanvasLoader }