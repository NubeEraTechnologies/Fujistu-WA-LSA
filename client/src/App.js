import Login from "./Login";
import Dashboard from "./Dashboard";
import SecureDashboard from "./SecureDashboard";

function App() {
  const role = localStorage.getItem("role");

  return (
    <div style={{ padding: 20 }}>
      <h1>LocalStorage Abuse Demo</h1>

      {!role ? (
        <Login />
      ) : (
        <>
          <Dashboard />
          <hr />
          <SecureDashboard />
        </>
      )}
    </div>
  );
}

export default App;
