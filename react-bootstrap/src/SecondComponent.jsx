import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function SecondComponent() {
  return (
    <Container fluid>
        <Row>
            <Col lg={{ span: 4, offset: 4 }}>
            <div className='bg-primary p-4' >
                <p>kjskjd</p>
            </div>
            </Col>
            <Col>
            <div className='bg-secondary p-4' >
                <p>kjskjd</p>
            </div>
            </Col>
            <Col>
            <div className='bg-success p-4' >
                <p>kjskjd</p>
            </div>
            </Col>
        </Row>
    </Container>
  );
}

export default SecondComponent