'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

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
    name: 'POLO BOXY-FIT ESSENTIAL',
    price: 150.00,
    image: '/product-1.jpg',
    category: 'boxy-fit-polos',
    sizes: ['S', 'M', 'L']
  },
  {
    id: '2',
    name: 'POLO BOXY-FIT CLASSIC',
    price: 160.00,
    image: '/product-2.jpg',
    category: 'boxy-fit-polos',
    sizes: ['S', 'M', 'L']
  },
  {
    id: '3',
    name: 'CAMISA BOXY-FIT ESSENTIAL',
    price: 180.00,
    image: '/product-3.jpg',
    category: 'boxy-fit-shirts',
    sizes: ['S', 'M', 'L']
  },
  {
    id: '4',
    name: 'CAMISA BOXY-FIT CLASSIC',
    price: 190.00,
    image: '/product-4.jpg',
    category: 'boxy-fit-shirts',
    sizes: ['S', 'M', 'L']
  },
  {
    id: '5',
    name: 'ZIP HOODIE ESSENTIAL',
    price: 220.00,
    image: '/product-5.jpg',
    category: 'zip-hoodies',
    sizes: ['S', 'M', 'L']
  },
  {
    id: '6',
    name: 'ZIP HOODIE CLASSIC',
    price: 230.00,
    image: '/product-6.jpg',
    category: 'zip-hoodies',
    sizes: ['S', 'M', 'L']
  }
]

export default function Tienda() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const filteredProducts = products.filter(product => {
    const categoryMatch = !selectedCategory || product.category === selectedCategory
    const sizeMatch = !selectedSize || product.sizes.includes(selectedSize)
    return categoryMatch && sizeMatch
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/shop-hero.jpg"
          alt="Shop Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-serif tracking-widest">TIENDA</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Filters */}
          <div className="w-full md:w-64 space-y-8">
            {/* Categories */}
            <div>
              <h2 className="text-xs font-light tracking-widest uppercase mb-4">CATEGORÍAS</h2>
              <div className="space-y-2">
                {['boxy-fit-polos', 'boxy-fit-shirts', 'zip-hoodies'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                    className={`block w-full text-left text-xs tracking-widest py-1 transition-colors ${
                      selectedCategory === category ? 'text-black' : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {category.toUpperCase().replace(/-/g, ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h2 className="text-xs font-light tracking-widest uppercase mb-4">TALLA</h2>
              <div className="grid grid-cols-3 gap-2">
                {['S', 'M', 'L'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                    className={`w-full aspect-square flex items-center justify-center text-xs tracking-widest border transition-colors ${
                      selectedSize === size ? 'border-black' : 'border-gray-200 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-square mb-4 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xs tracking-widest uppercase mb-1">{product.name}</h3>
                    <p className="text-xs tracking-widest text-gray-500">S/. {product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 