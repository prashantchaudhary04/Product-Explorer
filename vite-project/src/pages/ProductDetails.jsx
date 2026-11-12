
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <p className="mt-10 text-center">
        Loading product...
      </p>
    );
  }

  if (error || !product) {
    return (
      <div className="p-10 text-center">
        <p className="text-red-500">
          {error || "Product not found"}
        </p>
        <Link to="/" className="mt-4 inline-block text-blue-600">
          Back to Products
        </Link>
      </div>
    );
  }

  const cartProduct = {
    id: product.id,
    name: product.title,
    price: product.price,
    rating: product.rating,
    image: product.thumbnail
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-md sm:p-8">

        <Link
          to="/"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-80 w-full object-contain"
          />

          <div>

            <p className="mb-3 capitalize text-sm text-gray-500">
              {product.category}
            </p>

            <h1 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h1>

            <p className="mt-4 leading-relaxed text-gray-600">
              {product.description}
            </p>

            <p className="mt-5 text-2xl font-bold text-blue-600">
              ₹{product.price}
            </p>

            <p className="mt-2 text-yellow-500">
              ⭐ {product.rating}
            </p>

            <p className="mt-2 text-gray-600">
              Stock: {product.stock}
            </p>

            <button
              disabled={product.stock <= 0}
              onClick={() => addToCart(cartProduct)}
              className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
