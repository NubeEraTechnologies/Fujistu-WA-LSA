function Dashboard() {
  const role = localStorage.getItem("role");

  return (
    <div>
      <h2>❌ Vulnerable Dashboard</h2>
      <p>Role from localStorage: <b>{role}</b></p>

      {role === "admin" && (
        <button style={{ color: "red" }}>
          🔥 Delete All Users
        </button>
      )}

      <p>
        ⚠️ Open DevTools → Application → LocalStorage → change role to <b>admin</b>
      </p>
    </div>
  );
}

export default Dashboard;
