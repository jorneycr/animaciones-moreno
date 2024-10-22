import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LanguageContext } from './contexts/LanguageContext';
import { useContext } from 'react';


import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Login from './pages/Login/Login';
import AdminPanel from './pages/CMS/AdminPanel';
import ContactForm from './pages/ContactForm';
import QuotePage from './pages/QuotePage';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import GalleryAll from './components/GalleryAll';
import PersonalDirectory from './components/PersonalDirectory';
import EventCalendar from './components/EventCalendar';

import despedidas from './assets/images/home/despedidas.jpg';
import escolares from './assets/images/home/escolares.jpg';
import bodas from './assets/images/home/bodas.jpg';
import familiares from './assets/images/home/familiares.jpg';
import graduaciones from './assets/images/home/graduaciones.jpg';
import cumpleanos from './assets/images/home/cumpleanos.jpg';
import BlogPost from './components/BlogPost';
import ForgotPassword from './pages/Login/ForgotPassword';
import ReactGA from 'react-ga4';
import UsePageTracking from './UsePageTracking';

// Inicializa Google Analytics
ReactGA.initialize('G-JE28035EJS');  // Reemplaza con tu ID de seguimiento

function App() {
    const [services, setServices] = useState([]);
    const { t } = useContext(LanguageContext);    

    useEffect(() => {
        // Simulación de una llamada a una API
        const fetchServices = async () => {

            const data = [
                {
                    slug: 'despedidas',
                    name: t['service_despedidas_name'],
                    description: t['service_despedidas_description'],
                    icon: despedidas,
                    image: despedidas,
                    gallery: [
                        'https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg',
                        'https://cdn.pixabay.com/photo/2018/07/04/00/19/champagne-3515140_1280.jpg',
                        'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg',
                        'https://cdn.pixabay.com/photo/2021/04/13/02/28/wine-6174460_1280.jpg'
                    ],
                    menu: [
                        t['service_despedidas_menu_1'],
                        t['service_despedidas_menu_2'],
                        t['service_despedidas_menu_3'],
                        t['service_despedidas_menu_4']
                    ],
                },
                {
                    slug: 'escolares',
                    name: t['service_escolares_name'],
                    description: t['service_escolares_description'],
                    icon: escolares,
                    image: escolares,
                    gallery: [
                        'https://media.istockphoto.com/id/1395305908/es/foto/grupo-de-ni%C3%B1os-y-profesor-jugando-con-el-paraca%C3%ADdas-arco-iris-del-parque-infantil-sobre-hierba.jpg?s=2048x2048&w=is&k=20&c=e9NA2sJcOjAAjJ6SH4e7GrxLMalMKJ1TuTsVMdz7F-8=',
                        'https://cdn.pixabay.com/photo/2019/11/29/01/58/wedding-4660419_1280.jpg',
                        'https://cdn.pixabay.com/photo/2017/10/10/00/03/child-2835430_1280.jpg',
                        'https://cdn.pixabay.com/photo/2023/12/29/15/37/balloons-8476432_1280.jpg'
                    ],
                    menu: [
                        t['service_escolares_menu_1'],
                        t['service_escolares_menu_2'],
                        t['service_escolares_menu_3'],
                        t['service_escolares_menu_4']
                    ],
                },
                {
                    slug: 'bodas',
                    name: t['service_bodas_name'],
                    description: t['service_bodas_description'],
                    icon: bodas,
                    image: bodas,
                    gallery: [
                        'https://cdn.pixabay.com/photo/2016/06/29/04/39/wedding-dresses-1486005_960_720.jpg',
                        'https://cdn.pixabay.com/photo/2016/03/27/18/53/drinks-1283608_1280.jpg',
                        'https://cdn.pixabay.com/photo/2020/10/29/13/34/table-5696243_1280.jpg',
                        'https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_1280.jpg'
                    ],
                    menu: [
                        t['service_bodas_menu_1'],
                        t['service_bodas_menu_2'],
                        t['service_bodas_menu_3'],
                        t['service_bodas_menu_4']
                    ],
                },
                {
                    slug: 'familiares',
                    name: t['service_familiares_name'],
                    description: t['service_familiares_description'],
                    icon: familiares,
                    image: familiares,
                    gallery: [
                        'https://cdn.pixabay.com/photo/2023/01/18/14/39/family-7727035_1280.jpg',
                        'https://cdn.pixabay.com/photo/2017/06/23/04/49/beach-2433476_960_720.jpg',
                        'https://media.istockphoto.com/id/1464173078/es/foto/fiesta-en-el-jard%C3%ADn.jpg?s=2048x2048&w=is&k=20&c=w47OFH3iucSmiUJNpFCg0p48ifYbHokSvXT6WKlLRUo=',
                        'https://cdn.pixabay.com/photo/2019/09/15/10/27/family-4477874_1280.jpg'
                    ],
                    menu: [
                        t['service_familiares_menu_1'],
                        t['service_familiares_menu_2'],
                        t['service_familiares_menu_3'],
                        t['service_familiares_menu_4']
                    ],
                },
                {
                    slug: 'graduaciones',
                    name: t['service_graduaciones_name'],
                    description: t['service_graduaciones_description'],
                    icon: graduaciones,
                    image: graduaciones,
                    gallery: [
                        'https://cdn.pixabay.com/photo/2015/10/18/19/04/graduation-995042_960_720.jpg',
                        'https://cdn.pixabay.com/photo/2021/12/27/16/40/sylvester-6897648_1280.jpg',
                        'https://cdn.pixabay.com/photo/2016/06/11/05/18/graduation-1449488_1280.jpg',
                        'https://cdn.pixabay.com/photo/2018/04/15/18/02/books-3322275_960_720.jpg'
                    ],
                    menu: [
                        t['service_graduaciones_menu_1'],
                        t['service_graduaciones_menu_2'],
                        t['service_graduaciones_menu_3'],
                        t['service_graduaciones_menu_4']
                    ],
                },
                {
                    slug: 'cumpleanos',
                    name: t['service_cumpleanos_name'],
                    description: t['service_cumpleanos_description'],
                    icon: cumpleanos,
                    image: cumpleanos,
                    gallery: [
                        'https://cdn.pixabay.com/photo/2020/03/05/16/07/happy-birthday-4904779_1280.jpg',
                        'https://cdn.pixabay.com/photo/2017/07/27/12/31/party-2545168_960_720.jpg',
                        'https://cdn.pixabay.com/photo/2021/04/13/02/28/wine-6174460_1280.jpg',
                        'https://cdn.pixabay.com/photo/2023/06/21/20/05/party-8080105_1280.jpg'
                    ],
                    menu: [
                        t['service_cumpleanos_menu_1'],
                        t['service_cumpleanos_menu_2'],
                        t['service_cumpleanos_menu_3'],
                        t['service_cumpleanos_menu_4']
                    ],
                },
            ];

            setServices(data);
        };

        fetchServices();
    }, [t]);

    return (
        <Router>
            <UsePageTracking />  
            <Layout>
                <Routes>
                    <Route path="/" element={<Home services={services} />} />
                    <Route path="/service/:slug" element={<ServiceDetail services={services} />} />
                    <Route path="/quote/:slug" element={<QuotePage services={services} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/post/:id" element={<BlogPost />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/settings" element={<AdminPanel />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/calendar" element={<EventCalendar />} />
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
