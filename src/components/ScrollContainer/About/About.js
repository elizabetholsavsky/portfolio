import './About.css'
import ProfilePicture from '../images/Elizabeth.jpg'

const About = () => {
    return (
        <section id="about">
            <div className="content-container">
                <div className="content-text">
                    <h2>About</h2>
                    <h3>Web Developer</h3>
                    <h4>Austin, TX</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos fugiat reiciendis aperiam, voluptatum eveniet quisquam quibusdam explicabo corporis, vero, non omnis consequatur numquam cum porro? Hic repellat officia iste!</p>
                </div>

                <div className='profile-picture'>
                    <img src={ProfilePicture} alt="Elizabeth Olsavsky" className='elizabeth'/>
                </div>
            </div>
    </section>
)
}
export default About