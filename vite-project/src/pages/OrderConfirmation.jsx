
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

function OrderConfirmation() {
  const { lastOrder } = useCart();

  if (!lastOrder) {
    return (
      <div className="p-10 text-center">
        <h2 className="mb-4 text-xl font-bold">
          No recent order found.
        </h2>

        <Link to="/" className="text-blue-600">
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">

      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 text-center shadow-md">

        <div className="mb-5 text-6xl">
          🎉
        </div>

        <h1 className="text-3xl font-bold text-green-600">
          Order Placed Successfully!
        </h1>

        <p className="mt-3 text-gray-600">
          Thank you, {lastOrder.customer.name}!
        </p>

        <div className="my-8 rounded-lg bg-gray-100 p-5 text-left">

          <p className="mb-3 font-semibold">
            Order ID: #{lastOrder.id}
          </p>

          <p className="mb-3 text-sm text-gray-600">
            Date: {lastOrder.date}
          </p>

          <p className="mb-3 text-sm text-gray-600">
            Email: {lastOrder.customer.email}
          </p>

          <p className="mb-4 text-sm text-gray-600">
            Address: {lastOrder.customer.address}
          </p>

          <div className="border-t border-gray-300 pt-4">

            {lastOrder.items.map((item) => (
              <div
                key={item.id}
                className="mb-3 flex justify-between gap-4 text-sm"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span className="font-semibold">
                  ₹{(
                    item.price * item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            ))}

          </div>

          <div className="mt-4 flex justify-between border-t border-gray-300 pt-4 text-lg font-bold">
            <span>Total Paid</span>
            <span className="text-blue-600">
              ₹{lastOrder.total.toFixed(2)}
            </span>
          </div>

        </div>

        <Link
          to="/"
          className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}

export default OrderConfirmation;
