'use client'

import Image from 'next/image'

export default function Nosotros() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <Image
          src="/about-hero.jpg"
          alt="VirroProject Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-4xl md:text-6xl font-brand text-white">Nosotros</h1>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-brand mb-6">Nuestra Historia</h2>
              <p className="text-primary-600 mb-4">
                VirroProject nació de la pasión por crear prendas que combinen el estilo contemporáneo con la calidad artesanal. Desde nuestros inicios, nos hemos dedicado a diseñar colecciones que reflejen la individualidad y el espíritu urbano.
              </p>
              <p className="text-primary-600">
                Cada pieza está cuidadosamente elaborada con atención al detalle y compromiso con la sostenibilidad, creando prendas que perduran en el tiempo tanto por su calidad como por su diseño atemporal.
              </p>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/about-1.jpg"
                alt="VirroProject Historia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-background">
        <div className="max-w-[1600px] mx-auto px-4">
          <h2 className="text-3xl font-brand text-center mb-16">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-brand mb-4">Sostenibilidad</h3>
              <p className="text-primary-600">
                Comprometidos con el medio ambiente, utilizamos materiales sostenibles y procesos responsables en nuestra producción.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-brand mb-4">Calidad</h3>
              <p className="text-primary-600">
                Cada prenda es confeccionada con los más altos estándares de calidad, garantizando durabilidad y confort.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-brand mb-4">Innovación</h3>
              <p className="text-primary-600">
                Constantemente buscamos nuevas formas de mejorar nuestros diseños y procesos, manteniéndonos a la vanguardia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square">
              <Image
                src="/about-2.jpg"
                alt="VirroProject Proceso"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-brand mb-6">Nuestro Proceso</h2>
              <p className="text-primary-600 mb-4">
                Desde el diseño inicial hasta el producto final, cada paso de nuestro proceso está cuidadosamente considerado. Trabajamos con los mejores materiales y artesanos locales para crear prendas excepcionales.
              </p>
              <p className="text-primary-600">
                La atención al detalle y el compromiso con la excelencia son fundamentales en cada etapa de producción, asegurando que cada pieza cumpla con nuestros altos estándares de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 