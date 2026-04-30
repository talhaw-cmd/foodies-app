# 🥗 Foodies — Premium Food Ordering System

Foodies is a modern, feature-rich **React.js food ordering application** built with premium UI/UX principles and efficient state management.

It simulates a real-world food ordering experience where users can browse items, manage their cart, and receive real-time order confirmation emails.

> 🎯 This README highlights the **design decisions, architecture, and technical depth** of the project to help recruiters and developers quickly understand its value.

---

## 🚀 Live Demo

🔗 Coming Soon

---

## 🧠 Tech Stack

* ⚛️ React.js
* 🎨 Tailwind CSS
* 📦 React Context API
* 📩 EmailJS
* 💾 LocalStorage

---

## 🎨 UI/UX — Premium Magenta Branding

To create a bold and energetic identity, Foodies uses a carefully selected magenta palette:

* **Primary Color:** `#ed0b5e`

### ✨ Design Highlights

* Rounded geometry (`rounded-3xl`, `rounded-full`)
* Smooth, app-like interactions
* Soft shadows and subtle gradients
* Elevated cards and buttons

### ✅ Result

A clean, modern, and premium interface that closely resembles real-world food delivery apps.

---

## 🛒 Global State Management (React Context API)

The cart system is managed using the **React Context API** for scalable and efficient state handling.

### 🔑 Key Features

* **Centralized State**
  Cart items and cart count are managed globally

* **No Prop Drilling**
  Seamless data sharing between Navbar and Home components

* **Real-Time Updates**

  * Clicking "Order Now" updates cart instantly
  * Navbar counter updates in real time

### 💡 Why This Matters

This approach provides a strong foundation for scaling into advanced solutions like Redux or Zustand.

---

## 📩 Automated Email System (EmailJS)

Foodies integrates **EmailJS** to simulate a real-world order confirmation system.

### 📬 Email Features

* HTML-based email template (not plain text)
* Branded and visually rich receipt
* Dynamic data injection:

  * Customer Name
  * Order ID
  * Total Bill

### ⚙️ Architecture

* Fully frontend-based
* No backend server required

### 🎯 Impact

Replicates real production-level email workflows used in modern applications.

---

## ⚡ Performance Optimization

### 🚀 Techniques Used

* **Lazy Loading**
  Images load only when visible using `loading="lazy"`

* **LocalStorage Sync**
  Cart data is persisted efficiently without unnecessary memory usage

---

## 📂 Project Structure

```
src/
 ├── components/
 ├── context/
 ├── pages/
 ├── assets/
 └── App.jsx
```

---

## 🧪 Future Improvements

* 🔐 Authentication system (Login/Signup)
* 💳 Payment gateway integration (Stripe)
* 📦 Backend (Node.js + Express)
* 📊 Admin dashboard

---

## 🧑‍💻 Author

**M Talha**
Frontend Developer | Graphic Designer

---

## ⭐ Why This Project Stands Out

* Real-world application flow
* Clean and modern UI/UX
* Scalable state management
* Production-like email system
* Performance-focused development

---

## 📌 Note

This project is built for **portfolio and learning purposes**, focusing on real-world simulation and clean architecture.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on Git
