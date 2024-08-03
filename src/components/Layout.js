import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';


const Layout = ({ children }) => {
    return (
        <section className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </section>
    );
};

export default Layout;
