'use client'

import Link from 'next/link'
import { FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-primary-50">
      <div className="max-w-[1000px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-light uppercase tracking-widest mb-6">BRAND</h3>
            <p className="text-xs text-primary-600 leading-relaxed">
              VirroProject es una marca de moda urbana que fusiona estilo y comodidad en cada diseño.
            </p>
          </div>

          {/* Help */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-light uppercase tracking-widest mb-6">HELP</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contacto" className="text-xs text-primary-600 hover:text-primary-800 transition-colors duration-300">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-xs text-primary-600 hover:text-primary-800 transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/envios" className="text-xs text-primary-600 hover:text-primary-800 transition-colors duration-300">
                  Envíos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-light uppercase tracking-widest mb-6">LEGAL</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terminos" className="text-xs text-primary-600 hover:text-primary-800 transition-colors duration-300">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-xs text-primary-600 hover:text-primary-800 transition-colors duration-300">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-light uppercase tracking-widest mb-6">SOCIAL</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.instagram.com/virroproject/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 transition-colors duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 transition-colors duration-300"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-primary-50">
          <div className="flex flex-col items-center">
            <p className="text-xs text-primary-600 tracking-wider">
              © {new Date().getFullYear()} VirroProject. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 