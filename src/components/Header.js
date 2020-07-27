import React from "react"
import { Link } from 'gatsby'

import { Navbar, Dropdown } from "react-bootstrap"


const Header = () => {
  return (
    <header>
      <Navbar>
        <Navbar.Brand><Link to="/" style={{ textDecoration: 'none' }, { color: '#000' }}>Angel's Tech Blog</Link></Navbar.Brand>
        <Dropdown style={{backgroundColor: '#fff'}}>
          <Dropdown.Toggle id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item><Link to="/about" style={{ textDecoration: 'none' }, { color: '#000' }}>About</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/contact" style={{ textDecoration: 'none' }, { color: '#000' }}>Contact</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </header>
  )
}

export default Header
