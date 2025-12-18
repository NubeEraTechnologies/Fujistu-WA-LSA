function Login() {
  const login = async (role) => {
    // ❌ Insecure: client-controlled
    localStorage.setItem("role", role);

    // ✅ Secure: server-controlled cookie
    await fetch("http://localhost:4000/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role })
    });

    window.location.reload();
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => login("user")}>Login as User</button>
      <button onClick={() => login("admin")}>Login as Admin</button>
    </div>
  );
}

export default Login;
