import '../styles/styles.css';
import React from 'react';
import Navigation from './Navigation';

const Layout = ({ children }) => (
    <>
        <Navigation />
        <main className="text-lg leading-relaxed">
            {children}
        </main>
    </>
)

export default Layout