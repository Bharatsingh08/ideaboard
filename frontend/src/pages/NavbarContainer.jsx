import React from 'react';
import { Link} from 'react-router-dom';
import {Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Dashboardcss.css"
import hrlogo from '../Assets/hrlogo.png';

function NavbarContainer() {
    return(
    <Container>
        <img src={hrlogo} alt="hrlogo" className='hrlogo'/>
        <Nav className='Navbar-brand'>
     <li><Link to="/Posh" style={{textDecoration:"None", color:"#666666"}}>Posh</Link></li>
        <li><Link to="/Register" style={{textDecoration:"None", color:"#666666"}}>Our Policy</Link></li>
        <li> <Link to="/Login" style={{textDecoration:"None", color:"#666666"}}>Whistle Blower</Link></li>
        <li> <Link to="#Contact US" className='Contactus' style={{textDecoration:"None"}}>CONTACT US</Link></li> 
         </Nav>
         </Container>)
}
export default NavbarContainer