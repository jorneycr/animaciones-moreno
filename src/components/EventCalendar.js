import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './EventCalendar.css';

const events = [
    { id: 1, title: 'Evento Escolar', date: new Date(2024, 7, 20), type: 'Escolar' },
    { id: 2, title: 'Evento Familiar', date: new Date(2024, 7, 25), type: 'Familiar' },
    { id: 3, title: 'Despedida', date: new Date(2024, 8, 5), type: 'Despedida' },
    { id: 4, title: 'Boda', date: new Date(2025, 0, 15), type: 'Boda' },
    // Agrega más eventos según sea necesario
];

const EventCalendar = () => {
    const [date, setDate] = useState(new Date());

    const getTileContent = ({ date, view }) => {
        if (view === 'month') {
            const event = events.find(event => 
                event.date.toDateString() === date.toDateString()
            );
            return event ? <p className="event">{event.title}</p> : null;
        }
    };

    const getTileClass = ({ date, view }) => {
        if (view === 'month') {
            const event = events.find(event => 
                event.date.toDateString() === date.toDateString()
            );
            return event ? `highlight-${event.type.toLowerCase()}` : '';
        }
    };

    return (
        <div className="calendar-container">
            <h1>Próximos Eventos</h1>
            <Calendar 
                onChange={setDate}
                value={date}
                tileContent={getTileContent}
                tileClassName={getTileClass}
            />
        </div>
    );
};

export default EventCalendar;
