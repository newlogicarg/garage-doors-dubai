import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Отправка...');
    try {
      await axios.post('/api/requests', form);
      setStatus('Заявка отправлена! Мы свяжемся с вами.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('Ошибка при отправке. Попробуйте позже.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <label>
        Имя:
        <input required name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Телефон:
        <input required name="phone" value={form.phone} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} />
      </label>
      <label>
        Сообщение:
        <textarea name="message" value={form.message} onChange={handleChange} />
      </label>
      <button type="submit">Отправить заявку</button>
      <div style={{ color: 'green', marginTop: 10 }}>{status}</div>
    </form>
  );
}

export default ContactForm;
