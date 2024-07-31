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
        <section className="personal-directory">
            <h2>Directorio Personal</h2>
            <p>Contamos con un equipo diverso y talentoso que se especializa en diferentes áreas de la animación y la organización de eventos. Desde DJ's y animadores, hasta coordinadores y diseñadores, todos estamos dedicados a brindarte el mejor servicio.</p>
            <section className="team-gallery">
                <section className="team-member">
                    <section className="team-photo photo1"></section>
                    <p>Juan Moreno - Administrador</p>
                </section>
                <section className="team-member">
                    <section className="team-photo photo2"></section>
                    <p>Maria López - Coordinadora</p>
                </section>
                <section className="team-member">
                    <section className="team-photo photo3"></section>
                    <p>Carlos Gómez - Animador</p>
                </section>
            </section>
            {/* <ul>
                
                {teamMembers.map(member => (
                    <li key={member.id}>
                        <h3>{member.name}</h3>
                        <p><strong>{member.position}</strong></p>
                        <p>{member.description}</p>
                    </li>
                ))}
            </ul> */}
        </section>
    );
};

export default PersonalDirectory;
