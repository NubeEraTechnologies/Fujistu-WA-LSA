# 📄 `.env` FILE (PROJECT ROOT)

Create a file named **`.env`** in the **root of `Fujistu-WA-LSA`** (same level as `client/` and `server/`).

```env
############################
# GLOBAL
############################
ENV=development

############################
# SERVER (Backend)
############################
SERVER_PORT=4000
JWT_SECRET=ChangeThisSecret123
API_BASE_URL=http://localhost:4000

############################
# CLIENT (React)
############################
REACT_APP_API_URL=http://localhost:4000
CLIENT_PORT=3000

############################
# SECURITY
############################
SESSION_TIMEOUT=3600
ENABLE_AUTH=true
```

---

## 📁 Where this `.env` is used

| Location    | Used by          | Purpose            |
| ----------- | ---------------- | ------------------ |
| root `.env` | Docker / Compose | Ports & env values |
| `server`    | Node.js          | API port, JWT      |
| `client`    | React            | API URL            |

---

## 🛠 Important: React `.env` RULE (Very Important)

👉 **React only reads variables that start with `REACT_APP_`**

So this is correct:

```env
REACT_APP_API_URL=http://localhost:4000
```

❌ This will NOT work in React:

```env
API_BASE_URL=http://localhost:4000
```

---

## 🔧 How Backend Uses `.env`

Inside `server/index.js` (or `app.js`):

```js
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 🔧 How Client Uses `.env`

Inside React code:

```js
const API_URL = process.env.REACT_APP_API_URL;
```

Example API call:

```js
fetch(`${API_URL}/login`)
```

---

## 🐳 If Using Docker Run

```bash
docker run -d \
  --env-file .env \
  -p 4000:4000 \
  nubeeratechnologies/fujitsu-server:1.0
```

```bash
docker run -d \
  --env-file .env \
  -p 3000:3000 \
  nubeeratechnologies/fujitsu-client:1.0
```

---

## 🐳 If Using Docker Compose (Recommended)

```yaml
services:
  server:
    image: nubeeratechnologies/fujitsu-server:1.0
    env_file: .env
    ports:
      - "${SERVER_PORT}:${SERVER_PORT}"

  client:
    image: nubeeratechnologies/fujitsu-client:1.0
    env_file: .env
    ports:
      - "${CLIENT_PORT}:${CLIENT_PORT}"
```

---

## 🧯 Common Mistakes (Avoid These)

❌ Forgetting `REACT_APP_` prefix
❌ Putting `.env` inside wrong folder
❌ Not restarting Docker after `.env` change
❌ Using quotes `" "` in `.env` (don’t)

---

## ✅ Quick Test

```bash
docker compose down
docker compose up -d
```

Then open:

* 🌐 http://VM_IP:3000
* 🌐 http://VM_IP:4000


