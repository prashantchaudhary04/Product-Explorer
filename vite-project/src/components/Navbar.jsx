
import { Link, NavLink } from "react-router";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();

  const linkStyle = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 bg-white px-5 py-4 shadow-md dark:bg-gray-800 sm:px-8">

      <Link
        to="/"
        className="text-xl font-bold text-blue-600 sm:text-2xl"
      >
        Product Explorer
      </Link>

      <div className="flex items-center gap-4 text-sm sm:gap-6 sm:text-base">

        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/cart" className={linkStyle}>
          Cart 🛒 ({cartCount})
        </NavLink>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
          className="rounded-lg bg-gray-100 px-3 py-2 text-lg transition hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
