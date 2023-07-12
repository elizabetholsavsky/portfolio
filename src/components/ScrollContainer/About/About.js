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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos fugiat reiciendis aperiam, voluptatum eveniet quisquam quibusdam explicabo corporis, vero, non omnis consequatur numquam cum porro? Hic repellat officia iste!</p>
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