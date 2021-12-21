
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar () {
    return (
        <Navbar bg="light" variant="light">
            <Container>
            <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/biography">Biography</Link>
            <Link to="/works">Works</Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;