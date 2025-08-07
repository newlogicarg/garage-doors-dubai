import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('/api/requests')
      .then(res => setRequests(res.data))
      .catch(() => setRequests([]));
  }, []);

  return (
    <div>
      <h2>Заявки</h2>
      {requests.length === 0 && <div>Нет заявок</div>}
      <ul>
        {requests.map(r => (
          <li key={r.id} style={{ marginBottom: 16, border: '1px solid #ccc', padding: 8 }}>
            <strong>{r.name}</strong> ({r.phone}, {r.email})<br />
            <em>{new Date(r.created_at).toLocaleString()}</em>
            <p>{r.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
