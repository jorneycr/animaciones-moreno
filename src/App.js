import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Login from './pages/Login/Login';
import ContactForm from './pages/ContactForm';
import QuotePage from './pages/QuotePage';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import GalleryAll from './components/GalleryAll';
import PersonalDirectory from './components/PersonalDirectory';

import despedidas from './assets/images/home/despedidas.jpg';
import escolares from './assets/images/home/escolares.jpg';
import bodas from './assets/images/home/bodas.jpg';
import familiares from './assets/images/home/familiares.jpg';
import graduaciones from './assets/images/home/graduaciones.jpg';
import cumpleanos from './assets/images/home/cumpleanos.jpg';
import BlogPost from './components/BlogPost';

function App() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Simulación de una llamada a una API
        const fetchServices = async () => {
            const data = [
                {
                    slug: 'despedidas',
                    name: 'Despedidas',
                    description: 'Todo tipo de despedidas',
                    icon: despedidas,
                    image: despedidas,
                    gallery: ['https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg', 'https://cdn.pixabay.com/photo/2018/07/04/00/19/champagne-3515140_1280.jpg', 'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg', 'https://cdn.pixabay.com/photo/2021/04/13/02/28/wine-6174460_1280.jpg'],
                    menu: [
                        'Fiesta temática de despedida con decoración personalizada y actividades únicas para celebrar este importante cambio de vida.',
                        'Actividades personalizadas que incluyen juegos y dinámicas diseñadas para reflejar la personalidad del homenajeado y hacer de la despedida un evento memorable.',
                        'Menú gourmet que ofrece una selección de platos exquisitos, desde entradas elegantes hasta postres finos, adaptado a los gustos y preferencias del grupo.',
                        'Música y entretenimiento en vivo con bandas, DJs o artistas seleccionados para animar la noche, creando un ambiente inolvidable para todos los asistentes.'
                    ],
                },
                {
                    slug: 'escolares',
                    name: 'Escolares',
                    description: 'Fiestas escolares de niños',
                    icon: escolares,
                    image: escolares,
                    gallery: ['https://media.istockphoto.com/id/1395305908/es/foto/grupo-de-ni%C3%B1os-y-profesor-jugando-con-el-paraca%C3%ADdas-arco-iris-del-parque-infantil-sobre-hierba.jpg?s=2048x2048&w=is&k=20&c=e9NA2sJcOjAAjJ6SH4e7GrxLMalMKJ1TuTsVMdz7F-8=', 'https://cdn.pixabay.com/photo/2019/11/29/01/58/wedding-4660419_1280.jpg', 'https://cdn.pixabay.com/photo/2017/10/10/00/03/child-2835430_1280.jpg', 'https://cdn.pixabay.com/photo/2023/12/29/15/37/balloons-8476432_1280.jpg'],
                    menu: [
                        'Juegos y actividades educativas diseñadas para divertir y enseñar a los niños, integrando elementos lúdicos que promueven el aprendizaje a través del juego.',
                        'Decoración colorida y divertida con temas populares entre los niños, creando un ambiente alegre y festivo que invita a la celebración y el disfrute.',
                        'Snacks y bebidas para niños cuidadosamente seleccionados para ser tanto saludables como deliciosos, asegurando que los pequeños disfruten de su comida.',
                        'Animadores y shows infantiles que incluyen payasos, magos, y cuentacuentos, proporcionando entretenimiento continuo y asegurando que todos los niños estén involucrados y entretenidos.'
                    ],
                },
                {
                    slug: 'bodas',
                    name: 'Bodas',
                    description: 'Planificación completa para bodas.',
                    icon: bodas,
                    image: bodas,
                    gallery: ['https://cdn.pixabay.com/photo/2016/06/29/04/39/wedding-dresses-1486005_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/03/27/18/53/drinks-1283608_1280.jpg', 'https://cdn.pixabay.com/photo/2020/10/29/13/34/table-5696243_1280.jpg', 'https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_1280.jpg'],
                    menu: [
                        'Ceremonia personalizada que refleja el estilo y las preferencias de la pareja, incluyendo opciones de decoración, música, y lectura de votos.',
                        'Banquete de boda de lujo con una selección de platos gourmet preparados por chefs expertos, presentados con una estética elegante y sofisticada.',
                        'Música y entretenimiento que incluye opciones desde orquestas clásicas hasta DJs modernos, asegurando una atmósfera perfecta durante toda la celebración.',
                        'Coordinación de proveedores y servicios como fotógrafos, floristas, y planificadores de bodas, garantizando que cada detalle esté cuidado y que el evento se desarrolle sin contratiempos.'
                    ],
                },
                {
                    slug: 'familiares',
                    name: 'Familiares',
                    description: 'Eventos familiares con todo incluido.',
                    icon: familiares,
                    image: familiares,
                    gallery: ['https://cdn.pixabay.com/photo/2023/01/18/14/39/family-7727035_1280.jpg', 'https://cdn.pixabay.com/photo/2017/06/23/04/49/beach-2433476_960_720.jpg', 'https://media.istockphoto.com/id/1464173078/es/foto/fiesta-en-el-jard%C3%ADn.jpg?s=2048x2048&w=is&k=20&c=w47OFH3iucSmiUJNpFCg0p48ifYbHokSvXT6WKlLRUo=', 'https://cdn.pixabay.com/photo/2019/09/15/10/27/family-4477874_1280.jpg'],
                    menu: [
                        'Juegos y actividades familiares diseñados para todas las edades, incluyendo competencias divertidas, juegos en equipo y actividades que fomentan la unión familiar.',
                        'Menú variado para todos los gustos que ofrece opciones desde comida casera hasta platos internacionales, adaptándose a las preferencias y necesidades dietéticas de todos los asistentes.',
                        'Decoración temática que puede ser personalizada para adaptarse a la ocasión, ya sea una reunión familiar, un aniversario o una celebración especial.',
                        'Fotografía y video profesional para capturar todos los momentos especiales del evento, proporcionando recuerdos que durarán toda la vida.'
                    ],
                },
                {
                    slug: 'graduaciones',
                    name: 'Graduaciones',
                    description: 'Organización y animación para graduaciones.',
                    icon: graduaciones,
                    image: graduaciones,
                    gallery: ['https://cdn.pixabay.com/photo/2015/10/18/19/04/graduation-995042_960_720.jpg', 'https://cdn.pixabay.com/photo/2021/12/27/16/40/sylvester-6897648_1280.jpg', 'https://cdn.pixabay.com/photo/2016/06/11/05/18/graduation-1449488_1280.jpg', 'https://cdn.pixabay.com/photo/2018/04/15/18/02/books-3322275_960_720.jpg'],
                    menu: [
                        'Ceremonia de graduación organizada con todos los elementos necesarios, incluyendo la planificación de discursos, entrega de diplomas y fotos oficiales.',
                        'Fiesta de celebración con decoración temática que refleja los logros de los graduados, incluyendo opciones de música y entretenimiento para todos los gustos.',
                        'Menú de aperitivos y bebidas adaptado a un evento de alta energía, con opciones ligeras y refrescantes perfectas para una celebración activa.',
                        'Entretenimiento musical con DJs, bandas en vivo o karaoke, asegurando una noche de diversión continua y recuerdos inolvidables para los graduados y sus invitados.'
                    ],
                },
                {
                    slug: 'cumpleanos',
                    name: 'Cumpleaños',
                    description: 'Organización y animación para cumpleaños.',
                    icon: cumpleanos,
                    image: cumpleanos,
                    gallery: ['https://cdn.pixabay.com/photo/2020/03/05/16/07/happy-birthday-4904779_1280.jpg', 'https://cdn.pixabay.com/photo/2017/07/27/12/31/party-2545168_960_720.jpg', 'https://cdn.pixabay.com/photo/2021/04/13/02/28/wine-6174460_1280.jpg', 'https://cdn.pixabay.com/photo/2023/06/21/20/05/party-8080105_1280.jpg'],
                    menu: [
                        'Fiesta temática que incluye una decoración personalizada y actividades relacionadas con el tema elegido, desde superhéroes hasta princesas o aventuras espaciales.',
                        'Juegos y actividades para niños diseñados para mantener a todos los pequeños entretenidos y felices, incluyendo búsqueda del tesoro, juegos inflables y manualidades.',
                        'Pastel de cumpleaños personalizado diseñado específicamente para el homenajeado, con opciones de sabor, estilo y decoración que reflejan sus gustos y preferencias.',
                        'Animadores y payasos que incluyen espectáculos de magia, juegos interactivos y globoflexia, asegurando que cada momento esté lleno de risas y diversión.'
                    ],
                },
            ];
            
            setServices(data);
        };

        fetchServices();
    }, []);

    return (
        <LanguageProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home services={services} />} />
                        <Route path="/service/:slug" element={<ServiceDetail services={services} />} />
                        <Route path="/quote/:slug" element={<QuotePage services={services} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/post/:id" element={<BlogPost />} />
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
        </LanguageProvider>
    );
}

export default App;
