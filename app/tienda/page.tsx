'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  price: number
  image: string
  colors: string[]
  sizes: string[]
  category: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Polo Clásico',
    price: 89.90,
    image: '/product-1.jpg',
    colors: ['Negro', 'Blanco', 'Gris'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Polos'
  },
  {
    id: '2',
    name: 'Box-sizing Premium',
    price: 129.90,
    image: '/product-2.jpg',
    colors: ['Azul', 'Negro', 'Beige'],
    sizes: ['S', 'M', 'L'],
    category: 'Box-sizing'
  },
  {
    id: '3',
    name: 'Hoodie Essential',
    price: 159.90,
    image: '/product-3.jpg',
    colors: ['Negro', 'Gris', 'Verde'],
    sizes: ['M', 'L', 'XL'],
    category: 'Hoodies'
  },
]

const categories = ['Todos', 'Polos', 'Camisas boxy-fit', 'Zip Hoddies']
const sizes = ['S', 'M', 'L']
const priceRanges = [
  { label: 'Menos de S/. 100', value: '0-100' },
  { label: 'S/. 100 - S/. 150', value: '100-150' },
  { label: 'Más de S/. 150', value: '150-999' },
]

export default function Tienda() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('')

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'Todos' || product.category === selectedCategory
    const sizeMatch = selectedSizes.length === 0 || product.sizes.some(size => selectedSizes.includes(size))
    const priceMatch = !selectedPriceRange || (() => {
      const [min, max] = selectedPriceRange.split('-').map(Number)
      return product.price >= min && product.price <= max
    })()
    return categoryMatch && sizeMatch && priceMatch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filtros */}
        <div className="space-y-8">
          {/* Categorías */}
          <div>
            <h3 className="text-lg font-brand font-medium mb-4">Categorías</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'text-primary-800 hover:bg-primary-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tallas */}
          <div>
            <h3 className="text-lg font-brand font-medium mb-4">Tallas</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSizes((prev) =>
                      prev.includes(size)
                        ? prev.filter((s) => s !== size)
                        : [...prev, size]
                    )
                  }}
                  className={`px-3 py-1 rounded-md border transition-colors ${
                    selectedSizes.includes(size)
                      ? 'bg-primary-500 text-white border-primary-500'
                      : 'border-primary-200 text-primary-800 hover:bg-primary-50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Rango de Precios */}
          <div>
            <h3 className="text-lg font-brand font-medium mb-4">Precio</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setSelectedPriceRange(range.value)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedPriceRange === range.value
                      ? 'bg-primary-500 text-white'
                      : 'text-primary-800 hover:bg-primary-50'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Lista de Productos */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-brand font-medium text-lg text-primary-800">
                    {product.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mt-1">
                    S/. {product.price.toFixed(2)}
                  </p>
                  <div className="mt-3">
                    <p className="text-sm text-primary-700">
                      Colores: {product.colors.join(', ')}
                    </p>
                    <p className="text-sm text-primary-700 mt-1">
                      Tallas: {product.sizes.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 