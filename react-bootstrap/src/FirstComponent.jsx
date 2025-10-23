import { Alert, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function FirstComponent() {
  return (
    <div>
    <Button variant="danger" size='lg'>React Bootstrap Button</Button>
      <Button variant="success" size='md'>React Bootstrap Button</Button>
      <Button variant="primary" size='sm'>React Bootstrap Button</Button>
      <Button variant="warning">React Bootstrap Button</Button>  
      <Button variant="info">React Bootstrap Button</Button>
      <Alert variant="success">
        <Alert.Heading>Heading text</Alert.Heading>
        This is a success alert—check it out!
        <Alert.Link href="#">This is a link</Alert.Link>
      </Alert>
      <Alert variant="danger">
        This is a danger alert—check it out!
      </Alert>
      <Alert variant="warning">
        This is a warning alert—check it out!
      </Alert>
      <Alert variant="info">
        This is an info alert—check it out!
      </Alert>
    </div>
  );
}