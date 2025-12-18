This is an **educational security demo**.

---

# 📁 Project Structure

```
localstorage-abuse-demo/
│
├── server/
│   ├── package.json
│   └── server.js
│
└── client/
    ├── package.json
    ├── public/
    │   └── index.html   
    └── src/
        ├── index.js
        ├── App.js
        ├── Login.js
        ├── Dashboard.js
        └── SecureDashboard.js
```

---

# 🧰 Prerequisites

* Node.js ≥ 18
* npm or yarn

Check:

```bash
node -v
npm -v
```

---

# 🚀 Backend (Node.js – Secure Validation)

---

## ▶ Run Backend

```bash
cd server
npm install
npm start
```

---

# 🎨 Frontend (React – Vulnerable + Secure)

---

## ▶ Run Frontend

```bash
cd client
npm install
npm start
```

App opens at:

```
http://localhost:3000
```

---

# 🧪 How to Demonstrate the Abuse

### 🔴 Vulnerable Demo

1. Login as **User**
2. Open DevTools → Application → Local Storage
3. Change:

   ```
   role: user → admin
   ```
4. Refresh page
5. Admin button appears ❌

### 🟢 Secure Demo

* Try the same attack
* Secure dashboard still blocks access ✔

---

# 🎯 Key Teaching Points

* localStorage is **user-controlled**
* UI checks ≠ security
* Server must validate permissions
* HttpOnly cookies prevent JS access

---