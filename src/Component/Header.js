import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Input, Label } from 'reactstrap';
import {Form, FormControl, FormGroup} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const navcomp = {
  position : "absolute",
  right: 50
}

class Header extends Component{
    constructor(props){
        super(props);
        this.state ={
            isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
               <Navbar dark expand="md">
                    <div className = "container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand href="/" style={{fontStyle: "oblique", color: "Blue"}}>ARUN'S BLOG</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar pullRight style={navcomp}>
                                <NavItem >
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg" style={{color: "#1432f7"}}>&nbsp;</span>
                                        <span style={{color:"black"}}>Home</span>
                                    </NavLink>
                                    
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-info fa-lg" style={{color: "#1432f7"}}>&nbsp;</span>
                                        <span style={{color:"black"}}>About Us </span>
                                    </NavLink>
                                    
                                </NavItem>
                                
                                <NavItem >
                                    <NavLink className="nav-link" to="/contact">
                                        <span className="fa fa-address-card fa-lg" style={{color: "#1432f7"}}> &nbsp;</span>
                                        <span style={{color:"black"}}>Contact Us</span>
                                    </NavLink>
                                    
                                </NavItem>
                                
                              
                            </Nav>
                            
                        </Collapse>   
                    </div>
                </Navbar>
            </React.Fragment>
        ); 
    }
}
export default Header;