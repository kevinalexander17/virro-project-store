import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Virro Project - Moda Urbana',
  description: 'Tienda de ropa urbana con los mejores polos, box-sizing y hoodies',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="announcement-bar bg-black text-white text-xs py-2 text-center">
          ENVÍO GRATIS: ESPAÑA PEDIDOS SUPERIORES A 100€ | INTERNACIONAL SUPERIORES A 200€
        </div>
        
        <header className="bg-white py-6 sticky top-0 z-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center">
              <div className="text-xl font-bold uppercase tracking-widest flex items-center">
                <Image 
                  src="/logo.png"
                  alt="Virro Project Logo"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                VIRRO PROJECT
              </div>
              
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-black hover:text-gray-600 text-sm uppercase tracking-wider">Inicio</a>
                <a href="/tienda" className="text-black hover:text-gray-600 text-sm uppercase tracking-wider">Tienda</a>
                <a href="/colecciones" className="text-black hover:text-gray-600 text-sm uppercase tracking-wider">Colecciones</a>
                <a href="/contacto" className="text-black hover:text-gray-600 text-sm uppercase tracking-wider">Contacto</a>
              </div>
              
              <div className="flex items-center space-x-4">
                <a href="#" className="text-black hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </a>
              </div>
            </nav>
            
            {/* Mobile Menu - Hidden by default */}
            <div className="md:hidden mt-4 border-t border-gray-100 pt-4 grid grid-cols-2 gap-2">
              <a href="/" className="text-black hover:text-gray-600 text-sm py-2">Inicio</a>
              <a href="/tienda" className="text-black hover:text-gray-600 text-sm py-2">Tienda</a>
              <a href="/colecciones" className="text-black hover:text-gray-600 text-sm py-2">Colecciones</a>
              <a href="/contacto" className="text-black hover:text-gray-600 text-sm py-2">Contacto</a>
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-white text-black py-16 border-t border-gray-200 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-10">
              <Image 
                src="/logo.png"
                alt="Virro Project Logo"
                width={50}
                height={50}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold mb-4">Comprar</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm hover:underline">Novedades</a></li>
                  <li><a href="#" className="text-sm hover:underline">Hoodies</a></li>
                  <li><a href="#" className="text-sm hover:underline">Camisetas</a></li>
                  <li><a href="#" className="text-sm hover:underline">Pantalones</a></li>
                  <li><a href="#" className="text-sm hover:underline">Accesorios</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold mb-4">Colecciones</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm hover:underline">Essentials</a></li>
                  <li><a href="#" className="text-sm hover:underline">Urbano</a></li>
                  <li><a href="#" className="text-sm hover:underline">Colaboraciones</a></li>
                  <li><a href="#" className="text-sm hover:underline">Edición Limitada</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold mb-4">Marca</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm hover:underline">Sobre Nosotros</a></li>
                  <li><a href="#" className="text-sm hover:underline">Tiendas</a></li>
                  <li><a href="#" className="text-sm hover:underline">Sostenibilidad</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold mb-4">Ayuda</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm hover:underline">Contacto</a></li>
                  <li><a href="#" className="text-sm hover:underline">Envíos y Devoluciones</a></li>
                  <li><a href="#" className="text-sm hover:underline">FAQ</a></li>
                  <li><a href="#" className="text-sm hover:underline">Términos y Condiciones</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-gray-500 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Virro Project. Todos los derechos reservados.
              </p>
              
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-black">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 