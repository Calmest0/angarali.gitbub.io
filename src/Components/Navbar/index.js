import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../Assets/images/upc-logo-branco.png';

import {
  Nav,
  NavLink,
  NavScroll,
  Bars,
  IconLink,
  NavButton,
  NavContent,
} from './NavbarElements';

export default function Navbar({ toggle }) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav>
      <IconLink to="/" onClick={scrollToTop}>
        <img src={logo} alt="logo" />
      </IconLink>

      <NavContent>
        <NavButton to="/vip#vip">VIP</NavButton>
        <NavLink to="/">Başlangıç</NavLink>
        <Bars onClick={toggle} />
        <NavLink to="/servidores#servidores">Sunucular</NavLink>
        {window.location.pathname === '/servidores' ? (
          <NavLink to="/#faq" smooth duration={1000}>
            SSS
          </NavLink>
        ) : (
          <NavScroll to="faq" smooth duration={1000}>
            SSS
          </NavScroll>
        )}

        <NavLink to="/#faq">Destek</NavLink>
      </NavContent>
    </Nav>
  );
}

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
};
