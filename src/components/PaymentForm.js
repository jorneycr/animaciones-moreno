import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './PaymentForm.css';

const PaymentForm = ({ handleConfirmPayment, handleCancel, setNewEvent }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [focused, setFocused] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case 'number':
        setNumber(value.replace(/[^0-9]/g, '').slice(0, 16)); // Limitar a 16 dígitos numéricos
        break;
      case 'name':
        setName(value);
        break;
      case 'expiry':
        setExpiry(value);
        break;
      case 'cvc':
        setCvc(value.replace(/[^0-9]/g, '').slice(0, 3)); // Limitar a 3 dígitos numéricos
        break;
      default:
        break;
    }
  };

  const handleInputFocus = (evt) => {
    setFocused(evt.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const [month, year] = expiry.split('/').map(str => parseInt(str, 10));
    const expiryDate = new Date(`20${year}-${month}-01`);
    
    // Validaciones
    if (number.length !== 16) {
      setValidationError('El número de la tarjeta debe tener 16 dígitos.');
      return;
    }

    if (!/^[a-zA-Z]+\s[a-zA-Z]+$/.test(name)) {
      setValidationError('El nombre debe contener al menos un nombre y un apellido.');
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      setValidationError('La fecha de expiración debe tener el formato MM/YY.');
      return;
    }

    if (expiryDate <= today) {
      setValidationError('La fecha de expiración debe ser mayor a la fecha actual.');
      return;
    }

    if (cvc.length !== 3) {
      setValidationError('El CVC debe tener 3 dígitos.');
      return;
    }

    setValidationError('');
    handleConfirmPayment(e);
  };

  return (
    <section className="payment-form">
      <Cards
        number={number}
        expiry={expiry}
        cvc={cvc}
        name={name}
        focused={focused}
      />
      <form onSubmit={handleSubmit} className='formCardDetaills'>
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        
        {validationError && <p className="validation-error">{validationError}</p>}
        
        <button type="submit">Confirmar Pago</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </form>
    </section>
  );
};

export default PaymentForm;
