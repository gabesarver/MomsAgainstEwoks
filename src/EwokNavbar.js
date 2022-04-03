import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './EwokNavbar.css';

function EwokNavbar() {
    return (
        <div className='navbar'> 
            <Navbar className='nav' variant='light' fixed='top'>
                <Container>
                    <Nav className = 'me-auto'>
                        <Nav.Link href='/MomsAgainstEwoks' className='navText'>Home</Nav.Link>
                        <Nav.Link href='/MomsAgainstEwoks/AboutUs' className='navText' >About Us</Nav.Link>
                        <Nav.Link href='/MomsAgainstEwoks/Action' className='navText' >What Can You Do</Nav.Link>
                        <Nav.Link href='/MomsAgainstEwoks/Proof' className='navText' >Proof</Nav.Link>
                        <Nav.Link href='/MomsAgainstEwoks/Quiz' className='navText' >Ewok Quiz</Nav.Link>
                        
                        
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default EwokNavbar;