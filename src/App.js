import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import AdminPanel from './components/AdminPanel';

function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <header style={{ background: '#1565c0', color: '#fff', padding: '1rem', textAlign: 'center' }}>
        <h1>Гаражные двери в Дубае</h1>
        <p>Доставка и установка автоматических гаражных ворот в Дубае. Заявки и консультации онлайн.</p>
        <button onClick={() => setAdmin(!admin)} style={{ marginTop: 10 }}>
          {admin ? 'Вернуться к форме' : 'Панель администратора'}
        </button>
      </header>
      <main style={{ padding: '2rem' }}>
        {admin ? <AdminPanel /> : <ContactForm />}
      </main>
    </div>
  );
}

export default App;
