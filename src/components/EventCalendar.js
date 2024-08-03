import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './EventCalendar.css';
import PaymentForm from './PaymentForm';

const initialEvents = [
    { id: 1, title: 'Evento Escolar', date: new Date(2024, 7, 20), type: 'Escolar' },
    { id: 2, title: 'Evento Familiar', date: new Date(2024, 7, 25), type: 'Familiar' },
    { id: 3, title: 'Despedida', date: new Date(2024, 8, 5), type: 'Despedida' },
    { id: 4, title: 'Boda', date: new Date(2025, 0, 15), type: 'Boda' },
];

const EventCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState(initialEvents);
    const [newEvent, setNewEvent] = useState({ title: '', date: '', type: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent(prevState => ({ ...prevState, [name]: value }));
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleConfirmPayment = (e) => {
        e.preventDefault();
        const { title, date, type } = newEvent;
        const eventDate = new Date(date);

        const now = new Date();
        const timeDifference = (eventDate - now) / (1000 * 60 * 60 * 24); // days

        if (type === 'Escolar' || type === 'Familiar') {
            if (timeDifference < 14 || timeDifference > 60) {
                alert('Las reservas para eventos escolares y familiares deben realizarse con al menos 2 semanas y no más de 2 meses de anticipación.');
                return;
            }
        } else if (type === 'Despedida' || type === 'Social') {
            if (timeDifference < 7 || timeDifference > 30) {
                alert('Las reservas para despedidas y eventos sociales deben realizarse con al menos 1 semana y no más de 30 días de anticipación.');
                return;
            }
        } else if (type === 'Boda' || type === 'Especial') {
            if (timeDifference < 547 || timeDifference > 609) {
                alert('Las reservas para bodas y eventos especiales deben realizarse con al menos 18 meses y no más de 20 meses de anticipación.');
                return;
            }
        }

        setEvents(prevEvents => [...prevEvents, { id: prevEvents.length + 1, title, date: eventDate, type }]);
        setNewEvent({ title: '', date: '', type: '' });
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="calendar-container">
            <h1>Próximos Eventos</h1>
            <Calendar 
                onChange={setDate}
                value={date}
                tileContent={getTileContent}
                tileClassName={getTileClass}
            />
            <form className="event-form" onSubmit={handleAddEvent}>
                <input 
                    type="text" 
                    name="title" 
                    value={newEvent.title} 
                    onChange={handleInputChange} 
                    placeholder="Título del evento" 
                    required 
                />
                <input 
                    type="date" 
                    name="date" 
                    value={newEvent.date} 
                    onChange={handleInputChange} 
                    required 
                />
                <select name="type" value={newEvent.type} onChange={handleInputChange} required>
                    <option value="">Seleccione el tipo</option>
                    <option value="Escolar">Escolar</option>
                    <option value="Familiar">Familiar</option>
                    <option value="Despedida">Despedida</option>
                    <option value="Boda">Boda</option>
                    <option value="Graduación">Graduación</option>
                    <option value="Cumpleaños">Cumpleaños</option>
                </select>
                <button type="submit">Agregar Evento</button>
            </form>
            {isModalOpen && (
                <>
                    <div className="overlay" onClick={handleCancel}></div>
                    <div className="modal">
                        <PaymentForm handleConfirmPayment={handleConfirmPayment} handleCancel={handleCancel} />
                    </div>
                </>
            )}
        </section>
    );
};

export default EventCalendar;
