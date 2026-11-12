
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {

  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("product-explorer-cart")
      ) || [];
    } catch {
      return [];
    }
  });

  // Load last order
  const [lastOrder, setLastOrder] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("product-explorer-order")
      );
    } catch {
      return null;
    }
  });

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "product-explorer-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // Save latest order
  useEffect(() => {
    if (lastOrder) {
      localStorage.setItem(
        "product-explorer-order",
        JSON.stringify(lastOrder)
      );
    }
  }, [lastOrder]);

  // Add product
  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevCart,
        { ...product, quantity: 1 }
      ];
    });
  }, []);

  // Remove product
  const removeFromCart = useCallback((id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  }, []);

  // Update quantity
  const updateQuantity = useCallback((id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                1,
                item.quantity + amount
              )
            }
          : item
      )
    );
  }, []);

  // Clear cart
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  // Calculate totals
  const cartCount = useMemo(
    () => cart.reduce(
      (total, item) => total + item.quantity,
      0
    ),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    ),
    [cart]
  );

  // Place order
  const placeOrder = useCallback((customer) => {
    if (cart.length === 0) return null;

    const order = {
      id: Date.now(),
      customer,
      items: cart,
      total: cart.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      ),
      date: new Date().toLocaleString()
    };

    setLastOrder(order);
    setCart([]);

    return order;
  }, [cart]);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    totalPrice,
    lastOrder,
    placeOrder
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
