'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src="/contact-hero.jpg"
          alt="Contacto VirroProject"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-4xl md:text-6xl font-light text-white">Contacto</h1>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Información de Contacto */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-light mb-6">Información</h2>
              <div className="space-y-4">
                <p className="text-primary-600">
                  Lima, Perú
                </p>
                <p className="text-primary-600">info@virroproject.com</p>
                <p className="text-primary-600">+51 987729352</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-6">Horario</h2>
              <div className="space-y-2">
                <p className="text-primary-600">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-primary-600">Sábado: 10:00 - 14:00</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-6">Redes Sociales</h2>
              <div className="flex space-x-4">
                <a href="https://instagram.com/virroproject" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
                  Instagram
                </a>
                <a href="https://tiktok.com/@virroproject" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div>
            <h2 className="text-2xl font-light mb-8">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="w-full border-b border-primary-200 px-4 py-2 focus:outline-none focus:border-primary-800"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border-b border-primary-200 px-4 py-2 focus:outline-none focus:border-primary-800"
                  required
                />
              </div>

              <div>
                <select
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="w-full border-b border-primary-200 px-4 py-2 focus:outline-none focus:border-primary-800"
                  required
                >
                  <option value="">Asunto</option>
                  <option value="pedido">Consulta sobre pedido</option>
                  <option value="camisas">Camisas Boxy-fit</option>
                  <option value="hoodies">Zip Hoodies</option>
                  <option value="polos">Polos Boxy-fit</option>
                  <option value="devolución">Devolución</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full border-b border-primary-200 px-4 py-2 focus:outline-none focus:border-primary-800"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full border border-primary-800 px-6 py-3 hover:bg-primary-800 hover:text-white transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 