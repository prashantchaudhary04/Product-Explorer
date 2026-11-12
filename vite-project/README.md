# 🛍️ Product Explorer – Modern E-Commerce Web Application

A modern, responsive e-commerce frontend built using **React.js, Tailwind CSS, and Context API**. Explore products, search by name, filter by category, manage your shopping cart, and experience Dark and Light themes.

## 🚀 Features

- **Product Listing:** Fetch and display products dynamically using DummyJSON API.
- **Search Functionality:** Search products by their names.
- **Dynamic Category Filtering:** Filter products using categories fetched from the API.
- **Product Details:** View individual product information using dynamic routing.
- **Shopping Cart:** Add and remove products from the cart.
- **Quantity Management:** Increase or decrease product quantities.
- **Price Calculation:** Automatically calculate subtotal and total price.
- **LocalStorage:** Preserve cart items and theme preferences after refreshing the browser.
- **Checkout:** Customer information form with validation.
- **Order Confirmation:** Display order details after successful checkout simulation.
- **Dark & Light Mode:** Switch between themes with saved preferences.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS | Styling and responsive design |
| React Router | Client-side routing |
| Context API | Global state management |
| React Hooks | State and lifecycle management |
| LocalStorage | Persistent cart and theme |
| DummyJSON API | Product and category data |
| Vite | Development and build tool |
| Git & GitHub | Version control |

## 📂 Project Structure

```text
Product-Explorer/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── OrderConfirmation.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone https://github.com/prashantchaudhary04/Product-Explorer.git
```

**2. Navigate to the project directory**

```bash
cd Product-Explorer
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open in your browser**

```text
http://localhost:5173
```

## 🌐 API Reference

This project uses the DummyJSON API to retrieve product information.

- Products: https://dummyjson.com/products?limit=100
- Categories: https://dummyjson.com/products/categories
- Single Product: https://dummyjson.com/products/1

## 🧠 React Concepts Implemented

This project demonstrates practical implementation of:

- Functional Components and Props
- useState and useEffect
- useContext and Context API
- Custom Hooks
- useMemo and useCallback
- React Router and Dynamic Routing
- Array Methods: map(), filter(), and reduce()
- Async/Await and Fetch API
- Controlled Forms and Form Validation
- LocalStorage
- Conditional Rendering

## 💳 Checkout Disclaimer

The checkout functionality is a frontend demonstration. Orders are simulated and stored locally in the browser. No real payment gateway or backend order processing is connected.

## 🔮 Future Improvements

- User Authentication and Authorization
- Backend Integration using Node.js and Express.js
- MongoDB Database Integration
- Real Payment Gateway Integration
- Product Reviews and Ratings
- Order History and User Dashboard

## 👨‍💻 Author

**Prashant Chaudhary**

- GitHub: https://github.com/prashantchaudhary04
- LinkedIn: https://www.linkedin.com/in/prashantchaudhary04/

---

⭐ If you like this project, consider giving it a star!

**Built with ❤️ using React.js and Tailwind CSS.**
