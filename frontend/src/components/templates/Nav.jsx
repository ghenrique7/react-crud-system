import './Nav.css'
import React from 'react'

import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <NavItem router="/" icon="home"  name="Inicio" className="menu-link"/>
        <NavItem router="/users" icon="users"  name="Usuarios" className="menu-link"/>
    </aside>