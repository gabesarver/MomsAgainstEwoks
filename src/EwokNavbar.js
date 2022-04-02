import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './EwokNavbar.css';

function EwokNavbar() {
    return (
        <div className='navbar'> 
            <Navbar className='nav' variant='light' fixed='top'>
                <Container>
                    <Nav className = 'me-auto'>
                        <Navbar.Text> Test </Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default EwokNavbar;