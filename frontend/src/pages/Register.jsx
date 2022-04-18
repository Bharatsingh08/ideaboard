import React from 'react'; 
import { Card, Button, Form,InputGroup } from 'react-bootstrap';
import Mailicon from '../Assets/Mailicon.png'
import passwordlock from '../Assets/passwordlock.png'
import orange from '../Assets/orange.png'
import blue from '../Assets/blue.png'
import green from '../Assets/green.png'
import hrlogo from '../Assets/hrlogo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Register() {
    const handleSubmitButton = (event)=> {
        console.log(event);
    }
    return (
         <div className='d-flex col-10 align-text-bottom justify-content-end myauto' alt="main" style={{paddingTop:"50px"}}>
         <Card style={{border:"none"}}>
            <Card.Body>
                <Card.Text>New To HighRadius?</Card.Text>
                <Card.Title>Make an Account</Card.Title>
                 <Form>
                 <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
                <Form.Control type="text" placeholder="Username" style={{zIndex:1}} />
                <InputGroup.Text> <img src={Mailicon} alt="Mailicon" />  </InputGroup.Text>
            </InputGroup>
            
        </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label><InputGroup>
                    <Form.Control type="email" placeholder="Enter email" style={{zIndex:1,position:"relative"}} />
                    <InputGroup.Text> <img src={Mailicon} alt="Mailicon"/>  </InputGroup.Text>
                    </InputGroup>  </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
            <Form.Control type="password" placeholder="Password" style={{zIndex:1,position:"relative"}}/>
            <InputGroup.Text> <img src={passwordlock} alt="password"/>  </InputGroup.Text></InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <InputGroup>
            <Form.Control type="password" placeholder="Confirm Password" style={{zIndex:1,position:"relative"}} />
            <InputGroup.Text> <img src={passwordlock} alt="Password" />  </InputGroup.Text></InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to the Terms & Conditions and Privacy Policy" style={{fontSize:"13px"}}/>
        </Form.Group>
        <div className='d-grid gap-2'>
            <Button variant='primary' onClick={handleSubmitButton} style={{backgroundColor:"orange", border:"none",zIndex:1, position:"relative"}}>
                Register Now
            </Button>
        </div>
        <br></br>
        </Form>
            </Card.Body>
            </Card>
        <img src={hrlogo} class="hrlogo" alt="hrlogo" style={{width:"450px",height: "100px",left:"100px",top: "250px",position:"absolute"}}/> 
        <img src={orange} class="orange" alt="orange"/>
        <img src={green} class="green" alt="green"/> 
        <img src={blue} class="blue" alt="blue"/>         
             </div>
  )
}

export default Register