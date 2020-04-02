import React from 'react';
import Navigation from './Navigation';

const Layout = ({ children }) => (
    <>
        <Navigation />
        <main>
            {children}
        </main>
    </>
)

export default Layout