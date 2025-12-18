import { useEffect, useState } from "react";

function SecureDashboard() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/secure-dashboard", {
      credentials: "include"
    })
      .then(res => {
        if (!res.ok) throw new Error("Forbidden");
        return res.json();
      })
      .then(data => setData(data.secret))
      .catch(() => setError("❌ Access denied by server"));
  }, []);

  return (
    <div>
      <h2>✅ Secure Dashboard</h2>
      {data && <p>{data}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SecureDashboard;
