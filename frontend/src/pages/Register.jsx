import React from 'react'; 
import { Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Register() {
  return (
      <div className='d-flex col-10 align-text-bottom justify-content-end my-auto'>
            <Card style={{ width: '24rem' }} >
            <Card.Body>
                <Card.Text>New To HighRadius?</Card.Text>
                <Card.Title>Make an Account</Card.Title>
                 <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className='d-grid gap-2'>
            <Button variant='primary'>
                Register
            </Button>
        </div>
        </Form>
            </Card.Body>
            </Card>
            </div>
  )
}

export default Register