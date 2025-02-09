### **🗄️ Cache API - In-Memory Key-Value Store**

A lightweight in-memory caching API with expiration and LRU eviction, built with **Node.js** and **Express**, and deployed on **Render**.

---

## 🚀 **Features**

✅ Store key-value pairs with a **POST** request.  
✅ Retrieve stored values using a **GET** request.  
✅ Delete a key-value pair using a **DELETE** request.  
✅ Automatic **expiration mechanism** (default: **1 min** per entry).

---

## 📌 **API Endpoints**

| Method   | Endpoint      | Description             |
| -------- | ------------- | ----------------------- |
| `POST`   | `/cache`      | Store a key-value pair  |
| `GET`    | `/cache/:key` | Retrieve a value by key |
| `DELETE` | `/cache/:key` | Remove a key-value pair |

---

## 🛠️ **Tech Stack**

- **Node.js** + **Express**
- **Vercel Serverless Functions**
- **In-memory Caching (Map)**

---

## 🔧 **Installation**

Clone the repository:

```
git clone https://github.com/aditya-narayan-sahoo/cache-api.git

cd cache-api
```

Install dependencies:

```
npm install
```

Run locally:

```sh
npm start

OR

npm run dev
```

---

## 📝 **Environment Variables (Optional)**

Create a `.env` file for custom configuration:

```
PORT=3000
```

---
