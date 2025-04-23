'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

// Esta función sería reemplazada por una llamada a API o base de datos en una aplicación real
function getProductData(id: string) {
  // Datos de ejemplo
  const products = {
    '1': {
      id: '1',
      name: 'Boxy Hoodie Black',
      price: 150.00,
      description: 'Sudadera con capucha de corte boxy en algodón premium. Detalles minimalistas y acabado de alta calidad.',
      images: ['/product-1.jpg', '/product-2.jpg', '/product-3.jpg'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Negro', 'Gris', 'Beige'],
      details: [
        'Algodón 100% orgánico',
        'Fabricado en Portugal',
        'Lavado a máquina a 30°C',
        'Corte sobredimensionado'
      ]
    },
    '2': {
      id: '2',
      name: 'Essential T-Shirt White',
      price: 65.00,
      description: 'Camiseta esencial de corte relajado en algodón premium. Base perfecta para cualquier outfit.',
      images: ['/product-2.jpg', '/product-3.jpg', '/product-4.jpg'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blanco', 'Negro', 'Azul marino'],
      details: [
        'Algodón 100% pima',
        'Fabricado en Portugal',
        'Lavado a máquina a 30°C',
        'Corte regular'
      ]
    },
    '3': {
      id: '3',
      name: 'Urban Pants Black',
      price: 120.00,
      description: 'Pantalones urbanos con un toque contemporáneo. Confort y estilo para el día a día.',
      images: ['/product-3.jpg', '/product-4.jpg', '/product-5.jpg'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Negro', 'Caqui'],
      details: [
        '98% Algodón, 2% Elastano',
        'Fabricado en Portugal',
        'Lavado a máquina a 30°C',
        'Corte regular'
      ]
    },
    '4': {
      id: '4',
      name: 'Zip Hoodie Gray',
      price: 175.00,
      description: 'Sudadera con cremallera en tejido premium. Diseño minimalista con atención al detalle.',
      images: ['/product-4.jpg', '/product-5.jpg', '/product-6.jpg'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Gris', 'Negro'],
      details: [
        'Algodón 100% orgánico',
        'Fabricado en Portugal',
        'Lavado a máquina a 30°C',
        'Corte regular'
      ]
    },
  };
  
  return products[id as keyof typeof products] || null;
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductData(params.id);
  const { addItem } = useCart();
  
  // Estados para las selecciones del usuario
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-light mb-4">Producto no encontrado</h1>
        <p className="mb-8">El producto que buscas no existe o ha sido removido.</p>
        <Link href="/tienda" className="inline-block bg-black text-white px-6 py-3 uppercase text-sm tracking-widest hover:bg-gray-800 transition-colors">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Validar que se haya seleccionado talla y color
    if (!selectedSize) {
      setErrorMessage('Por favor selecciona una talla');
      return;
    }
    
    if (!selectedColor) {
      setErrorMessage('Por favor selecciona un color');
      return;
    }
    
    // Añadir al carrito
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor,
      image: product.images[0]
    });
    
    // Mostrar mensaje de éxito y limpiar error
    setSuccessMessage('¡Producto añadido al carrito!');
    setErrorMessage('');
    
    // Limpiar mensaje de éxito después de 3 segundos
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Migas de pan */}
      <div className="mb-8 text-sm">
        <Link href="/" className="text-gray-500 hover:text-black">Inicio</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/tienda" className="text-gray-500 hover:text-black">Tienda</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span>{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Imágenes del producto */}
        <div>
          <div className="relative aspect-square mb-4">
            <Image 
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.slice(1).map((img, index) => (
              <div key={index} className="relative aspect-square">
                <Image 
                  src={img}
                  alt={`${product.name} vista ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Información del producto */}
        <div>
          <h1 className="text-2xl font-light uppercase mb-2">{product.name}</h1>
          <p className="text-xl mb-6">S/. {product.price.toFixed(2)}</p>
          
          <p className="text-gray-600 mb-8">{product.description}</p>
          
          {/* Mensajes de error o éxito */}
          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-6">
              {errorMessage}
            </div>
          )}
          
          {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 mb-6">
              {successMessage}
            </div>
          )}
          
          {/* Selección de color */}
          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-wider mb-4">Color</h3>
            <div className="flex space-x-2">
              {product.colors.map(color => (
                <button 
                  key={color} 
                  className={`px-4 py-2 border text-sm ${selectedColor === color ? 'border-black' : 'border-gray-300 hover:border-black'}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          {/* Selección de talla */}
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider mb-4">Talla</h3>
            <div className="flex space-x-2">
              {product.sizes.map(size => (
                <button 
                  key={size} 
                  className={`w-10 h-10 flex items-center justify-center border text-sm ${selectedSize === size ? 'border-black' : 'border-gray-300 hover:border-black'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Cantidad */}
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider mb-4">Cantidad</h3>
            <div className="flex items-center border border-gray-300 inline-block">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-gray-500 hover:text-black"
              >
                -
              </button>
              <span className="px-3 text-sm">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-gray-500 hover:text-black"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Botón de compra */}
          <button 
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-3 uppercase text-sm tracking-widest hover:bg-gray-800 transition-colors mb-8"
          >
            Añadir al carrito
          </button>
          
          {/* Detalles del producto */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Detalles</h3>
            <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Productos relacionados */}
      <div className="mt-24">
        <h2 className="text-2xl font-light text-center mb-12 uppercase tracking-wider">También te puede gustar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Aquí irían productos relacionados dinámicos en una app real */}
          {[1, 2, 3, 4].filter(id => id.toString() !== params.id).slice(0, 4).map(id => (
            <Link href={`/producto/${id}`} key={id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden">
                <Image 
                  src={`/product-${id}.jpg`}
                  alt={`Producto ${id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm uppercase tracking-wide mb-1">{getProductData(id.toString())?.name}</h3>
                <p className="text-gray-700">S/. {getProductData(id.toString())?.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 