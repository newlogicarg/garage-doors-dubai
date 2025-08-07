import React, { useState } from "react";
import "./Menu.css";

const menuItems = [
  { label: "Главная", anchor: "#home" },
  { label: "Услуги", anchor: "#services" },
  { label: "Калькулятор", anchor: "#calculator" },
  { label: "Контакты", anchor: "#contact" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  const handleScroll = (e, anchor) => {
    e.preventDefault();
    setOpen(false);
    const elem = document.querySelector(anchor);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="hitech-nav">
      <div className="nav-content">
        <div className="nav-logo" onClick={e => handleScroll(e, "#home")}>
          <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="logo" />
          <span>Garage Doors Dubai</span>
        </div>
        <ul className={`nav-list ${open ? "open" : ""}`}>
          {menuItems.map(({ label, anchor }) => (
            <li key={anchor}>
              <a
                href={anchor}
                onClick={e => handleScroll(e, anchor)}
                className="nav-link"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`nav-burger ${open ? "open" : ""}`}
          aria-label="menu"
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
