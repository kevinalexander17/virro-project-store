'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Tipos para TS
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: string, color: string) => void;
  updateQuantity: (id: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
};

// Crear el contexto
export const CartContext = createContext<CartContextType | null>(null);

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Provider Component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Cargar carrito de localStorage cuando el componente se monta
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
    setLoaded(true);
  }, []);

  // Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items, loaded]);

  // Añadir item al carrito
  const addItem = (newItem: CartItem) => {
    setItems(prevItems => {
      // Verificar si el producto ya existe con la misma talla y color
      const existingItemIndex = prevItems.findIndex(
        item => item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
      );

      if (existingItemIndex > -1) {
        // Si existe, actualizar la cantidad
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        // Si no existe, añadir nuevo item
        return [...prevItems, newItem];
      }
    });
  };

  // Eliminar item del carrito
  const removeItem = (id: string, size: string, color: string) => {
    setItems(prevItems => 
      prevItems.filter(item => 
        !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  // Actualizar cantidad de un item
  const updateQuantity = (id: string, size: string, color: string, quantity: number) => {
    setItems(prevItems => 
      prevItems.map(item => 
        (item.id === id && item.size === size && item.color === color)
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Limpiar carrito
  const clearCart = () => {
    setItems([]);
  };

  // Calcular número total de items
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  // Calcular precio total
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}; 