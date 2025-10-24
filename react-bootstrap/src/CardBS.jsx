import { Button, Card, Col, Container, Row } from "react-bootstrap";

function CardBS() {
    return (
        <Container>
            <Row>
                <Col>
                <Card bg="warning" border="secondary">
                    <Card.Header>CARD HEADER</Card.Header>
                    <Card.Img  src="/src/Image.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="text-muted" >Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            This is a simple card example using React Bootstrap.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <div className="d-grid">
                        <Button variant="primary">Click Me</Button>
                        </div>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                <Card bg="warning" border="secondary">
                    <Card.Header>CARD HEADER</Card.Header>
                    <Card.Img  src="/src/Image.jpg" />
                    <Card.ImgOverlay>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="text-muted" >Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            This is a simple card example using React Bootstrap.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <div className="d-grid">
                        <Button variant="primary">Click Me</Button>
                        </div>
                    </Card.ImgOverlay>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CardBS;