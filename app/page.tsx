import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-light mb-6 tracking-widest uppercase">
            Nueva Colección
          </h1>
          <a href="/tienda" className="inline-block bg-white text-black px-8 py-3 uppercase text-sm tracking-widest hover:bg-gray-100 transition-colors">
            Comprar ahora
          </a>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-light text-center mb-12 uppercase tracking-wider">Categorías</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { id: 1, name: "Hoodies" }, 
            { id: 2, name: "Camisetas" }, 
            { id: 3, name: "Pantalones" }
          ].map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image 
                  src={`/category-${category.id}.jpg`}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
              <div className="py-5 px-2">
                <h3 className="text-lg uppercase tracking-wide text-center">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light text-center mb-12 uppercase tracking-wider">Destacados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {[1, 2, 3, 4].map((product) => (
              <div key={product} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <Image 
                    src={`/product-${product}.jpg`}
                    alt={`Producto ${product}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm uppercase tracking-wide mb-1">Producto {product}</h3>
                  <p className="text-gray-700">S/. 150.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 container mx-auto px-4 text-center max-w-xl">
        <h2 className="text-2xl font-light mb-6 uppercase tracking-wider">Únete al movimiento</h2>
        <p className="text-gray-600 mb-8">
          Suscríbete a nuestro newsletter y obtén un 10% de descuento en tu primera compra
        </p>
        <form className="flex">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="flex-grow px-4 py-3 border border-r-0 border-gray-300 focus:outline-none"
          />
          <button 
            type="submit" 
            className="bg-black text-white px-6 py-3 uppercase text-sm tracking-widest"
          >
            Unirse
          </button>
        </form>
      </section>
    </div>
  )
} 