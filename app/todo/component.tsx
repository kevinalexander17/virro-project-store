'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  timestamp: number;
}

export default function TodoLocal() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Guardar en localStorage cuando cambian los todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...todos, 
        { 
          id: Date.now(), 
          text: inputValue, 
          completed: false,
          timestamp: Date.now()
        }
      ]);
      setInputValue('');
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const pendingCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6 border border-gray-100 fade-in">
      <h2 className="text-2xl font-light mb-6 text-center tracking-wider uppercase">colección de tareas</h2>
      
      <div className="mb-6">
        <div className="flex flex-col">
          <input
            type="text"
            className="px-4 py-3 border-b border-gray-200 focus:outline-none focus:border-black bg-transparent text-sm"
            placeholder="NUEVA TAREA"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
          />
          <button 
            onClick={handleAddTodo}
            className="mt-4 py-3 px-4 border border-black text-black text-xs tracking-widest uppercase font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Añadir a la colección
          </button>
        </div>
      </div>

      <div className="flex space-x-2 mb-4 border-b pb-3">
        <button 
          onClick={() => setFilter('all')}
          className={`text-xs uppercase tracking-wider px-3 py-1 ${filter === 'all' ? 'font-medium' : 'text-gray-500'}`}
        >
          Todo
        </button>
        <button 
          onClick={() => setFilter('active')}
          className={`text-xs uppercase tracking-wider px-3 py-1 ${filter === 'active' ? 'font-medium' : 'text-gray-500'}`}
        >
          Activo
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={`text-xs uppercase tracking-wider px-3 py-1 ${filter === 'completed' ? 'font-medium' : 'text-gray-500'}`}
        >
          Completado
        </button>
      </div>

      <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
        {pendingCount === 0 
          ? 'TODAS LAS TAREAS COMPLETADAS' 
          : `${pendingCount} TAREA${pendingCount !== 1 ? 'S' : ''} PENDIENTE${pendingCount !== 1 ? 'S' : ''}`}
      </p>

      <AnimatePresence>
        {filteredTodos.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="py-8 text-center text-gray-500 border border-dashed border-gray-200 rounded"
          >
            <p className="text-xs uppercase tracking-wider">Colección vacía</p>
          </motion.div>
        ) : (
          <ul className="space-y-1">
            {filteredTodos.map((todo) => (
              <motion.li 
                key={todo.id} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="py-3 flex items-center justify-between group border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center">
                  <div 
                    onClick={() => handleToggleTodo(todo.id)}
                    className={`relative w-5 h-5 border mr-3 cursor-pointer transition-all duration-200 flex items-center justify-center ${todo.completed ? 'border-black bg-black' : 'border-gray-300'}`}
                  >
                    {todo.completed && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <span className={`text-sm ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                      {todo.text}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(todo.timestamp).toLocaleDateString('es-PE', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="text-gray-400 hover:text-black transition-colors opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.li>
            ))}
          </ul>
        )}
      </AnimatePresence>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-xs text-center text-gray-500">
          DISEÑADO EN PERÚ • HECHO PARA EL MUNDO
        </p>
      </div>
    </div>
  );
} 