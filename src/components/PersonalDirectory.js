import React from 'react';
import './PersonalDirectory.css';

const teamMembers = [
    { id: 1, name: 'Laura Castillo', position: 'Gerente de Ventas', description: 'Experta en estrategias de ventas.' },
    { id: 2, name: 'José Rodríguez', position: 'Coordinador de Eventos', description: 'Especialista en planificación de eventos.' },
    { id: 3, name: 'María González', position: 'Chef Principal', description: 'Creadora de menús personalizados.' },
    // Agrega más miembros del equipo según sea necesario
];

const PersonalDirectory = () => {
    return (
        <div className="personal-directory">
            <h1>Directorio Personal</h1>
            <ul>
                {teamMembers.map(member => (
                    <li key={member.id}>
                        <h3>{member.name}</h3>
                        <p><strong>{member.position}</strong></p>
                        <p>{member.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PersonalDirectory;
