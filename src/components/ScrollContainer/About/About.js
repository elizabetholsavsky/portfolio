import './About.css'
import ProfilePicture from '../images/Elizabeth.jpg'

const About = () => {
    return (
        <section aria-label="about" id="about">
            <div className="content-container">
                <div className="content-text">
                    <h2>About</h2>
                    <h3>Elizabeth Olsavsky</h3>
                    <h4>Web Developer</h4>
                    <h5>Austin, TX</h5>
                </div>

                <div className="about-card">
                    <div className="about-text-container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos fugiat reiciendis aperiam, voluptatum eveniet quisquam quibusdam explicabo corporis, vero, non omnis consequatur numquam cum porro? Hic repellat officia iste!</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos fugiat reiciendis aperiam, voluptatum eveniet quisquam quibusdam explicabo corporis, vero, non omnis consequatur numquam cum porro? Hic repellat officia iste!</p>
                    </div>

                    <div className='profile-picture-container'>
                        <img src={ProfilePicture} alt="Elizabeth Olsavsky" className='elizabeth'/>
                    </div>
                </div>

                
            </div>
    </section>
)
}
export default About