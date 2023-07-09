import About from './About/About.js'
import Projects from './Projects/Projects.js'
import Resume from './Resume/Resume.js'
import Contact from './Contact/Contact.js'
import Footer from './Footer/Footer.js'
import './ScrollContainer.css'

const ScrollContainer = () => {
    return (
    <div className='scroll-container'>
            <About/>
            <Projects/>
            <Resume/>
            <Contact/>
            <Footer/>
    </div>
    )
}
export default ScrollContainer