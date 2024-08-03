import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import './PersonalDirectory.css';

const teamMembers = [
    { id: 1, name: 'Juan Moreno', position: 'Administrador' },
    { id: 2, name: 'Maria López', position: 'Coordinadora' },
    { id: 3, name: 'Carlos Gómez', position: 'Animador' },
];

const PersonalDirectory = () => {
    const { t } = useContext(LanguageContext);

    return (
        <section className="personal-directory">
            <h2>{t['personal_directory_title']}</h2>
            <p>{t['personal_directory_description']}</p>
            <section className="team-gallery">
                {teamMembers.map(member => (
                    <section key={member.id} className="team-member">
                        <section className={`team-photo photo${member.id}`}></section>
                        <p>{t[`team_member_${member.id}_name`]} - {t[`team_member_${member.id}_position`]}</p>
                    </section>
                ))}
            </section>
        </section>
    );
};

export default PersonalDirectory;
