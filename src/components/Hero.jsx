import { Container, Row, Button, Col } from 'react-bootstrap';

function Hero() {
    // return <h1>Welcome to Grantham Kickabout Klub</h1>;
    return (
        <section id='hero'>
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome to Grantham Kickabout Klub</h1>
                        <p>Weekly football group for fun</p>
                        <Button size='lg' variant='secondary'>
                            Details
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;
