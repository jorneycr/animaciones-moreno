import React from 'react';
import './CustomerPanel.css';

const CustomerPanel = () => {
    return (
        <div className="customer-panel">
            <h1>Panel de Cliente</h1>
            <div className="customer-section">
                <h2>Historial de Reservas y Citas</h2>
                <p>Visualiza tu historial de reservas, eventos y citas.</p>
                <button>Ver Historial</button>
            </div>
            <div className="customer-section">
                <h2>Realizar Pagos</h2>
                <p>Realiza pagos y gestiona tus métodos de pago.</p>
                <button>Gestionar Pagos</button>
            </div>
            <div className="customer-section">
                <h2>Notificaciones</h2>
                <p>Recibe notificaciones sobre eventos, ofertas y promociones.</p>
                <button>Ver Notificaciones</button>
            </div>
            <div className="customer-section">
                <h2>Preferencias Personales</h2>
                <p>Modifica tus preferencias personales y actualiza tu información.</p>
                <button>Actualizar Preferencias</button>
            </div>
            <div className="customer-section">
                <h2>Solicitar Cotizaciones</h2>
                <p>Solicita cotizaciones personalizadas para eventos específicos.</p>
                <button>Solicitar Cotización</button>
            </div>
            <div className="customer-section">
                <h2>Programar Visitas</h2>
                <p>Programa visitas a las instalaciones de eventos.</p>
                <button>Programar Visita</button>
            </div>
            <div className="customer-section">
                <h2>Modificar Elecciones Anteriores</h2>
                <p>Visualiza y modifica tus elecciones anteriores sin necesidad de solicitar una nueva cotización.</p>
                <button>Modificar Elecciones</button>
            </div>
        </div>
    );
};

export default CustomerPanel;
