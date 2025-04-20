'use client'

import Image from 'next/image'
import Link from 'next/link'

const collections = [
  {
    id: '1',
    name: 'NEW DROP',
    description: 'Nuestra última colección',
    image: '/new-drop.jpg',
    link: '/tienda?collection=new-drop'
  },
  {
    id: '2',
    name: 'ESSENTIALS',
    description: 'Piezas esenciales para tu guardarropa',
    image: '/essentials.jpg',
    link: '/tienda?collection=essentials'
  }
]

export default function Colecciones() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/collections-hero.jpg"
          alt="Colecciones"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-serif tracking-widest">COLECCIONES</h1>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link key={collection.id} href={collection.link} className="group">
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xs tracking-widest uppercase mb-1">{collection.name}</h2>
                <p className="text-xs tracking-widest text-gray-500">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 