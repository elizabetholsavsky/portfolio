import './Footer.css'
import SvgUp from '../SVG/Up.js';
import SvgGithub from '../SVG/Github';
import SvgHashnode from '../SVG/Hashnode';
import SvgLinkedin from '../SVG/Linkedin';
import SvgTwitter from '../SVG/Twitter';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
    return (
        <footer>
            <section id="footer">
                <a href="#about" onClick={scrollToTop}>
                    <SvgUp title="Scroll to top of page"/>
                </a> 

                <div className="footer-socials-container">
                        <a href="https://www.linkedin.com/in/elizabetholsavsky/" target="_blank"><SvgLinkedin title="LinkedIn"/></a>
                        <a href="https://github.com/elizabetholsavsky" target="_blank"><SvgGithub title="GitHub"/></a>
                        <a href="https://twitter.com/elizavsky" target="_blank"><SvgTwitter title="Twitter"/></a>
                        <a href="https://elizabetholsavsky.hashnode.dev/" target="_blank"><SvgHashnode title="Hashnode"/></a>
                </div>

                <h3 className='copyright'>© 2023 Elizabeth Olsavsky</h3>
            </section>
        </footer>
    )
}
export default Footer