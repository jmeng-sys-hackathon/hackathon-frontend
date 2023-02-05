import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components";

const NavigationBar = () => {
	return (
		<NavStyles>
			<Navbar bg="light" variant="light" style={{fontFamily: "Noto Sans"}} className="fixed-nav">
		        <Container className="flex-center" style={{minWidth: "100vw !important", marginTop: "20px", marginBottom: "20px"}}>
		          {/*<Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
		          <Nav className="flex-box" style={{width: "100vw !important"}}>
		          	<div style={{minWidth: "300px"}} className="flex-box">
			            <Nav.Link className="nav-links" href="#home" style={{fontWeight: "bold"}}>Home</Nav.Link>
			            <Nav.Link className="nav-links" href="#">Build Trip</Nav.Link>
			            <Nav.Link className="nav-links" href="#">Calgary Stories</Nav.Link>
			            <Nav.Link className="nav-links" href="#">Events</Nav.Link>
			        </div>

		            <Nav.Link style={{marginLeft: "80px", fontWeight: "bold"}} href="#">Sign In</Nav.Link>
		          </Nav>
		        </Container>
	  		</Navbar>
  		</NavStyles>
	);
}

export default NavigationBar;

const NavStyles = styled.div`
	.fixed-nav {
		position: fixed;
		width: 100%;
		z-index: 20;
	}
`;

