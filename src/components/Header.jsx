import React  from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

function Header(props) {
    return (
        <Navbar>
            <NavbarBrand> counter is {props.counter} </NavbarBrand>
        </Navbar>
    )
}

export default Header;