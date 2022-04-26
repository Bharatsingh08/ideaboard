import React from 'react';
import { Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Dashboardcss.css"
import NavbarContainer from './NavbarContainer';
import NewsbarContainer from './Newsbar';

function Dashboard() {
    return (
    <div>
       <Navbar className='Navbar-brand'>
            <NavbarContainer/>
        </Navbar>
    <br />
  
</div>
)}
export default Dashboard
 
