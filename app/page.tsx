'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero-bg.jpg"
            alt="VirroProject Collection"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={100}
            unoptimized
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6">NUEVA COLECCIÓN</h1>
            <Link 
              href="/tienda"
              className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
            >
              DESCUBRIR
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/colecciones/most-wanted" className="group">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/collection-1.jpg"
                  alt="Most Wanted Collection"
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-2xl font-light tracking-wider text-white">MOST WANTED</h2>
                </div>
              </div>
            </Link>
            <Link href="/colecciones/origins" className="group">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/collection-2.jpg"
                  alt="Origins Collection"
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-2xl font-light tracking-wider text-white">ORIGINS</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1600px] mx-auto px-4">
          <h2 className="text-2xl font-light tracking-wider mb-12 text-center">CATEGORÍAS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/tienda?category=camisas" className="group">
              <div className="relative aspect-square">
                <Image
                  src="/category-1.jpg"
                  alt="Camisas Boxy-fit"
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <span className="text-lg text-white tracking-wider">CAMISAS BOXY-FIT</span>
                </div>
              </div>
            </Link>
            <Link href="/tienda?category=hoodies" className="group">
              <div className="relative aspect-square">
                <Image
                  src="/category-2.jpg"
                  alt="Zip Hoodies"
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <span className="text-lg text-white tracking-wider">ZIP HOODIES</span>
                </div>
              </div>
            </Link>
            <Link href="/tienda?category=polos" className="group">
              <div className="relative aspect-square">
                <Image
                  src="/category-3.jpg"
                  alt="Polos Boxy-fit"
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <span className="text-lg text-white tracking-wider">POLOS BOXY-FIT</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 