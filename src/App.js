import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Appointment from './pages/QuotePage';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Login from './pages/Login/Login';
import './App.css';
import ContactForm from './pages/ContactForm';
import QuotePage from './pages/QuotePage';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import GalleryAll from './components/GalleryAll';
import PersonalDirectory from './components/PersonalDirectory';

function App() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Simulación de una llamada a una API
        const fetchServices = async () => {
            const data = [
                {
                    slug: 'despedidas',
                    name: 'Despedidas',
                    description: 'consectetur adipiscing elit',
                    icon: 'path/to/icon1.png',
                    image: 'path/to/image1.jpg',
                    gallery: ['path/to/gallery1.jpg', 'path/to/gallery2.jpg', 'path/to/gallery3.jpg'],
                    menu: ['Plato 1', 'Plato 2', 'Plato 3'],
                },
                {
                    slug: 'escolares',
                    name: 'Escolares',
                    description: 'consectetur adipiscing elit',
                    icon: 'path/to/icon2.png',
                    image: 'path/to/image2.jpg',
                    gallery: ['path/to/gallery4.jpg', 'path/to/gallery5.jpg', 'path/to/gallery6.jpg'],
                    menu: ['Plato A', 'Plato B', 'Plato C'],
                },
                {
                    slug: 'bodas',
                    name: 'Bodas',
                    description: 'Planificación completa para bodas.',
                    icon: 'path/to/icon3.png',
                    image: 'path/to/image3.jpg',
                    gallery: ['path/to/gallery7.jpg', 'path/to/gallery8.jpg', 'path/to/gallery9.jpg'],
                    menu: ['Plato D', 'Plato E', 'Plato F'],
                },
                {
                    slug: 'familiares',
                    name: 'Familiares',
                    description: 'Eventos familiares con todo incluido.',
                    icon: 'path/to/icon4.png',
                    image: 'path/to/image4.jpg',
                    gallery: ['path/to/gallery10.jpg', 'path/to/gallery11.jpg', 'path/to/gallery12.jpg'],
                    menu: ['Plato G', 'Plato H', 'Plato I'],
                },
                {
                    slug: 'graduaciones',
                    name: 'Graduaciones',
                    description: 'Organización y animación para graduaciones.',
                    icon: 'path/to/icon5.png',
                    image: 'path/to/image5.jpg',
                    gallery: ['path/to/gallery13.jpg', 'path/to/gallery14.jpg', 'path/to/gallery15.jpg'],
                    menu: ['Plato J', 'Plato K', 'Plato L'],
                },
                {
                    slug: 'otro',
                    name: 'Otro',
                    description: 'Otros tipos de eventos personalizados.',
                    icon: 'path/to/icon6.png',
                    image: 'path/to/image6.jpg',
                    gallery: ['path/to/gallery16.jpg', 'path/to/gallery17.jpg', 'path/to/gallery18.jpg'],
                    menu: ['Plato M', 'Plato N', 'Plato O'],
                },
            ];
            setServices(data);
        };

        fetchServices();
    }, []);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home services={services} />} />
                    <Route path="/service/:slug" element={<ServiceDetail services={services} />} />
                    <Route path="/quote/:slug" element={<QuotePage services={services} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/gallery" element={<GalleryAll />} />
                    <Route path="/personal-directory" element={<PersonalDirectory />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
