'use client';

import TodoLocal from './component';
import { motion } from 'framer-motion';

export default function TodoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Superior */}
      <div className="w-full py-4 bg-black text-white text-center">
        <p className="text-xs tracking-widest uppercase">
          Envío gratuito a todo Perú en pedidos superiores a S/150
        </p>
      </div>
      
      {/* Contenido Principal */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-light uppercase tracking-widest mb-4">Mis Tareas</h1>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Organiza tus pendientes con nuestra herramienta exclusiva inspirada en la simplicidad y elegancia del diseño peruano contemporáneo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 hover-translate">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-black">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-2">Crear</h3>
              <p className="text-xs text-gray-500">Añade tus tareas diarias con estilo</p>
            </div>
            
            <div className="text-center p-6 hover-translate">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-black">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-2">Organizar</h3>
              <p className="text-xs text-gray-500">Clasifica tus pendientes con facilidad</p>
            </div>
            
            <div className="text-center p-6 hover-translate">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-black">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-2">Completar</h3>
              <p className="text-xs text-gray-500">Marca tus logros y avanza</p>
            </div>
          </div>
          
          <TodoLocal />
          
          <div className="mt-16 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              © {new Date().getFullYear()} Virro Project
            </p>
            <p className="text-xs text-gray-400">Inspirado en la cultura peruana • Hecho con ♥ en Lima</p>
          </div>
        </div>
      </motion.main>
    </div>
  );
} 