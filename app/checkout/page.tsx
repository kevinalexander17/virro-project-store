'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'España',
    phone: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando se modifica un campo
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    // Validaciones básicas
    if (!formData.name.trim()) errors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) errors.email = 'El email es obligatorio';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email inválido';
    if (!formData.address.trim()) errors.address = 'La dirección es obligatoria';
    if (!formData.city.trim()) errors.city = 'La ciudad es obligatoria';
    if (!formData.postalCode.trim()) errors.postalCode = 'El código postal es obligatorio';
    if (!formData.phone.trim()) errors.phone = 'El teléfono es obligatorio';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Aquí se procesaría el pago y se enviaría la orden
    alert('¡Gracias por tu compra! Tu pedido ha sido procesado correctamente.');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-light mb-4">Tu carrito está vacío</h1>
        <p className="mb-8">No hay productos en tu carrito para realizar el checkout.</p>
        <Link href="/tienda" className="inline-block bg-black text-white px-6 py-3 uppercase text-sm tracking-widest hover:bg-gray-800 transition-colors">
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-light text-center mb-12 uppercase tracking-wider">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Formulario de envío */}
        <div>
          <h2 className="text-lg font-medium mb-6">Datos de envío</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} px-4 py-2`}
              />
              {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} px-4 py-2`}
              />
              {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm mb-1">Dirección</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full border ${formErrors.address ? 'border-red-500' : 'border-gray-300'} px-4 py-2`}
              />
              {formErrors.address && <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm mb-1">Ciudad</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full border ${formErrors.city ? 'border-red-500' : 'border-gray-300'} px-4 py-2`}
                />
                {formErrors.city && <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>}
              </div>
              
              <div>
                <label htmlFor="postalCode" className="block text-sm mb-1">Código Postal</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className={`w-full border ${formErrors.postalCode ? 'border-red-500' : 'border-gray-300'} px-4 py-2`}
                />
                {formErrors.postalCode && <p className="text-red-500 text-xs mt-1">{formErrors.postalCode}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="country" className="block text-sm mb-1">País</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2"
              >
                <option value="España">España</option>
                <option value="Portugal">Portugal</option>
                <option value="Francia">Francia</option>
                <option value="Italia">Italia</option>
                <option value="Alemania">Alemania</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm mb-1">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} px-4 py-2`}
              />
              {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm mb-1">Notas del pedido (opcional)</label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>
            
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-black text-white py-4 uppercase text-sm tracking-widest hover:bg-gray-800 transition-colors"
              >
                Completar Compra
              </button>
            </div>
          </form>
        </div>
        
        {/* Resumen del pedido */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-lg font-medium mb-6">Resumen del pedido</h2>
          
          <div className="space-y-4 mb-8">
            {items.map((item, index) => (
              <div key={`${item.id}-${item.size}-${item.color}-${index}`} className="flex py-4 border-b border-gray-200">
                <div className="w-20 h-20 relative rounded overflow-hidden">
                  <Image 
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <span className="text-sm font-medium">
                      S/. {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-1">
                    Talla: {item.size} | Color: {item.color} | Cantidad: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="text-sm">S/. {totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-sm">Envío</span>
              <span className="text-sm">Calculado en el siguiente paso</span>
            </div>
            
            <div className="flex justify-between font-medium pt-2 border-t border-gray-200 mt-2">
              <span>Total</span>
              <span>S/. {totalPrice.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-4">
              Tu información personal será utilizada para procesar tu pedido, mejorar tu experiencia en nuestro sitio web y para otros propósitos descritos en nuestra política de privacidad.
            </p>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="terms" 
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm">
                He leído y acepto los <a href="#" className="underline">términos y condiciones</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 