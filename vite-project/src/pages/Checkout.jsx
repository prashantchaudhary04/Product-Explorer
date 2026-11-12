
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, totalPrice, placeOrder } = useCart();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setCustomer((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    const order = placeOrder(customer);

    if (order) {
      navigate("/order-confirmation");
    }
  }

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="mb-4 text-xl font-bold">
          Your cart is empty.
        </h2>

        <Link to="/" className="text-blue-600">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-md sm:p-8">

        <h1 className="mb-6 text-3xl font-bold">
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={customer.name}
              onChange={handleChange}
              required
              minLength={2}
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit phone number"
              placeholder="10-digit phone number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Delivery Address
            </label>

            <textarea
              name="address"
              value={customer.address}
              onChange={handleChange}
              required
              minLength={10}
              placeholder="Enter your complete address"
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="rounded-lg bg-gray-100 p-4">
            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span className="text-blue-600">
                ₹{totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {error && (
            <p className="text-red-500">{error}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Place Order
          </button>

        </form>
      </div>
    </div>
  );
}

export default Checkout;
