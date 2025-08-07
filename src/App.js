import React, { useState } from "react";
import Menu from "./components/Menu";
import Calculator from "./components/Calculator";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

const services = [
  {
    title: "Установка гаражных дверей",
    description: "Профессиональная установка всех типов гаражных ворот с гарантией качества.",
    features: ["Автоматизация", "Безопасность", "Энергоэффективность", "Современные технологии"]
  },
  {
    title: "Техническое обслуживание",
    description: "Регулярное обслуживание для продления срока службы ваших ворот.",
    features: ["Плановое ТО", "Диагностика", "Ремонт", "Консультации"]
  },
  {
    title: "Ремонт и модернизация",
    description: "Быстрый и качественный ремонт любых неисправностей.",
    features: ["Срочный выезд", "Замена комплектующих", "Модернизация", "Гарантия на работы"]
  }
];

export default function App() {
  return (
    <div className="main-bg">
      <Menu />
      <div className="spacer" />
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-left">
          <h1>
            <span className="gradient-text">Гаражные ворота</span> в Дубае
          </h1>
          <p>
            Современные решения по установке, ремонту и обслуживанию гаражных ворот любой сложности. Быстро, надежно, с гарантией.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn main-btn">Оставить заявку</a>
            <a href="#calculator" className="btn secondary-btn">Рассчитать стоимость</a>
          </div>
          <div className="hero-stats">
            <div>
              <b>10+</b>
              <span>Лет опыта</span>
            </div>
            <div>
              <b>500+</b>
              <span>Установок</span>
            </div>
            <div>
              <b>24/7</b>
              <span>Сервис</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src="https://placehold.co/480x320/222/fff?text=Garage+Doors+Dubai" alt="Гаражные ворота в Дубае" />
        </div>
      </section>
      {/* Services */}
      <section id="services" className="services-section">
        <h2>Наши услуги</h2>
        <div className="services-list">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* Calculator */}
      <section id="calculator" className="calculator-section">
        <Calculator />
      </section>
      {/* Contact */}
      <section id="contact" className="contact-section">
        <h2>Связаться с нами</h2>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
