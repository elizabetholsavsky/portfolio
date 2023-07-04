import './Nav.css'

const Nav = () => {
  return (
      <nav className="navbar">
        <div className="name">
            <h1>Elizabeth Olsavsky</h1>
        </div>

        <ul class="nav-list">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#resume" className="nav-link">Resume</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav