import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'techlaptop_cart_v1';

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      // ignore storage write errors
    }
  }, [items]);

  const addItem = (product, quantity = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx].quantity += quantity;
        return copy;
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id));

  const updateQuantity = (id, quantity) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, quantity } : p)));
  };

  const clear = () => setItems([]);

  const totalCount = items.reduce((s, it) => s + (it.quantity || 0), 0);
  const totalPrice = items.reduce((s, it) => s + (it.quantity || 0) * (it.price || 0), 0);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    totalCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside a CartProvider');
  return ctx;
}

export default CartContext;
