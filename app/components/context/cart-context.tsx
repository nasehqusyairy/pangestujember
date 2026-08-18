import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { CART_STORAGE_KEY, type MenuItem } from "~/lib/data";

export type CartItem = Omit<Omit<MenuItem, 'category_id'>, 'is_favorite'> & { quantity: number }

export type CartItemPayload = Omit<CartItem, "quantity">;

type CartContextType = {
  items: CartItem[];
  totalPrice: number;
  getQuantity: (id: number) => number;
  addItem: (item: CartItemPayload) => void;
  removeItem: (item: CartItemPayload) => void;
  setItemQuantity: (item: CartItemPayload, quantity: number) => void;
  drawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function getSavedCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

// Fungsi helper yang menjaga urutan index tetap sama
function mergeCartItem(cart: CartItem[], item: CartItemPayload, quantity: number): CartItem[] {
  if (quantity <= 0) {
    return cart.filter((entry) => entry.id !== item.id);
  }

  const exists = cart.some((entry) => entry.id === item.id);

  if (exists) {
    // Update quantity di posisi asal tanpa mengubah index
    return cart.map((entry) =>
      entry.id === item.id ? { ...entry, quantity } : entry
    );
  }

  // Jika item baru, tambahkan ke posisi paling akhir
  return [...cart, { ...item, quantity }];
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setItems(getSavedCart());
  }, []);

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const setItemQuantity = (item: CartItemPayload, quantity: number) => {
    setItems((current) => {
      const nextCart = mergeCartItem(current, item, quantity);
      saveCart(nextCart);
      return nextCart;
    });
  };

  const addItem = (item: CartItemPayload) => {
    setItems((current) => {
      const currentQuantity = current.find((entry) => entry.id === item.id)?.quantity ?? 0;
      const nextCart = mergeCartItem(current, item, currentQuantity + 1);
      saveCart(nextCart);
      return nextCart;
    });
  };

  const removeItem = (item: CartItemPayload) => {
    setItems((current) => {
      const currentQuantity = current.find((entry) => entry.id === item.id)?.quantity ?? 0;
      const nextCart = mergeCartItem(current, item, currentQuantity - 1);
      saveCart(nextCart);
      return nextCart;
    });
  };

  const value = {
    items,
    totalPrice,
    getQuantity: (id: number) => items.find((item) => item.id === id)?.quantity ?? 0,
    addItem,
    removeItem,
    setItemQuantity,
    drawerOpen,
    setDrawerOpen
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}