'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background border-b border-primary-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="VirroProject"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link font-brand">
              Inicio
            </Link>
            <Link href="/tienda" className="nav-link font-brand">
              Tienda
            </Link>
            <Link href="/colecciones" className="nav-link font-brand">
              Colecciones
            </Link>
            <Link href="/nosotros" className="nav-link font-brand">
              Nosotros
            </Link>
            <Link href="/contacto" className="nav-link font-brand">
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-primary-50"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-primary-500" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-primary-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } border-t border-primary-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
          <Link
            href="/"
            className="block px-3 py-2 text-base font-brand text-primary-800 hover:text-primary-500 hover:bg-primary-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/tienda"
            className="block px-3 py-2 text-base font-brand text-primary-800 hover:text-primary-500 hover:bg-primary-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Tienda
          </Link>
          <Link
            href="/colecciones"
            className="block px-3 py-2 text-base font-brand text-primary-800 hover:text-primary-500 hover:bg-primary-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Colecciones
          </Link>
          <Link
            href="/nosotros"
            className="block px-3 py-2 text-base font-brand text-primary-800 hover:text-primary-500 hover:bg-primary-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="block px-3 py-2 text-base font-brand text-primary-800 hover:text-primary-500 hover:bg-primary-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
} 