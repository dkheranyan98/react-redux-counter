import React  from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
    return {
      counter: state.counter.counter
    }
  }

  export default connect(mapStateToProps)(Header);