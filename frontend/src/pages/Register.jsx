import React from 'react'; 
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Register() {
  return (
      <div className='d-flex col-12 justify-content-end my-auto'>
            <Card style={{ width: '24rem' }} >
            <Card.Body>
                <Card.Text>New To HighRadius?</Card.Text>
                <Card.Title>Make an Account</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
  )
}

export default Register