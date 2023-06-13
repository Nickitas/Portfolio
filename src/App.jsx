import { Navbar } from './components/nav/Navbar'
import { Hero } from './components/hero/Hero'
import { GlowingElements } from './components/UI/glowing_elements/GlowingElements'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Tech from './components/tech/Tech'
import Works from './components/works/Works'
import Feedbacks from './components/feedbacks/Feedbacks'
import Contacts from './components/contacts/Contacts'
import StartCanvas from './components/canvas/Stars'


const App = () => {
  return (
    <div className='App'>
      <GlowingElements />
      <div className='screen'>
        <Navbar />
        <Hero />
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className='space'>
        <Contacts/>
        <StartCanvas/>
      </div>
    </div>
  )
}

export default App