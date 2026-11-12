
import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/order-confirmation"
          element={<OrderConfirmation />}
        />

        <Route
          path="*"
          element={
            <div className="p-10 text-center">
              <h1 className="text-3xl font-bold">
                404 - Page Not Found
              </h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
