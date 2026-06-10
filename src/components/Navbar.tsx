import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <a href="/" className='navbar-brand'>
            <img src="/logo.png" alt="logo" />
        </a>
        <ul className='navbar-nav'>
            <li className='nav-link'><a href="">Home</a></li>
            <li className='nav-link'><a href="">About Me</a></li>
            <li className='nav-link'><a href="">Skills</a></li>
            <li className='nav-link'><a href="">Portfolio</a></li>
            <li className='nav-link'><a href="">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar