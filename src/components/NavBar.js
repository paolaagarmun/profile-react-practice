
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar () {
    return (
        <div className='navbar'>
            
            <Link to="/" className='links'>Home</Link>
            <Link to="/biography" className='links'>Biography</Link>
            <Link to="/works" className='links'>Works</Link>
            
        </div>
    )
}

export default NavBar;