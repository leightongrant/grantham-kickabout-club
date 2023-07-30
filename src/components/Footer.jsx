import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
    return (
        <footer id='footer' style={{ backgroundColor: 'red' }}>
            <Container>
                <Row>
                    <Col sm='12'>
                        <p className='copyright'>
                            © 2023, Grantham Kickabout Klub
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
