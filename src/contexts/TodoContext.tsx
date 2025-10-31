import React, { createContext, useContext, useState, useCallback } from 'react';
import { Todo, TodoFormValues } from '@/types/todo';

interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: TodoFormValues) => void;
  toggleTodoCompleted: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodoPriority: (id: string, priority: Todo['priority']) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((todoData: TodoFormValues) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      ...todoData,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const toggleTodoCompleted = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const updateTodoPriority = useCallback((id: string, priority: Todo['priority']) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, priority, updatedAt: new Date() } : todo
      )
    );
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
        updateTodoPriority,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};
