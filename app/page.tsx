'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[90vh] w-full">
        <Image
          src="/hero-bg.jpg"
          alt="VirroProject Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl text-white font-serif tracking-widest mb-8">VIRRO PROJECT</h1>
            <Link href="/tienda" className="inline-block border border-white text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
              VER COLECCIÓN
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-xs tracking-widest uppercase text-center mb-12">CATEGORÍAS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Boxy-fit Polos */}
          <Link href="/tienda?category=boxy-fit-polos" className="group">
            <div className="relative aspect-square mb-4 overflow-hidden">
              <Image
                src="/category-1.jpg"
                alt="Boxy-fit Polos"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xs tracking-widest uppercase mb-1">BOXY-FIT POLOS</h2>
              <p className="text-xs tracking-widest text-gray-500">VER COLECCIÓN</p>
            </div>
          </Link>

          {/* Boxy-fit Shirts */}
          <Link href="/tienda?category=boxy-fit-shirts" className="group">
            <div className="relative aspect-square mb-4 overflow-hidden">
              <Image
                src="/category-2.jpg"
                alt="Boxy-fit Shirts"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xs tracking-widest uppercase mb-1">BOXY-FIT SHIRTS</h2>
              <p className="text-xs tracking-widest text-gray-500">VER COLECCIÓN</p>
            </div>
          </Link>

          {/* Zip Hoodies */}
          <Link href="/tienda?category=zip-hoodies" className="group">
            <div className="relative aspect-square mb-4 overflow-hidden">
              <Image
                src="/category-3.jpg"
                alt="Zip Hoodies"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xs tracking-widest uppercase mb-1">ZIP HOODIES</h2>
              <p className="text-xs tracking-widest text-gray-500">VER COLECCIÓN</p>
            </div>
          </Link>
        </div>
      </div>

      {/* New Drop */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[90vh]">
          <Image
            src="/collection-1.jpg"
            alt="New Drop Collection 1"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl text-white font-serif tracking-widest mb-8">NEW DROP</h2>
              <Link href="/colecciones" className="inline-block border border-white text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                DESCUBRIR
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-[90vh]">
          <Image
            src="/collection-2.jpg"
            alt="New Drop Collection 2"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
} 