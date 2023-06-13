import { BallCanvas } from '../canvas/Ball'
import { SectionWrapper } from '../../hoc'
import { technologies } from '../../constants'
import cls from './tech.module.scss'


const Tech = () => {

    const openGitHub = () => {
        window.open('https://github.com/Nickitas', '_blank')
    }

    const tech = (
        <div className={cls.techs}>
            {
                technologies.map(technology => (
                    <div className={cls.ball_wrapp} key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))
            }
            <div className={cls.row}>
                <p className={cls.more}>more on</p>
                <span className='violet-text-gradient' onClick={openGitHub}>GitHub</span>
            </div>
        </div>
    )
    return tech
}

export default SectionWrapper(Tech, '')