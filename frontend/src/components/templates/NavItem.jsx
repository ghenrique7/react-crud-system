import React from 'react'
import './NavItem.css'

import { Link } from 'react-router-dom'

export default props =>
    <aside>
        <nav className="menu">
            <Link to={`${props.router}`}>
                <i className={`fa fa-${props.icon}`}></i> {`${props.name}`}
            </Link>
        </nav>
    </aside>