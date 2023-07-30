import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
    return (
        <section id='about'>
            <Container>
                <Row>
                    <Col sm='12' md='6'>
                        <h2>About</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quam placeat libero consequatur eum dolorum
                            ea, exercitationem alias accusantium quod asperiores
                            ex ad, quis, quo corrupti iure modi expedita.
                            Assumenda, vero.
                        </p>
                    </Col>
                    <Col sm='12' md='6'>
                        <Image
                            src='../src/assets/about.jpg'
                            fluid
                            alt='football boots and ball'
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
