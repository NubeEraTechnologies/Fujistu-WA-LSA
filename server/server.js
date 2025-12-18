import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

/* ================================
   ENV VARIABLES
================================ */
const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";

/* ================================
   MIDDLEWARES
================================ */
app.use(cors({
  origin: CLIENT_ORIGIN,
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

/* ================================
   UI: HOME PAGE
================================ */
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Fujitsu WA LSA</title>
      </head>
      <body style="font-family: Arial; padding: 40px">
        <h1>🚀 Fujitsu WA LSA Backend</h1>
        <p>This is a demo backend with secure cookies.</p>

        <h3>Login as Admin</h3>
        <button onclick="login('admin')">Login as Admin</button>

        <h3>Login as User</h3>
        <button onclick="login('user')">Login as User</button>

        <br/><br/>
        <a href="/dashboard">Go to Secure Dashboard</a>

        <script>
          function login(role) {
            fetch('/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'same-origin',
              body: JSON.stringify({ role })
            })
            .then(res => res.json())
            .then(data => alert(data.message));
          }
        </script>
      </body>
    </html>
  `);
});

/* ================================
   API: LOGIN
================================ */
app.post("/login", (req, res) => {
  const { role } = req.body;

  res.cookie("sessionRole", role, {
    httpOnly: true,
    sameSite: "strict"
  });

  res.json({ message: `Logged in as ${role}` });
});

/* ================================
   UI: SECURE DASHBOARD
================================ */
app.get("/dashboard", (req, res) => {
  const role = req.cookies.sessionRole;

  if (role !== "admin") {
    return res.status(403).send(`
      <h2>❌ Access Denied</h2>
      <p>Admin access required</p>
      <a href="/">Go back</a>
    `);
  }

  res.send(`
    <html>
      <head>
        <title>Secure Dashboard</title>
      </head>
      <body style="font-family: Arial; padding: 40px">
        <h1>🔥 Admin Secure Dashboard</h1>
        <p>Only admins can see this.</p>

        <form method="POST" action="/logout">
          <button type="submit">Logout</button>
        </form>

        <br/>
        <a href="/">Back to Home</a>
      </body>
    </html>
  `);
});

/* ================================
   API: LOGOUT
================================ */
app.post("/logout", (req, res) => {
  res.clearCookie("sessionRole");
  res.redirect("/");
});

/* ================================
   START SERVER
================================ */
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
