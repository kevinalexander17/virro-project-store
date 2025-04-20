'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Colecciones() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <Image
          src="/collection-hero.jpg"
          alt="Nueva Colección VirroProject"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider text-white mb-4">
              NUEVA COLECCIÓN
            </h1>
            <p className="text-white text-sm tracking-wider">
              DISPONIBLE PRÓXIMAMENTE
            </p>
          </div>
        </div>
      </div>

      {/* Lookbook */}
      <div className="max-w-[1600px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="relative aspect-square">
            <Image
              src="/lookbook-1.jpg"
              alt="Lookbook 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/lookbook-2.jpg"
              alt="Lookbook 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Productos Destacados */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-light tracking-wider mb-4">
            PRODUCTOS DESTACADOS
          </h2>
          <p className="text-sm text-primary-600 tracking-wider">
            DESCUBRE LAS PIEZAS CLAVE DE LA NUEVA COLECCIÓN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group">
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Image
                  src={`/collection-product-${item}.jpg`}
                  alt={`Producto ${item}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-medium tracking-wider mb-1 transition-colors duration-300 group-hover:text-primary-800">
                NUEVO PRODUCTO {item}
              </h3>
              <p className="text-sm text-primary-600">PRÓXIMAMENTE</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link
            href="/tienda"
            className="inline-block border border-primary-800 px-8 py-3 text-sm tracking-wider transition-colors duration-300 hover:bg-primary-800 hover:text-white"
          >
            VER TIENDA
          </Link>
        </div>
      </div>
    </div>
  )
} 