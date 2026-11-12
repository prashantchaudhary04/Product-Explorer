
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-5xl px-6 py-10">

        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Shopping Cart 🛒
        </h1>

        {cart.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow-md">

            <h2 className="mb-4 text-xl font-semibold">
              Your cart is empty!
            </h2>

            <Link
              to="/"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Explore Products
            </Link>

          </div>
        ) : (
          <>
            <div className="space-y-5">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center gap-5 rounded-xl bg-white p-5 shadow-md sm:flex-row"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-28 object-contain"
                  />

                  <div className="flex-1 text-center sm:text-left">

                    <h2 className="text-lg font-semibold">
                      {item.name}
                    </h2>

                    <p className="mt-2 font-bold text-blue-600">
                      ₹{item.price}
                    </p>

                    <div className="mt-3 flex items-center justify-center gap-4 sm:justify-start">

                      <button
                        onClick={() =>
                          updateQuantity(item.id, -1)
                        }
                        className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, 1)
                        }
                        className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
                      >
                        +
                      </button>

                    </div>
                  </div>

                  <div className="text-center">

                    <p className="mb-3 font-semibold">
                      Subtotal: ₹
                      {(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              ))}

            </div>

            <div className="mt-8 rounded-xl bg-white p-6 shadow-md">

              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">
                  Total Amount
                </h2>

                <p className="text-2xl font-bold text-blue-600">
                  ₹{totalPrice.toFixed(2)}
                </p>
              </div>

              <Link
                to="/checkout"
                className="mt-6 block w-full rounded-lg bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
              >
                Proceed to Checkout
              </Link>

            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Cart;
