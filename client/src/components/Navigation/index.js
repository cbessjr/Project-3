import React from "react";
import "./Nav.css";
import { Nav, Button, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">TrafficMon</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav.Link as="strong"><Link to={"/"}><strong>Home</strong></Link></Nav.Link>
                    <Nav.Link as="strong"><Link to={"/new-user"}><strong>New User</strong></Link></Nav.Link>
                    <Nav.Link as="strong"><Link to={"/search"}><strong>Search</strong></Link></Nav.Link>
                    <Nav.Link as="strong"><Link to={"/new-report"}><strong>New Report</strong></Link></Nav.Link>
                    <Nav.Link href="#View Own Reports">View Own Reports</Nav.Link>
                    <Nav>
                        <Button variant="Login"><Link to={"/login"}><strong>Login</strong></Link></Button>
                        <Button variant="Logout"><Link to={"/logout"}><strong>Logout</strong></Link></Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

