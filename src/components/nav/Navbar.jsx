import { useState, useEffect} from 'react'
import { navLinks } from '../../constants'
import { logo, menu, close } from '../../assets'
import cls from './nav.module.scss'


const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)

    const getScroll = () => {
        if (window.pageYOffset != undefined) {
            return [pageXOffset, pageYOffset]
        } else {
            var sx, sy, d = document,
            r = d.documentElement,
            b = d.body
            sx = r.scrollLeft || b.scrollLeft || 0
            sy = r.scrollTop || b.scrollTop || 0
            return [sx, sy]
        }
    }

    useEffect(() => {
        const t = setInterval(() => {
          const [x, y] = getScroll()
          if (y > 200) {
            setScroll(true)
          } else {
            setScroll(false)
          }
        }, 20)
        return () => clearInterval(t)
    }, [])

    const handleLogoClick = () => {
        setActive('')
        window.scrollTo(0, 0)
    }

    const handleMenuChoise = (link) => {
        setActive(link)
        setToggle(!toggle)
    }

    const navBar = (
        <nav className={cls.nav} data-nav={scroll}>
            <div className={cls.row}>
                <div className={cls.logo} onClick={handleLogoClick}>
                    <img src={logo} alt='logo'/>
                    <span>Nickita Datsky</span>
                </div>
                <ul className={cls.list}>
                    {
                        navLinks.map(link => (
                            <li key={link.id} className={active === link.title ? `${cls.active} ${cls.item}` : cls.item} onClick={() => setActive(link.title)}>
                                <a href={`#${link.id}`}>
                                    { link.title }
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className={cls.menu}>
                    <img src={toggle ? close : menu} alt='menu' onClick={() => setToggle(!toggle)} />
                    <div className={toggle ? cls.dropdown : `${cls.dropdown} ${cls.hidden}`}>
                        <ul className={cls.list}>
                            {
                                navLinks.map(link => (
                                    <li key={link.id} className={active === link.title ? `${cls.active} ${cls.item}` : cls.item} onClick={() => handleMenuChoise(link.title)}>
                                        <a href={`#${link.id}`}>
                                            { link.title }
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )

    return navBar
}

export { Navbar }