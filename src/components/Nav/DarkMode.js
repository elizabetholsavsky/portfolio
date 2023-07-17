import SvgSun from '../ScrollContainer/SVG/Sun';
import SvgMoon from '../ScrollContainer/SVG/Moon';
import './DarkMode.css';

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    }

    const selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme === "dark") {
        setDarkMode();
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    }
    return (
        <div className='dark-mode'>
                <label className="toggle" for="darkmode-toggle">
                <span className="sun-icon"><SvgSun/></span>
                <input
                    className="dark-mode-input"
                    type="checkbox"
                    id="darkmode-toggle"
                    onChange={toggleTheme}
                    defaultChecked={selectedTheme === "dark"}
                />
                <span class="slider"></span>
                <span className="moon-icon"><SvgMoon/></span>
                </label>
        </div>
    )
}
export default DarkMode