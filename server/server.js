import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

// Fake login (secure cookie)
app.post("/login", (req, res) => {
  const { role } = req.body;

  // DO NOT trust client in real apps — demo only
  res.cookie("sessionRole", role, {
    httpOnly: true,
    sameSite: "strict"
  });

  res.json({ message: "Logged in securely" });
});

// Secure endpoint
app.get("/secure-dashboard", (req, res) => {
  const role = req.cookies.sessionRole;

  if (role !== "admin") {
    return res.status(403).json({ message: "Forbidden" });
  }

  res.json({ secret: "🔥 Admin-only server data" });
});

// Logout
app.post("/logout", (req, res) => {
  res.clearCookie("sessionRole");
  res.json({ message: "Logged out" });
});

app.listen(4000, () =>
  console.log("✅ Server running on http://localhost:4000")
);
