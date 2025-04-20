'use client'

import Image from 'next/image'

export default function Contacto() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/contact-hero.jpg"
          alt="Contacto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-serif tracking-widest">CONTACTO</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-xs tracking-widest uppercase mb-4">ENVÍANOS UN MENSAJE</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest uppercase mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-widest uppercase mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase mb-1">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-gray-800 transition-colors"
              >
                ENVIAR
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xs tracking-widest uppercase mb-4">INFORMACIÓN DE CONTACTO</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-2">Email</h3>
                <p className="text-sm text-gray-600">info@virroproject.com</p>
              </div>
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-2">Teléfono</h3>
                <p className="text-sm text-gray-600">+51 999 999 999</p>
              </div>
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-2">Dirección</h3>
                <p className="text-sm text-gray-600">
                  Av. Principal 123<br />
                  Lima, Perú
                </p>
              </div>
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-2">Horario de Atención</h3>
                <p className="text-sm text-gray-600">
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábados: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 