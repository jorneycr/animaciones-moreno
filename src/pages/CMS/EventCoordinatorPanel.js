import React from 'react';
import './EventCoordinatorPanel.css';

const EventCoordinatorPanel = () => {
    return (
        <div className="coordinator-panel">
            <h1>Panel del Coordinador de Eventos</h1>
            <div className="coordinator-section">
                <h2>Gestión de Reservas y Citas</h2>
                <p>Crear, aprobar o cancelar reservas y citas, así como elaborar cotizaciones.</p>
                <button>Gestionar Reservas</button>
            </div>
            <div className="coordinator-section">
                <h2>Logística y Comunicación</h2>
                <p>Coordinar la logística de los eventos y comunicarse con clientes y proveedores.</p>
                <button>Coordinar Logística</button>
            </div>
            <div className="coordinator-section">
                <h2>Planes y Paquetes</h2>
                <p>Realizar planes o paquetes y enviar confirmaciones por correo electrónico.</p>
                <button>Gestionar Planes</button>
            </div>
            <div className="coordinator-section">
                <h2>Promociones y Comunicados</h2>
                <p>Ofrecer promociones a los clientes y enviar comunicados importantes.</p>
                <button>Gestionar Promociones</button>
            </div>
            <div className="coordinator-section">
                <h2>Reportes</h2>
                <p>Generar reportes detallados sobre clientes, reservas y citas.</p>
                <button>Generar Reportes</button>
            </div>
            <div className="coordinator-section">
                <h2>Consultas de Usuarios</h2>
                <p>Responder a las consultas de los usuarios enviadas desde el formulario de contacto.</p>
                <button>Responder Consultas</button>
            </div>
            <div className="coordinator-section">
                <h2>Presupuesto</h2>
                <p>Realizar un seguimiento del presupuesto asignado para cada evento, registrando gastos y comparándolos con el presupuesto planificado.</p>
                <button>Gestionar Presupuesto</button>
            </div>
            <div className="coordinator-section">
                <h2>Proveedores</h2>
                <p>Gestionar proveedores y mantener un registro de proveedores utilizados en eventos anteriores.</p>
                <button>Gestionar Proveedores</button>
            </div>
            <div className="coordinator-section">
                <h2>Listas de Invitados</h2>
                <p>Gestionar listas de invitados para eventos, enviar invitaciones y confirmar asistencias.</p>
                <button>Gestionar Invitados</button>
            </div>
            <div className="coordinator-section">
                <h2>Tareas y Colaboradores</h2>
                <p>Crear y asignar tareas a miembros de un equipo o colaboradores externos, y realizar un seguimiento del progreso.</p>
                <button>Gestionar Tareas</button>
            </div>
            <div className="coordinator-section">
                <h2>Evaluaciones de Eventos</h2>
                <p>Realizar evaluaciones de eventos para recopilar comentarios y registrar lecciones aprendidas.</p>
                <button>Realizar Evaluaciones</button>
            </div>
        </div>
    );
};

export default EventCoordinatorPanel;
