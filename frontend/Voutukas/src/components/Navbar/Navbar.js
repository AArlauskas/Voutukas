import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar as BootstrapNavbar, Nav, Button} from "react-bootstrap";
import "./Navbar.css";

import * as authActions from "../../state/authentication/authenticationActions";

import brandLogo from "../../assets/logos/logo_horizontal_medium.png";

class Navbar extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <BootstrapNavbar collapseOnSelect expand="sm" bg="white" sticky="top">
                <BootstrapNavbar.Brand href="/">
                    <img src={brandLogo}/>
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav"/>

                <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" activeKey={this.props.pathname}>
                        <Nav.Link href="/">My Polls</Nav.Link>
                    </Nav>
                    <Nav>
                        <BootstrapNavbar.Text className="greeting-text">
                            Hello, <span className="brighten-text">{this.props.username}</span>
                        </BootstrapNavbar.Text>
                        <Nav.Link href="#"  className="logout-link" onClick={this.props.logOut}> Log out</Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>

            </BootstrapNavbar>
        );
    }
}

const mapStateToProps = (state) =>({
    username: state.authentication.fetchedDataUser.name
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(authActions.logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
