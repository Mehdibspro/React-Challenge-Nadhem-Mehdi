import React from 'react'
import {Navbar,Nav, Form, FormControl,Button } from 'react-bootstrap';
const navbar = () => {
    return (
        <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Movie List</Navbar.Brand>
    <Nav className="mr-auto">
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar> 

        </div>
    )
}

export default navbar
