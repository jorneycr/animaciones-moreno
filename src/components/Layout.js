import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'; // Asegúrate de tener este archivo


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
