import React, { Component } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const BsNavLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="port-navbar-link">{title}</a>
    </Link>
  );
};

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
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
      <div>
        {/* <Navbar className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`} color="transparent" dark expand="md"> */}
        <Navbar
          className="port-navbar port-default absolute"
          color="transparent"
          dark
          expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">
            Pre Ska
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/portfolios" title="Portfolio" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/blogs" title="Blogs" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/cv" title="Cv" />
              </NavItem>

              {/* {this.renderBlogMenu()}
              <NavItem className="port-navbar-item">
                <NavLink route="/cv" title="Cv" />
              </NavItem>
              { !isAuthenticated &&
                <NavItem className="port-navbar-item">
                  <Login />
                </NavItem>
              }
              { isAuthenticated &&
                <NavItem className="port-navbar-item">
                  <Logout />
                </NavItem>
              } */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
