import './Footer.css'

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
                    <h3>Back to Top</h3>
                </a> 
                <h3 className='copyright'>© 2023 Elizabeth Olsavsky</h3>
            </section>
        </footer>
    )
}
export default Footer