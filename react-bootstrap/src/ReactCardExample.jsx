import { Button, Card, Col, Container, Row } from "react-bootstrap";

function ReactCardExample() {
    return (
        <Container>
             <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://placehold.co/300x180?text=Product" />
                <Card.Body>
                    <Card.Title>Kurti Set</Card.Title>
                    <Card.Text>
                    Elegant cotton kurti with dupatta. Perfect for daily wear.
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>
            {/* <Row>
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
             */}
        </Container>
    );
}

export default ReactCardExample;