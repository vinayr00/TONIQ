import { useEffect, useState } from "react";
import "./App.css";

interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  tableNumber: string;
  createdAt: string;
}

function App() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReservations = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/reservations");
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setReservations(data);
    } catch (err) {
      console.error("Error fetching reservations", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
    // Poll every 10 seconds for new reservations
    const interval = setInterval(fetchReservations, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Tonique Admin Panel</h1>
        <p>Live Reservation Dashboard</p>
      </header>

      <main className="admin-main">
        {loading ? (
          <p className="loading">Loading reservations...</p>
        ) : (
          <div className="table-wrapper">
            <table className="reservation-table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Guest Name</th>
                  <th>Phone</th>
                  <th>Table</th>
                  <th>Party Size</th>
                  <th>Booked At</th>
                </tr>
              </thead>
              <tbody>
                {reservations.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ textAlign: "center" }}>
                      No reservations found.
                    </td>
                  </tr>
                ) : (
                  reservations
                    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                    .map((res) => (
                      <tr key={res.id}>
                        <td>
                          <strong>{res.date}</strong> at {res.time}
                        </td>
                        <td>{res.name}</td>
                        <td>{res.phone}</td>
                        <td>
                          <span className="badge table-badge">{res.tableNumber}</span>
                        </td>
                        <td>{res.guests}</td>
                        <td className="text-muted">
                          {new Date(res.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
