'use client'

import { Suspense } from 'react'
import Image from 'next/image'

function TiendaContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/shop-hero.jpg"
          alt="Tienda"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-serif tracking-widest">TIENDA</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Filters */}
          <div className="md:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div>
                <h2 className="text-xs tracking-widest uppercase mb-4">CATEGORÍAS</h2>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm">Boxy-fit shirts</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm">Zip Hoodies</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm">Boxy-fit polos</span>
                  </label>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h2 className="text-xs tracking-widest uppercase mb-4">TALLAS</h2>
                <div className="grid grid-cols-3 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 py-2 text-xs tracking-widest uppercase"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((product) => (
                <div key={product} className="product-card">
                  <div className="relative aspect-square mb-4">
                    <Image
                      src={`/product-${product}.jpg`}
                      alt={`Product ${product}`}
                      fill
                      className="object-cover product-image"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xs tracking-widest uppercase mb-1">Product {product}</h3>
                    <p className="text-sm text-gray-600">S/. 150.00</p>
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

export default function Tienda() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TiendaContent />
    </Suspense>
  )
} 