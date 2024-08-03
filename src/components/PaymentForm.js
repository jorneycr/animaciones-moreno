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

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case 'number':
        setNumber(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'expiry':
        setExpiry(value);
        break;
      case 'cvc':
        setCvc(value);
        break;
      default:
        break;
    }
  };

  const handleInputFocus = (evt) => {
    setFocused(evt.target.name);
  };

  // setNewEvent({ title: '', date: '', type: '' });

  return (
    <div className="payment-form">
      <Cards
        number={number}
        expiry={expiry}
        cvc={cvc}
        name={name}
        focused={focused}
      />
      <form onSubmit={handleConfirmPayment} className='formCardDetaills'>
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

        <button type="submit">Confirmar Pago</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default PaymentForm;
