import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import AdminPanel from "./components/AdminPanel";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <div className="main-bg">
      <header className="header">
        <div className="header-content">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Garage Door"
            className="logo"
          />
          <div>
            <h1>Гаражные двери в Дубае</h1>
            <p>
              Доставка и установка автоматических гаражных ворот в Дубае.<br />
              Заявки и консультации онлайн.
            </p>
          </div>
        </div>
        <button className="admin-btn" onClick={() => setAdmin((a) => !a)}>
          {admin ? "Вернуться к форме" : "Панель администратора"}
        </button>
      </header>
      <main>
        {admin ? <AdminPanel /> : <ContactForm />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
