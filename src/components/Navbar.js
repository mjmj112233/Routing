import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export default function Navbar() {
    const liStyle = {
        padding: '20px 15px',
        cursor: 'pointer'
    };

    return (
        <nav className={styles.navbarModuleStyle}>
            <ul>
                <li style={liStyle}>
                    <NavLink to="/" exact activeClassName={styles.navbarModuleStyle}>
                        Home
                    </NavLink>
                </li>
                <li style={liStyle}>
                    <NavLink to="/about" activeClassName={styles.activeLink}>
                        About Us
                    </NavLink>
                </li>
                <li style={liStyle}>
                    <NavLink to="/contact" activeClassName={styles.activeLink}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
