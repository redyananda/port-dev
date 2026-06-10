import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <a href="#hero" className='navbar-brand'>
            <img src="/logo.png" alt="logo" />
        </a>
        <ul className='navbar-nav'>
            <li className='nav-link'><a href="#about">About Me</a></li>
            <li className='nav-link'><a href="">Skills</a></li>
            <li className='nav-link'><a href="">Portfolio</a></li>
            <li className='nav-link'><a href="">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar