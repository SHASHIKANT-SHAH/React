import { Carousel, Col, Container, Row } from "react-bootstrap";

function ReactCarouselExample() {
    return (
        <Container fluid>
            <Row>
                <Col>
                <Carousel fade>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/48fede5e1b0e76f7.jpg?q=60"/>
                    <Carousel.Caption>
                        <h3>Summer Collection</h3>
                        <p>Explore the latest trends in summer fashion.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/5b309e98775e22e4.jpg?q=60"/>
                    <Carousel.Caption>
                        <h3>Exclusive Offers</h3>
                        <p>Grab the best deals on our new arrivals.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/48fede5e1b0e76f7.jpg?q=60"/>
                    <Carousel.Caption>
                        <h3>New Arrivals</h3>
                        <p>Check out the freshest styles in our collection.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default ReactCarouselExample;