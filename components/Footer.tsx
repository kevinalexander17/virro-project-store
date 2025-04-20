'use client'

import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VirroProject</h3>
            <p className="text-gray-400">
              Moda urbana con estilo único. Diseñamos prendas que reflejan tu personalidad.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tienda" className="text-gray-400 hover:text-white">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/colecciones" className="text-gray-400 hover:text-white">
                  Colecciones
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@virroproject.com</li>
              <li>Teléfono: +51 999 999 999</li>
              <li>Dirección: Lima, Perú</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/virroproject"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/virroproject"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/virroproject"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VirroProject. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 