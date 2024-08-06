import React, { useState, useContext } from 'react';
import Cards from 'react-credit-cards-2';
import { LanguageContext } from '../contexts/LanguageContext';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './PaymentForm.css';

const PaymentForm = ({ handleConfirmPayment, handleCancel, setNewEvent }) => {
  const { t } = useContext(LanguageContext);
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
      setValidationError(t['paymentForm_validationError_cardNumber']);
      return;
    }

    if (!/^[a-zA-Z]+\s[a-zA-Z]+$/.test(name)) {
      setValidationError(t['paymentForm_validationError_name']);
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      setValidationError(t['paymentForm_validationError_expiry']);
      return;
    }

    if (expiryDate <= today) {
      setValidationError(t['paymentForm_validationError_expiryDate']);
      return;
    }

    if (cvc.length !== 3) {
      setValidationError(t['paymentForm_validationError_cvc']);
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
          placeholder={t['paymentForm_cardNumberPlaceholder']}
          value={number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder={t['paymentForm_namePlaceholder']}
          value={name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="expiry"
          placeholder={t['paymentForm_expiryPlaceholder']}
          value={expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="cvc"
          placeholder={t['paymentForm_cvcPlaceholder']}
          value={cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        
        {validationError && <p className="validation-error">{validationError}</p>}
        
        <button type="submit">{t['paymentForm_confirmPaymentButton']}</button>
        <button type="button" onClick={handleCancel}>{t['paymentForm_cancelButton']}</button>
      </form>
    </section>
  );
};

export default PaymentForm;
