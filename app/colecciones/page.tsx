import Image from 'next/image';

export default function Colecciones() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/collections-hero.jpg"
            alt="Colecciones"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <h1 className="relative z-10 text-4xl md:text-6xl text-white font-light tracking-widest uppercase">Colecciones</h1>
      </section>

      {/* Collection Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Essential Collection */}
          <div className="cursor-pointer group">
            <div className="relative aspect-square overflow-hidden">
              <Image 
                src="/essentials.jpg"
                alt="Essentials Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-xl uppercase tracking-wider">Essentials</h2>
              <p className="mt-2 text-gray-600 text-sm">Prendas básicas con estilo minimalista</p>
              <a href="#" className="inline-block mt-4 border-b border-black pb-1 text-sm uppercase tracking-wider">
                Ver colección
              </a>
            </div>
          </div>

          {/* Urban Collection */}
          <div className="cursor-pointer group">
            <div className="relative aspect-square overflow-hidden">
              <Image 
                src="/collection-1.jpg"
                alt="Urban Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-xl uppercase tracking-wider">Urban</h2>
              <p className="mt-2 text-gray-600 text-sm">Estilo urbano con actitud</p>
              <a href="#" className="inline-block mt-4 border-b border-black pb-1 text-sm uppercase tracking-wider">
                Ver colección
              </a>
            </div>
          </div>
        </div>

        {/* New Drop Section */}
        <div className="mt-24">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image 
              src="/new-drop.jpg"
              alt="New Drop Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h2 className="text-3xl md:text-5xl uppercase tracking-widest font-light mb-4">New Drop FW24</h2>
                <p className="text-lg mb-6 max-w-xl mx-auto">
                  Descubre nuestra última colección de temporada
                </p>
                <a href="#" className="inline-block bg-white text-black px-8 py-3 uppercase text-sm tracking-widest hover:bg-gray-100 transition-colors">
                  Ver ahora
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Collaborations */}
        <div className="mt-24">
          <h2 className="text-2xl font-light text-center mb-12 uppercase tracking-wider">Colaboraciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cursor-pointer group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src="/collection-2.jpg"
                  alt="Collaboration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
              <div className="mt-6 text-center">
                <h2 className="text-xl uppercase tracking-wider">Virro × Brand</h2>
                <p className="mt-2 text-gray-600 text-sm">Una colaboración exclusiva</p>
                <a href="#" className="inline-block mt-4 border-b border-black pb-1 text-sm uppercase tracking-wider">
                  Explorar
                </a>
              </div>
            </div>
            <div className="cursor-pointer group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src="/collection-1.jpg"
                  alt="Collaboration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
              <div className="mt-6 text-center">
                <h2 className="text-xl uppercase tracking-wider">Virro × Artist</h2>
                <p className="mt-2 text-gray-600 text-sm">Arte urbano en cada prenda</p>
                <a href="#" className="inline-block mt-4 border-b border-black pb-1 text-sm uppercase tracking-wider">
                  Explorar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 