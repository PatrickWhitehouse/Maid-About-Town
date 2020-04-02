import React from 'react';
import Navigation from './Navigation';
import '../styles/styles.css';

const Layout = ({ children }) => (
    <>
        <Navigation />
        <main>
            {children}
        </main>
    </>
)

export default Layout