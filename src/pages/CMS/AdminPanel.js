import React from 'react';
import { useUser } from '../../contexts/UserContext';
import './AdminPanel.css';

const AdminPanel = () => {
    const { user } = useUser();

    if (!user) {
        return <section>No tiene permisos para ver esta página</section>;
    }

    return (
        <section className="admin-panel">
            {user.role === "admin" && (
                <>
                    <h1>Panel de Administración</h1>

                    <section className="admin-section">
                        <h2>Gestión del Catálogo</h2>
                        <p>Actualizar catálogo de servicios, productos, ofertas, fotografías, videos, información general, directorio, precios y promociones.</p>
                        <button>Gestionar Catálogo</button>
                    </section>
                    <section className="admin-section">
                        <h2>Contenido del Blog</h2>
                        <p>Actualizar contenido del blog para mantener el sitio web atractivo para los usuarios.</p>
                        <button>Gestionar Blog</button>
                    </section>
                    <section className="admin-section">
                        <h2>Cuentas de Coordinadores de Eventos</h2>
                        <p>Crear cuentas para coordinadores de eventos según sea necesario.</p>
                        <button>Crear Cuenta</button>
                    </section>
                    <section className="admin-section">
                        <h2>Reservas en Línea</h2>
                        <p>Realizar, aprobar y cancelar reservas en línea.</p>
                        <button>Gestionar Reservas</button>
                    </section>
                    <section className="admin-section">
                        <h2>Métodos de Pago</h2>
                        <p>Configurar métodos de pago para garantizar transacciones seguras.</p>
                        <button>Configurar Pagos</button>
                    </section>
                    <section className="admin-section">
                        <h2>Actualización de Información Personal</h2>
                        <p>Actualizar información personal según las solicitudes de los clientes.</p>
                        <button>Actualizar Información</button>
                    </section>
                    <section className="admin-section">
                        <h2>Reportes</h2>
                        <p>Obtener reportes detallados sobre eventos, citas, reservas, clientes, etc.</p>
                        <button>Ver Reportes</button>
                    </section>
                </>
            )}
            {user.role === "coordinador" && (
                <>
                    <h1>Panel del Coordinador de Eventos</h1>
                    <section className="coordinator-section">
                        <h2>Gestión de Reservas y Citas</h2>
                        <p>Crear, aprobar o cancelar reservas y citas, así como elaborar cotizaciones.</p>
                        <button>Gestionar Reservas</button>
                    </section>
                    <section className="coordinator-section">
                        <h2>Logística y Comunicación</h2>
                        <p>Coordinar la logística de los eventos y comunicarse con clientes y proveedores.</p>
                        <button>Coordinar Logística</button>
                    </section>
                    <section className="coordinator-section">
                        <h2>Planes y Paquetes</h2>
                        <p>Realizar planes o paquetes y enviar confirmaciones por correo electrónico.</p>
                        <button>Gestionar Planes</button>
                    </section>
                    <section className="coordinator-section">
                        <h2>Promociones y Comunicados</h2>
                        <p>Ofrecer promociones a los clientes y enviar comunicados importantes.</p>
                        <button>Gestionar Promociones</button>
                    </section>
                    <section className="coordinator-section">
                        <h2>Reportes</h2>
                        <p>Generar reportes detallados sobre clientes, reservas y citas.</p>
                        <button>Generar Reportes</button>
                    </section>
                    <section className="coordinator-section">
                        <h2>Consultas de Usuarios</h2>
                        <p>Responder a las consultas de los usuarios enviadas desde el formulario de contacto.</p>
                        <button>Responder Consultas</button>
                    </section>
                    <section className="coordinator-section">
                        <h2>Presupuesto</h2>
                        <p>Realizar un seguimiento del presupuesto asignado para cada evento, registrando gastos y comparándolos con el presupuesto planificado.</p>
                        <button>Gestionar Presupuesto</button>
                    </section>
                    <section className="coordinator-section">
                        <h2>Proveedores</h2>
                        <p>Gestionar proveedores y mantener un registro de proveedores utilizados en eventos anteriores.</p>
                        <button>Gestionar Proveedores</button>
                    </section>
                    <section className="coordinator-section">
                        <h2>Listas de Invitados</h2>
                        <p>Gestionar listas de invitados para eventos, enviar invitaciones y confirmar asistencias.</p>
                        <button>Gestionar Invitados</button>
                    </section>
                    <section className="coordinator-section">
                        <h2>Tareas y Colaboradores</h2>
                        <p>Crear y asignar tareas a miembros de un equipo o colaboradores externos, y realizar un seguimiento del progreso.</p>
                        <button>Gestionar Tareas</button>
                    </section>
                    <section className="coordinator-section">
                        <h2>Evaluaciones de Eventos</h2>
                        <p>Realizar evaluaciones de eventos para recopilar comentarios y registrar lecciones aprendidas.</p>
                        <button>Realizar Evaluaciones</button>
                    </section>
                </>
            )}
            {user.role === "cliente" && (
                <>
                    <h1>Panel de Cliente</h1>
                    <section className="customer-section">
                        <h2>Historial de Reservas y Citas</h2>
                        <p>Visualiza tu historial de reservas, eventos y citas.</p>
                        <button>Ver Historial</button>
                    </section>
                    <section className="customer-section">
                        <h2>Realizar Pagos</h2>
                        <p>Realiza pagos y gestiona tus métodos de pago.</p>
                        <button>Gestionar Pagos</button>
                    </section>
                    <section className="customer-section">
                        <h2>Notificaciones</h2>
                        <p>Recibe notificaciones sobre eventos, ofertas y promociones.</p>
                        <button>Ver Notificaciones</button>
                    </section>
                    <section className="customer-section">
                        <h2>Preferencias Personales</h2>
                        <p>Modifica tus preferencias personales y actualiza tu información.</p>
                        <button>Actualizar Preferencias</button>
                    </section>
                    <section className="customer-section">
                        <h2>Solicitar Cotizaciones</h2>
                        <p>Solicita cotizaciones personalizadas para eventos específicos.</p>
                        <button>Solicitar Cotización</button>
                    </section>
                    <section className="customer-section">
                        <h2>Programar Visitas</h2>
                        <p>Programa visitas a las instalaciones de eventos.</p>
                        <button>Programar Visita</button>
                    </section>
                    <section className="customer-section">
                        <h2>Modificar Elecciones Anteriores</h2>
                        <p>Visualiza y modifica tus elecciones anteriores sin necesidad de solicitar una nueva cotización.</p>
                        <button>Modificar Elecciones</button>
                    </section>
                </>
            )}
        </section>
    );
};

export default AdminPanel;
