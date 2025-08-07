import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus("Отправка...");
    setTimeout(() => {
      setStatus("Спасибо! Мы свяжемся с вами в ближайшее время.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setSending(false);
    }, 1300);
  }

  return (
    <form className="contact-card" onSubmit={handleSubmit}>
      <label>
        Имя*
        <input required name="name" value={form.name} onChange={handleChange} placeholder="Ваше имя" />
      </label>
      <label>
        Телефон*
        <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Номер телефона" />
      </label>
      <label>
        Email
        <input name="email" value={form.email} onChange={handleChange} placeholder="Ваш email (не обязательно)" type="email" />
      </label>
      <label>
        Сообщение
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Опишите, что вам нужно" rows={3} />
      </label>
      <button type="submit" disabled={sending}>
        {sending ? "Отправляем..." : "Отправить заявку"}
      </button>
      <div className="contact-status">{status}</div>
    </form>
  );
}
