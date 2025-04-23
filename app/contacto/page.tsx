export default function Contacto() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">CONTACTO</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Contáctanos con cualquier consulta o pregunta.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Escríbenos</h2>
          
          <form>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-sm font-medium mb-1">Nombre</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                className="w-full border border-gray-300 p-2"
                placeholder="Tu nombre"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full border border-gray-300 p-2"
                placeholder="tu@email.com"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="mensaje" className="block text-sm font-medium mb-1">Mensaje</label>
              <textarea 
                id="mensaje" 
                name="mensaje" 
                rows={5} 
                className="w-full border border-gray-300 p-2"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>
            
            <button type="submit" className="bg-black text-white py-2 px-6">
              Enviar mensaje
            </button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Dirección</h3>
              <p className="text-gray-600">
                Av. La Marina 123<br />
                San Miguel, Lima<br />
                Perú
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@virro.com" className="text-blue-600 hover:underline">
                  info@virro.com
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Teléfono</h3>
              <p className="text-gray-600">
                <a href="tel:+51123456789" className="text-blue-600 hover:underline">
                  +51 123 456 789
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Horario de atención</h3>
              <p className="text-gray-600">
                Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                Sábados: 10:00 AM - 2:00 PM<br />
                Domingos: Cerrado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 