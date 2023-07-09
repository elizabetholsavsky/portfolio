import './Footer.css'
import SvgUp from '../SVG/Up.js';

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
                <h3 className='copyright'>© 2023 Elizabeth Olsavsky</h3>
            </section>
        </footer>
    )
}
export default Footer