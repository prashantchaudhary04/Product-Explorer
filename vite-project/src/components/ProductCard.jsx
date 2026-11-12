
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-contain p-4"
        />

        <div className="px-5 pt-2">
          <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
            {product.name}
          </h2>

          <p className="mt-2 text-xl font-bold text-blue-600">
            ₹{product.price}
          </p>

          <p className="mt-1 text-sm text-yellow-500">
            ⭐ {product.rating}
          </p>
        </div>
      </Link>

      <div className="p-5 pt-3">
        <button
          onClick={() => addToCart(product)}
          className="w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;
