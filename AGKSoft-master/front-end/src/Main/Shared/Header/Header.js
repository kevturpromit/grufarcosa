import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="\">AGKSoft</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={1} title="Products">
                            <MenuItem eventKey={1.1} href="\products\software">Software & Services</MenuItem>
                            <MenuItem eventKey={1.2} href="\products\accessories">PCs & Accessories</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2} href="\reports">
                            Reports
                        </NavItem>
                        <NavItem eventKey={3} href="\support">
                            Support
                        </NavItem>
                        <NavItem eventKey={4} href="\download">
                            Downloads
                        </NavItem>
                        <NavDropdown eventKey={5} title="Demos">
                        <MenuItem eventKey={5.2} href="/demos/AGKDemo/AGKDemo.html">Back Office Demo</MenuItem>
                            <MenuItem eventKey={5.1} href="/demos/POSDemo/POSDemo.html">Point Of Sale Demo</MenuItem>                            
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={6} href="\contact">
                            Contact
                        </NavItem>
                    </Nav>
                    <Navbar.Text className="hidden-xs hidden-sm" pullRight>|</Navbar.Text>
                    <Navbar.Text className="hidden-xs hidden-sm" pullRight> <a href="tel:18003209519">1-800-320-9519</a></Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;