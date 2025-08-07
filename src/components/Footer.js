import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div>
        <b>Garage Doors Dubai</b> &copy; {new Date().getFullYear()} &middot; <a href="tel:+971501234567">+971 50 123 4567</a>
      </div>
      <div>
        <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="social wa" title="WhatsApp">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="wa" />
        </a>
        <a href="mailto:info@garagedoorsdubai.ae" className="social mail" title="Email">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="mail" />
        </a>
        <a href="https://maps.app.goo.gl/XXXX" target="_blank" rel="noopener noreferrer" className="social map" title="Dubai">
          <img src="https://cdn-icons-png.flaticon.com/512/535/535188.png" alt="map" />
        </a>
      </div>
    </footer>
  );
}
