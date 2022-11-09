import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import logo from "../assets/logo.svg"

const AllNavbar = () => {
    return(
        <>
        <Navbar className="bg-black nav" bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">Profile</Nav.Link>
              <Nav.Link href="#features">My Collection</Nav.Link>
              <Nav.Link href="#pricing">Add Literature</Nav.Link>
              <Nav.Link href="#pricing">Logout</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <img src={logo} alt=""
            w={12}
            />
            </Navbar.Text>
          </Navbar.Collapse>
          </Container>
      </Navbar>
        </>
    )
}

export default AllNavbar