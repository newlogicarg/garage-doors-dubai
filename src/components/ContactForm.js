import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

function validate(form) {
  const errors = {};
  if (!form.name) errors.name = "Введите имя";
  if (!form.phone) errors.phone = "Введите телефон";
  if (form.email && !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(form.email))
    errors.email = "Введите корректный email";
  return errors;
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSending(true);
    setStatus("Отправка...");
    try {
      await axios.post("/api/requests", form);
      setStatus("Заявка отправлена! Мы свяжемся с вами.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("Ошибка при отправке. Попробуйте позже.");
    }
    setSending(false);
  };

  return (
    <div className="card">
      <h2 style={{marginTop:0, marginBottom:20, color:'#7b1fa2'}}>Оставьте заявку</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Имя*
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? "invalid" : ""}
            placeholder="Ваше имя"
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </label>
        <label>
          Телефон*
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? "invalid" : ""}
            placeholder="Номер телефона"
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </label>
        <label>
          Email
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "invalid" : ""}
            placeholder="Ваш email (не обязательно)"
            type="email"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </label>
        <label>
          Сообщение
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Дополнительная информация"
            rows={3}
          />
        </label>
        <button type="submit" disabled={sending}>
          {sending ? "Отправляем..." : "Отправить заявку"}
        </button>
        <div className="status">{status}</div>
      </form>
    </div>
  );
}

export default ContactForm;
