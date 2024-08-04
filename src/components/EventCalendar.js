import React, { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './EventCalendar.css';
import PaymentForm from './PaymentForm';
import { LanguageContext } from '../contexts/LanguageContext';

const initialEvents = [
    { id: 1, title: 'Evento Escolar', date: new Date(2024, 7, 20), type: 'Escolar' },
    { id: 2, title: 'Evento Familiar', date: new Date(2024, 7, 25), type: 'Familiar' },
    { id: 3, title: 'Despedida', date: new Date(2024, 8, 5), type: 'Despedida' },
    { id: 4, title: 'Boda', date: new Date(2025, 0, 15), type: 'Boda' },
];

const EventCalendar = () => {
    const { t } = useContext(LanguageContext);
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState(initialEvents);
    const [newEvent, setNewEvent] = useState({ title: '', date: '', type: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [validationError, setValidationError] = useState('');

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
        const { title, date, type } = newEvent;
        const eventDate = new Date(date);

        const now = new Date();
        const timeDifference = (eventDate - now) / (1000 * 60 * 60 * 24); // days

        let errorMessage = '';

        if (type === 'Escolar' || type === 'Familiar') {
            if (timeDifference < 14 || timeDifference > 60) {
                errorMessage = t['calendar_validationError'];
            }
        } else if (type === 'Despedida' || type === 'Social') {
            if (timeDifference < 7 || timeDifference > 30) {
                errorMessage = t['calendar_validationErrorDespedida'];
            }
        } else if (type === 'Boda' || type === 'Especial') {
            if (timeDifference < 547 || timeDifference > 609) {
                errorMessage = t['calendar_validationErrorBoda'];
            }
        }

        if (errorMessage) {
            setValidationError(errorMessage);
        } else {
            setValidationError('');
            setIsModalOpen(true);
        }
    };

    const handleConfirmPayment = (e) => {
        e.preventDefault();

        // Agregar el nuevo evento a la lista de eventos
        const { title, date, type } = newEvent;
        const eventDate = new Date(date);

        setEvents(prevEvents => [...prevEvents, { id: prevEvents.length + 1, title, date: eventDate, type }]);
        
        // Limpiar el formulario de nuevo evento
        setNewEvent({ title: '', date: '', type: '' });

        // Cerrar el modal de pago
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleDateClick = (newDate) => {
        const date = new Date(newDate);

        setDate(date);
        setNewEvent(prevState => ({ ...prevState, date: date.toISOString().split('T')[0] }));
    };

    return (
        <section className="calendar-container">
            <h1>{t['calendar_upcomingEvents']}</h1>
            <Calendar 
                onChange={handleDateClick}
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
                    placeholder={t['calendar_eventTitlePlaceholder']} 
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
                    <option value="">{t['calendar_selectType']}</option>
                    <option value="Escolar">Escolar</option>
                    <option value="Familiar">Familiar</option>
                    <option value="Despedida">Despedida</option>
                    <option value="Boda">Boda</option>
                    <option value="Graduación">Graduación</option>
                    <option value="Cumpleaños">Cumpleaños</option>
                </select>
                <button type="submit">{t['calendar_addEvent']}</button>
            </form>
            {validationError && <p className="validation-error">{validationError}</p>}
            {isModalOpen && (
                <>
                    <section className="overlayPayment" onClick={handleCancel}></section>
                    <section className="modalPayment">
                        <PaymentForm 
                            handleConfirmPayment={handleConfirmPayment} 
                            handleCancel={handleCancel} 
                            setNewEvent={setNewEvent} 
                        />
                    </section>
                </>
            )}
        </section>
    );
};

export default EventCalendar;
