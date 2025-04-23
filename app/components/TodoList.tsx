'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function TodoList() {
  return (
    <section className="py-12 border-b">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Gestiona tus tareas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Características principales</h3>
            <ul className="space-y-2 mb-4">
              <li>• Añade nuevas tareas a tu lista</li>
              <li>• Marca las tareas como completadas</li>
              <li>• Elimina tareas que ya no necesitas</li>
              <li>• Organiza tu día de manera eficiente</li>
            </ul>
            <Link href="/todo" 
              className="inline-flex items-center text-black font-medium hover:underline">
              Ir a mis tareas
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Beneficios</h3>
            <ul className="space-y-2 mb-4">
              <li>• Interfaz simple y fácil de usar</li>
              <li>• Mejora tu productividad diaria</li>
              <li>• Visualiza rápidamente tus pendientes</li>
              <li>• Disfruta de la satisfacción de completar tareas</li>
            </ul>
            <p className="text-gray-600 text-sm">
              Una herramienta simple pero poderosa para organizar tus actividades diarias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 