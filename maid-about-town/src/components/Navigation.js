import React from 'react';
import logo from '../images/logo-clear.png';

const Navigation = () => (
    <nav>
        <ul>
            <li><img src={logo} alt="Maid About Town" width="150" height="150" /></li>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </nav>
)

export default Navigation