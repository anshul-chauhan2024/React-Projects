# 🛒 E-Commerce Web Application (MiniStore)

**Project Type:** Full-Featured Online Shopping Experience  
**Live Demo:** https://ministore-codebyansh.netlify.app  
**Tech Stack:** React JS, Tailwind CSS, REST API, HTML5, CSS3

---

## 📖 Project Overview

This is a fully responsive E-commerce application designed to simulate a real-world online shopping environment. The project focuses on dynamic content rendering, efficient state management, and a mobile-first user interface. It demonstrates the ability to handle complex data flows and interactive UI elements using the **React ecosystem**.

---

## 🛠️ Technical Features & Implementation

### 🔌 Dynamic Data Handling
- **REST API Integration:** Implemented asynchronous data fetching to pull real-time product information from a RESTful API.
- **Dynamic Rendering:** Used React's mapping logic to render product catalogs dynamically, ensuring the application remains lightweight and fast.

### 🔍 Advanced Filtering & Search
- **Multi-Criteria Filter:** Engineered custom logic to allow users to filter products by **Category, Brand, and Price Range**.
- **Instant Search:** Implemented real-time search functionality to enhance user navigation and product discovery.

### 🛒 State-Driven Cart Management
- **Persistent Cart Logic:** Built a seamless "Add to Cart" functionality using React State to track selected items, quantities, and real-time total calculations.
- **User Feedback:** Integrated interactive UI triggers (Toasts/Modals) to confirm user actions within the shopping flow.

### 📱 Responsive UI/UX
- **Mobile-First Approach:** Leveraged **Tailwind CSS** utility classes to ensure a pixel-perfect layout across Mobile, Tablet, and Desktop devices.
- **Interactive Elements:** Optimized buttons, hover effects, and transitions for a professional, high-impact visual experience.

---

## 🚀 Key Achievements

- **Complex State Management:** Successfully managed the flow of data between product listings and the shopping cart.
- **API Optimization:** Handled loading and error states during API calls to ensure a smooth user experience even on slow networks.
- **Code Maintainability:** Structured the project with a focus on reusable components and clean, documented code.

---

## 📂 Project Structure

```text
src/
├── components/      # Navbar, ProductCard, FilterSidebar, CartDrawer
├── context/         # Cart State Management logic
├── services/        # API call configurations (Fetch/Axios)
├── pages/           # Home, ProductDetails, Checkout
├── assets/          # Icons and brand visuals
└── App.js           # Main Routing and Logic
