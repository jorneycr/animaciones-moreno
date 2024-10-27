import React, { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import { LanguageContext } from '../contexts/LanguageContext';
import { useUser } from '../contexts/UserContext';
import PaymentForm from './PaymentForm';
import './EventCalendar.css';
import 'react-calendar/dist/Calendar.css';

const initialEvents = [
    { id: 1, title: 'School Event', date: new Date(2024, 7, 20), type: 'School' },
    { id: 2, title: 'Family Event', date: new Date(2024, 7, 25), type: 'Family' },
    { id: 3, title: 'Farewell', date: new Date(2024, 8, 5), type: 'Farewell' },
    { id: 4, title: 'Wedding', date: new Date(2025, 0, 15), type: 'Wedding' },
];

const EventCalendar = () => {
    const { t } = useContext(LanguageContext);
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState(initialEvents);
    const [newEvent, setNewEvent] = useState({ title: '', date: '', type: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [validationError, setValidationError] = useState('');

    const { user } = useUser();

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
        const { date, type } = newEvent;
        const eventDate = new Date(date);

        const now = new Date();
        const timeDifference = (eventDate - now) / (1000 * 60 * 60 * 24); // days

        let errorMessage = '';

        if (type === 'School' || type === 'Family') {
            if (timeDifference < 14 || timeDifference > 60) {
                errorMessage = t['calendar_validationError'];
            }
        } else if (type === 'Farewell' || type === 'Social') {
            if (timeDifference < 7 || timeDifference > 30) {
                errorMessage = t['calendar_validationErrorDespedida'];
            }
        } else if (type === 'Wedding' || type === 'Special') {
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

        // Add the new event to the events list
        const { title, date, type } = newEvent;
        const eventDate = new Date(date);
        eventDate.setDate(eventDate.getDate() + 1);

        setEvents(prevEvents => [...prevEvents, { id: prevEvents.length + 1, title, date: eventDate, type }]);
        
        // Clear the new event form
        setNewEvent({ title: '', date: '', type: '' });

        // Close the payment modal
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
            {user && (user.role === "admin" || user.role === "coordinador" || user.role === "cliente") && (
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
                    <option value="School">{t['calendar_typeSchool']}</option>
                    <option value="Family">{t['calendar_typeFamily']}</option>
                    <option value="Farewell">{t['calendar_typeFarewell']}</option>
                    <option value="Wedding">{t['calendar_typeWedding']}</option>
                    <option value="Graduation">{t['calendar_typeGraduation']}</option>
                    <option value="Birthday">{t['calendar_typeBirthday']}</option>
                </select>
                <button type="submit">{t['calendar_addEvent']}</button>
            </form>
            )}
            
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
