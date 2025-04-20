'use client'

import Image from 'next/image'

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/about-hero.jpg"
          alt="Nosotros"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-serif tracking-widest">NOSOTROS</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xs tracking-widest uppercase mb-4">NUESTRA HISTORIA</h2>
            <p className="text-sm text-gray-600 mb-6">
              Virro Project nace de la pasión por crear prendas que combinen estilo, comodidad y calidad. 
              Nuestro objetivo es ofrecer piezas únicas que reflejen la esencia de la moda contemporánea.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Cada prenda está diseñada pensando en la versatilidad y el confort, utilizando materiales 
              de alta calidad y procesos de producción responsables.
            </p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest uppercase mb-4">NUESTROS VALORES</h2>
            <ul className="space-y-4">
              <li className="text-sm text-gray-600">
                <span className="font-medium">Calidad:</span> Nos comprometemos a ofrecer productos de la más alta calidad.
              </li>
              <li className="text-sm text-gray-600">
                <span className="font-medium">Diseño:</span> Creemos en el poder del diseño para transformar lo cotidiano en extraordinario.
              </li>
              <li className="text-sm text-gray-600">
                <span className="font-medium">Sostenibilidad:</span> Buscamos minimizar nuestro impacto ambiental en cada paso del proceso.
              </li>
              <li className="text-sm text-gray-600">
                <span className="font-medium">Innovación:</span> Constantemente exploramos nuevas técnicas y materiales para mejorar nuestros productos.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 