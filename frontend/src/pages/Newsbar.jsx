import React from 'react';
import Marquee from 'react-fast-marquee';
import {Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Dashboardcss.css"

function NewsbarContainer() {
    return(
        
        <Container className='newsbarcss'>
         <div> <p style={{paddingTop:"0.5rem", fontWeight:"700"}}>News:</p> </div> 
        <marquee
        behavior='scroll'
        scrollamount='20'
        width='100%'
        direction='right'>
    <p className='newsbarcsstext'>Welcome to Highraradius, this is our ideaboard page</p>
    </marquee></Container>
        )
}
export default NewsbarContainer