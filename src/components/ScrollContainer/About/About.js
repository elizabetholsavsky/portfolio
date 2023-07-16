import './About.css'
import ProfilePicture from '../images/Elizabeth.jpg';
import SvgMapMarker from '../SVG/MapMarker';
import SvgGithub from '../SVG/Github';
import SvgHashnode from '../SVG/Hashnode';
import SvgLinkedin from '../SVG/Linkedin';
import SvgTwitter from '../SVG/Twitter';
import SvgEmail from '../SVG/Email';

const About = () => {
    return (
        <section aria-label="about" id="about">
            <div className="about-wrapper">
                <div className="about-content-container">
                    <div className="content-text">
                        <h2>About</h2>
                        <h3>Elizabeth Olsavsky</h3>
                        <h4>Web Developer</h4>
                        <h5><SvgMapMarker/>Austin, TX</h5>
                        <p className='about-tags-container'>
                            <span className='about-tags'>JavaScript</span>
                            <span className='about-tags'>Node</span>
                            <span className='about-tags'>React</span>
                            <span className='about-tags'>Express</span>
                            <span className='about-tags'>MySQL</span>
                            <span className='about-tags'>MongoDB</span>
                        </p>
                    </div>

                    <div className="socials-container">
                            <a href="https://www.linkedin.com/in/elizabetholsavsky/" target="_blank" rel="noreferrer"><SvgLinkedin title="LinkedIn"/></a>
                            <a href="https://github.com/elizabetholsavsky" target="_blank" rel="noreferrer"><SvgGithub title="Github"/></a>
                            <a href="https://twitter.com/elizavsky" target="_blank" rel="noreferrer"><SvgTwitter title="Twitter"/></a>
                            <a href="https://elizabetholsavsky.hashnode.dev/" target="_blank" rel="noreferrer"><SvgHashnode title="Hashnode"/></a>
                            <a href="mailto:elizabetholsavsky@gmail.com"title="Email"><SvgEmail/></a>   
                    </div>

                    <div className="about-card">
                        <div className="about-text-container">
                            <p>
                                I design and build intuitive and accessible web applications. As a former educator, my passion and commitment to learning remains steadfast. This unique background allows me to approach challenges with an empathetic and user-centric perspective, ensuring that my solutions not only functional but provide an up-to-date, seamless, and empowering experience for all users.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='profile-picture-container'>
                    <img src={ProfilePicture} alt="Elizabeth Olsavsky" className='elizabeth'/>
                </div>
            </div>
    </section>
)
}
export default About