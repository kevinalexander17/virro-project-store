'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  sizes: string[]
}

const products: Product[] = [
  {
    id: '1',
    name: 'CAMISA BOXY-FIT ESSENTIAL',
    price: 150.00,
    image: '/product-1.jpg',
    category: 'camisas',
    sizes: ['S', 'M', 'L']
  },
  {
    id: '2',
    name: 'CAMISA BOXY-FIT CLASSIC',
    price: 160.00,
    image: '/product-2.jpg',
    category: 'camisas',
    sizes: ['S', 'M', 'L']
  },
  {
    id: '3',
    name: 'ZIP HOODIE ESSENTIAL',
    price: 180.00,
    image: '/product-3.jpg',
    category: 'hoodies',
    sizes: ['S', 'M', 'L']
  },
  {
    id: '4',
    name: 'ZIP HOODIE CLASSIC',
    price: 190.00,
    image: '/product-4.jpg',
    category: 'hoodies',
    sizes: ['S', 'M', 'L']
  },
  {
    id: '5',
    name: 'POLO BOXY-FIT ESSENTIAL',
    price: 120.00,
    image: '/product-5.jpg',
    category: 'polos',
    sizes: ['S', 'M', 'L']
  },
  {
    id: '6',
    name: 'POLO BOXY-FIT CLASSIC',
    price: 130.00,
    image: '/product-6.jpg',
    category: 'polos',
    sizes: ['S', 'M', 'L']
  }
]

const categories = [
  { id: 'camisas', name: 'CAMISAS BOXY-FIT' },
  { id: 'hoodies', name: 'ZIP HOODIES' },
  { id: 'polos', name: 'POLOS BOXY-FIT' }
]

export default function Tienda() {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedSize, setSelectedSize] = useState<string>('')

  const filteredProducts = products.filter(product => {
    const categoryMatch = !selectedCategory || product.category === selectedCategory
    const sizeMatch = !selectedSize || product.sizes.includes(selectedSize)
    return categoryMatch && sizeMatch
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <Image
          src="/shop-hero.jpg"
          alt="Tienda VirroProject"
          fill
          className="object-cover"
          priority
          quality={100}
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider text-white">TIENDA</h1>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          {/* Filtros */}
          <div className="space-y-12">
            {/* Categorías */}
            <div>
              <h2 className="text-sm font-medium uppercase tracking-wider mb-6">CATEGORÍAS</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(selectedCategory === category.id ? '' : category.id)}
                    className={`block w-full text-left py-2 text-sm tracking-wider transition-colors duration-300 ${
                      selectedCategory === category.id
                        ? 'text-primary-800'
                        : 'text-primary-600 hover:text-primary-800'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Talla */}
            <div>
              <h2 className="text-sm font-medium uppercase tracking-wider mb-6">TALLA</h2>
              <div className="flex gap-2">
                {['S', 'M', 'L'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
                    className={`w-10 h-10 flex items-center justify-center border text-sm tracking-wider transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-primary-800 text-primary-800'
                        : 'border-primary-200 text-primary-600 hover:border-primary-800'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Productos */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-square mb-4 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-medium tracking-wider mb-1 transition-colors duration-300 group-hover:text-primary-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-primary-600">S/. {product.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 