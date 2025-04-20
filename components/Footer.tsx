'use client'

import Link from 'next/link'
import { FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary-200">
      <div className="max-w-[1600px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Brand</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-sm text-primary-600 hover:text-primary-800">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/tiendas" className="text-sm text-primary-600 hover:text-primary-800">
                  Tiendas
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-primary-600 hover:text-primary-800">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/envios" className="text-sm text-primary-600 hover:text-primary-800">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="text-sm text-primary-600 hover:text-primary-800">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-primary-600 hover:text-primary-800">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacidad" className="text-sm text-primary-600 hover:text-primary-800">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-sm text-primary-600 hover:text-primary-800">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/virroproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-800"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://tiktok.com/@virroproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-800"
                >
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-600">
              © {new Date().getFullYear()} VirroProject. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button className="text-sm text-primary-600 hover:text-primary-800">
                ES | PEN S/
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 