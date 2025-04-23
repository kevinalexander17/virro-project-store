import Image from 'next/image';
import Link from 'next/link';

export default function Tienda() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/shop-hero.jpg"
            alt="Tienda"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <h1 className="relative z-10 text-4xl md:text-6xl text-white font-light tracking-widest uppercase">Tienda</h1>
      </section>

      {/* Collections Navigation */}
      <div className="py-8 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="uppercase tracking-wide hover:text-gray-500">Todo</a>
            <a href="#" className="uppercase tracking-wide hover:text-gray-500">Novedades</a>
            <a href="#" className="uppercase tracking-wide hover:text-gray-500">Hoodies</a>
            <a href="#" className="uppercase tracking-wide hover:text-gray-500">Camisetas</a>
            <a href="#" className="uppercase tracking-wide hover:text-gray-500">Pantalones</a>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 pr-8">
            <div className="sticky top-32">
              <h2 className="text-sm uppercase tracking-wider font-medium mb-6">Filtros</h2>
              
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider font-medium mb-4">Categorías</h3>
                <div className="space-y-2">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" />
                    <span>Boxy-fit shirts</span>
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" />
                    <span>Zip Hoodies</span>
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" />
                    <span>Boxy-fit polos</span>
                  </label>
                </div>
              </div>
              
              {/* Sizes */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-medium mb-4">Tallas</h3>
                <div className="grid grid-cols-3 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 py-1 hover:bg-black hover:text-white transition-colors text-xs"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              {[1, 2, 3, 4, 5, 6].map((product) => (
                <Link href={`/producto/${product}`} key={product} className="group cursor-pointer">
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 