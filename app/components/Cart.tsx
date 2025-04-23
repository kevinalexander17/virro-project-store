'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, updateQuantity, totalPrice, itemCount } = useCart();

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Icono del carrito con contador */}
      <button 
        onClick={toggleCart} 
        className="relative text-black hover:text-gray-600"
        aria-label="Cart"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {/* Sidebar del carrito */}
      <div className={`fixed top-0 right-0 z-50 h-full w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Cabecera */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium">Tu carrito ({itemCount})</h2>
            <button 
              onClick={toggleCart}
              className="text-gray-500 hover:text-black"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Contenido del carrito */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center">
                <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
                <Link
                  href="/tienda"
                  className="bg-black text-white px-6 py-2 uppercase text-sm tracking-widest hover:bg-gray-800 transition-colors"
                  onClick={toggleCart}
                >
                  Ir a la tienda
                </Link>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={`${item.id}-${item.size}-${item.color}-${index}`} className="flex py-4 border-b border-gray-100">
                    {/* Imagen del producto */}
                    <div className="w-20 h-20 relative rounded overflow-hidden">
                      <Image 
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Información del producto */}
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id, item.size, item.color)}
                          className="text-gray-400 hover:text-black"
                          aria-label="Remove item"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      <p className="text-xs text-gray-500 mt-1">
                        Talla: {item.size} | Color: {item.color}
                      </p>
                      
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border border-gray-300">
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                            className="px-2 py-1 text-gray-500 hover:text-black"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-2 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                            className="px-2 py-1 text-gray-500 hover:text-black"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        
                        <span className="text-sm font-medium">
                          S/. {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Pie del carrito con total y checkout */}
          {items.length > 0 && (
            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">S/. {totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                Envío e impuestos calculados en el checkout
              </p>
              <Link
                href="/checkout"
                className="w-full bg-black text-white py-3 block text-center uppercase text-sm tracking-widest hover:bg-gray-800 transition-colors"
                onClick={toggleCart}
              >
                Checkout
              </Link>
              <button
                className="w-full mt-2 border border-black py-3 block text-center uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-colors"
                onClick={toggleCart}
              >
                Seguir comprando
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay para cerrar el carrito cuando se hace clic fuera */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleCart}
        />
      )}
    </>
  );
} 