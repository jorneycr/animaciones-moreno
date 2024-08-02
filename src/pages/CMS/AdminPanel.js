import React from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <h1>Panel de Administración</h1>
            <div className="admin-section">
                <h2>Gestión del Catálogo</h2>
                <p>Actualizar catálogo de servicios, productos, ofertas, fotografías, videos, información general, directorio, precios y promociones.</p>
                <button>Gestionar Catálogo</button>
            </div>
            <div className="admin-section">
                <h2>Contenido del Blog</h2>
                <p>Actualizar contenido del blog para mantener el sitio web atractivo para los usuarios.</p>
                <button>Gestionar Blog</button>
            </div>
            <div className="admin-section">
                <h2>Cuentas de Coordinadores de Eventos</h2>
                <p>Crear cuentas para coordinadores de eventos según sea necesario.</p>
                <button>Crear Cuenta</button>
            </div>
            <div className="admin-section">
                <h2>Reservas en Línea</h2>
                <p>Realizar, aprobar y cancelar reservas en línea.</p>
                <button>Gestionar Reservas</button>
            </div>
            <div className="admin-section">
                <h2>Métodos de Pago</h2>
                <p>Configurar métodos de pago para garantizar transacciones seguras.</p>
                <button>Configurar Pagos</button>
            </div>
            <div className="admin-section">
                <h2>Actualización de Información Personal</h2>
                <p>Actualizar información personal según las solicitudes de los clientes.</p>
                <button>Actualizar Información</button>
            </div>
            <div className="admin-section">
                <h2>Reportes</h2>
                <p>Obtener reportes detallados sobre eventos, citas, reservas, clientes, etc.</p>
                <button>Ver Reportes</button>
            </div>
        </div>
    );
};

export default AdminPanel;
