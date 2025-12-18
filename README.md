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


# ▶ Re-run the Client

From your current directory:

```powershell
PS D:\...\LocalStorageAbuse\client> npm start
```

You should now see:

```
Compiled successfully!
Local: http://localhost:3000
```

---

# ✅ Full Working Checklist

### Backend (already running)

```bash
cd server
npm start
```

Runs on:

```
http://localhost:4000
```

### Frontend

```bash
cd client
npm start
```

Runs on:

```
http://localhost:3000
```

---

# 🧪 Verify the Demo Works

### 🔴 LocalStorage Abuse

1. Login as **User**
2. Open DevTools → Application → Local Storage
3. Change:

   ```
   role = admin
   ```
4. Refresh
5. Admin button appears ❌

### 🟢 Secure Endpoint

* Secure Dashboard still blocks access ✔

---

# 🧠 Why This Error Happened

`react-scripts` **always expects**:

* `public/index.html`
* `src/index.js`

If either is missing → build fails.

---
