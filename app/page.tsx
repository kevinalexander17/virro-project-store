import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="VirroProject Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            VirroProject
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Moda urbana con estilo único
          </p>
          <Link href="/tienda" className="btn-primary">
            Ver Colección
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-80">
              <Image
                src="/product-1.jpg"
                alt="Polo VirroProject"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Polo Classic</h3>
              <p className="text-gray-600 mb-4">S/. 89.90</p>
              <button className="btn-primary w-full">
                Añadir al Carrito
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-80">
              <Image
                src="/product-2.jpg"
                alt="Hoodie VirroProject"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Hoodie Premium</h3>
              <p className="text-gray-600 mb-4">S/. 149.90</p>
              <button className="btn-primary w-full">
                Añadir al Carrito
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-80">
              <Image
                src="/product-3.jpg"
                alt="Box-sizing VirroProject"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Box-sizing Elite</h3>
              <p className="text-gray-600 mb-4">S/. 129.90</p>
              <button className="btn-primary w-full">
                Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 