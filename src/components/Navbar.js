import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.menu}>
        <li><NavLink to="/" style={({ isActive }) => isActive ? styles.activeLinkMenu : styles.linkMenu}>[MENU]</NavLink></li>
        <li><NavLink to="/Introduction" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Introduction</NavLink></li>
        <li><NavLink to="/Gallery" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Gallery</NavLink></li>
        <li><NavLink to="/Schedule" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Schedule</NavLink></li>
        <li><NavLink to="/Record" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Record</NavLink></li>
        <li><NavLink to="/Etc" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Etc</NavLink></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 5rem',
    marginTop: '20px',
    borderBottom: '1px solid #000'
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  },
  activeLink: {
    textDecoration: 'none',
    color: 'gray'
  },
  linkMenu: {
    textDecoration: 'none',
    color: '#444',
    fontWeight: 'bold'
  },
  activeLinkMenu: {
    textDecoration: 'none',
    color: 'gray',
    fontWeight: 'bold'
  }
};

export default Navbar;
