'use client';

import Todo from '../components/Todo';

export default function TodoPageAlt() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Mis Tareas (Alternativo)</h1>
        <Todo />
      </div>
    </main>
  );
} 