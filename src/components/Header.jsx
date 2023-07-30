/* Bootstrap Components */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href='#'>Grantham Kickabout Klub</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
