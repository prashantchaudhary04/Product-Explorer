
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["all"]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  // Fetch Products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Fetch Categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await response.json();

        setCategories([
          "all",
          ...data.map((category) => category.slug)
        ]);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchCategories();
  }, []);

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Explore Our Products
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-6 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
        />

        {/* Categories */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg px-5 py-2 font-medium capitalize transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100"
              }`}
            >
              {category.replaceAll("-", " ")}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-lg">
            Loading products...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}

        {/* Products */}
        {!loading && !error && (
          <>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={{
                      id: product.id,
                      name: product.title,
                      price: product.price,
                      rating: product.rating,
                      image: product.thumbnail
                    }}
                  />
                ))}

              </div>
            ) : (
              <p className="text-center text-lg text-gray-500">
                No products found.
              </p>
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default Home;
