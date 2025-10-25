import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function ReactGridExample() {
  return (
    <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={4}>Column 1</Col>
          <Col sm={12} md={6} lg={4}>Column 2</Col>
          <Col sm={12} md={6} lg={4}>Column 3</Col>
        </Row>
        <Row>
            <Col lg={{ span: 4, offset: 4 }}><div className='bg-primary p-4'>Column 1</div></Col>
            <Col><div className='bg-secondary p-4' >Column 2</div></Col>
            <Col><div className='bg-success p-4' >Column 3</div></Col>
        </Row>
    </Container>
  );
}

export default ReactGridExample