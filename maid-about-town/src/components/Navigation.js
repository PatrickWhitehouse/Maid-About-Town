import React from 'react';
import logo from '../images/logo-clear.png';
import { Link } from 'gatsby';

const Navigation = () => (
    <nav className="absolute top-0 left-0 right-0 z-20 px-10 py-8 text-white">
        <ul className="flex items-center">
            <li><img src={logo} alt="Maid About Town" width="150" height="150" /></li>
            <Link to="/" className="ml-auto"><li>Home</li></Link>
            <Link className="ml-3"><li>About</li></Link>
            <Link className="ml-3"><li>Services</li></Link>
            <Link className="ml-3"><li>Contact</li></Link>
        </ul>
    </nav>
)

export default Navigation