"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cartCount, cartSubtotal, type CartItem } from "@/lib/cart";

const STORAGE_KEY = "uc-cart";

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (slug: string, size: string) => void;
  updateQty: (slug: string, size: string, qty: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const isHydratedRef = useRef(false);

  // Hydrate from localStorage after mount to avoid SSR mismatches.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed)) setItems(parsed as CartItem[]);
      }
    } catch (error) {
      console.error("[cart] Failed to restore cart, starting empty:", error);
    }
    isHydratedRef.current = true;
  }, []);

  useEffect(() => {
    if (!isHydratedRef.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("[cart] Failed to persist cart:", error);
    }
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((item: Omit<CartItem, "qty">) => {
    setItems((current) => {
      const existing = current.find(
        (entry) => entry.slug === item.slug && entry.size === item.size
      );
      if (existing) {
        return current.map((entry) =>
          entry === existing ? { ...entry, qty: entry.qty + 1 } : entry
        );
      }
      return [...current, { ...item, qty: 1 }];
    });
  }, []);

  const removeItem = useCallback((slug: string, size: string) => {
    setItems((current) =>
      current.filter((entry) => !(entry.slug === slug && entry.size === size))
    );
  }, []);

  const updateQty = useCallback((slug: string, size: string, qty: number) => {
    setItems((current) => {
      if (qty < 1) {
        return current.filter(
          (entry) => !(entry.slug === slug && entry.size === size)
        );
      }
      return current.map((entry) =>
        entry.slug === slug && entry.size === size ? { ...entry, qty } : entry
      );
    });
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: cartCount(items),
      subtotal: cartSubtotal(items),
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQty,
    }),
    [items, isOpen, openCart, closeCart, addItem, removeItem, updateQty]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
