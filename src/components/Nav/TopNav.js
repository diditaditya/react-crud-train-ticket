import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    Nav, 
    NavItem } from 'reactstrap';

import '../../style/styles.css';

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="nav-container" >
                <Navbar color="faded" light expand="md">
                    <Link to="/" className="nav-brand">Train Ticket Reservation</Link>
                    <NavbarToggler onClick={() => this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem onClick={() => this.toggle()} >
                                <Link to="/add" >Add New Reservation</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default TopNav;