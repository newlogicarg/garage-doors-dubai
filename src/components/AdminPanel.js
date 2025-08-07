import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css";

function AdminPanel() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/requests")
      .then((res) => setRequests(res.data))
      .catch(() => setRequests([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="card admin-panel">
      <h2 style={{ marginTop: 0, color: "#1976d2" }}>Заявки клиентов</h2>
      {loading && <div className="loader"></div>}
      {!loading && requests.length === 0 && (
        <div className="empty">Нет заявок</div>
      )}
      <ul className="request-list">
        {requests.map((r) => (
          <li key={r.id} className="request-item">
            <div className="name">
              <span className="ico">👤</span>
              <b>{r.name}</b>
            </div>
            <div className="contact">
              <span className="ico">📞</span> {r.phone}
              {r.email && (
                <>
                  <span style={{ marginLeft: 18 }} className="ico">
                    📧
                  </span>{" "}
                  {r.email}
                </>
              )}
            </div>
            <div className="date">
              <span className="ico">🕒</span>{" "}
              {new Date(r.created_at).toLocaleString()}
            </div>
            {r.message && <div className="msg">{r.message}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
