import './Footer.css'
import SvgUp from '../icons/Up.js';

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
                    <SvgUp fill="var (--text)"/>
                </a> 
                <h3 className='copyright'>© 2023 Elizabeth Olsavsky</h3>
            </section>
        </footer>
    )
}
export default Footer