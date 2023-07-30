import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaFutbol, FaParking } from 'react-icons/fa';
function Details() {
    return (
        <section id='details'>
            <Container>
                <Row>
                    <Col sm='12'>
                        <h2>Details</h2>

                        <ListGroup>
                            <ListGroup.Item>
                                <FaFutbol />
                                Fee goes towards pitch rental, bibs, football
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaFutbol />
                                Arrive 10 minutes before so we can kick-off on
                                time
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaFutbol />
                                No shouting or aggressive behaviour
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaFutbol />
                                Goalkeeper change every 10 minutes
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaFutbol />
                                Game will last for one hour
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaFutbol />
                                Game time will be on Thursdays @ 7pm
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaFutbol />
                                Enjoy game and be positive
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaParking />
                                Free Parking Available
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Details;
