import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Appointment from './pages/Appointment';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Login from './pages/Login/Login';
import './App.css';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/cita" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/terms-of-use" element={<TermsOfUse/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
