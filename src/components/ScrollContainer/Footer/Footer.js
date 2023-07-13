import './Footer.css'
import SvgUp from '../SVG/Up.js';
import SvgGithub from '../SVG/Github';
import SvgHashnode from '../SVG/Hashnode';
import SvgLinkedin from '../SVG/Linkedin';
import SvgTwitter from '../SVG/Twitter';
import SvgEmail from '../SVG/Email';

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
                        <a href="https://www.linkedin.com/in/elizabetholsavsky/" target="_blank" rel="noreferrer"><SvgLinkedin title="LinkedIn"/></a>
                        <a href="https://github.com/elizabetholsavsky" target="_blank" rel="noreferrer"><SvgGithub title="GitHub"/></a>
                        <a href="https://twitter.com/elizavsky" target="_blank" rel="noreferrer"><SvgTwitter title="Twitter"/></a>
                        <a href="https://elizabetholsavsky.hashnode.dev/" target="_blank" rel="noreferrer"><SvgHashnode title="Hashnode"/></a>
                        <a href="mailto:elizabetholsavsky@gmail.com"title="Email"><SvgEmail/></a>   
                </div>
            
                <p className="source-code"><a href="https://github.com/elizabetholsavsky/portfolio" target="_blank" rel="noreferrer">Portfolio Repo</a></p>
                <p className='copyright'>© 2023 Elizabeth Olsavsky</p>
                <p className='footer-email'>elizabetholsavsky@gmail.com</p>
            </section>
        </footer>
    )
}
export default Footer