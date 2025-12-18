import React from "react";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const login = async (role) => {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ role })
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert("Backend not reachable");
      console.error(err);
    }
  };

  const openDashboard = () => {
    window.location.href = `${API_URL}/dashboard`;
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Fujitsu WA LSA – Frontend</h1>

      <button onClick={() => login("admin")}>
        Login as Admin
      </button>

      <br /><br />

      <button onClick={() => login("user")}>
        Login as User
      </button>

      <br /><br />

      <button onClick={openDashboard}>
        Open Secure Dashboard
      </button>
    </div>
  );
}

export default App;
