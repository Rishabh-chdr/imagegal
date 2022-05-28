import React from 'react';
import { Navbar } from 'react-bootstrap';
const navbarStyle = {
    backgroundColor: 'lightblue'
}
const Header = () => {
    return(
    <Navbar variant="light" style={ navbarStyle } >
         <Navbar.Brand href="/">Image gallery</Navbar.Brand>
    </Navbar>
    )
};
export default Header;
