import { renderHook, act } from '@testing-library/react';
import { TodoProvider, useTodo } from './TodoContext';

describe('TodoContext', () => {
  it('provides initial state and methods', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TodoProvider>{children}</TodoProvider>
    );
    
    const { result } = renderHook(() => useTodo(), { wrapper });
    
    expect(result.current.todos).toEqual([]);
    expect(typeof result.current.addTodo).toBe('function');
    expect(typeof result.current.toggleTodoCompleted).toBe('function');
    expect(typeof result.current.deleteTodo).toBe('function');
    expect(typeof result.current.updateTodoPriority).toBe('function');
  });

  it('adds a new todo', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TodoProvider>{children}</TodoProvider>
    );
    
    const { result } = renderHook(() => useTodo(), { wrapper });
    
    act(() => {
      result.current.addTodo({ title: 'Test Todo', priority: 'medium' });
    });
    
    expect(result.current.todos.length).toBe(1);
    expect(result.current.todos[0].title).toBe('Test Todo');
    expect(result.current.todos[0].completed).toBe(false);
  });

  it('toggles todo completion status', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TodoProvider>{children}</TodoProvider>
    );
    
    const { result } = renderHook(() => useTodo(), { wrapper });
    
    act(() => {
      result.current.addTodo({ title: 'Test Todo', priority: 'medium' });
    });
    
    const todoId = result.current.todos[0].id;
    
    act(() => {
      result.current.toggleTodoCompleted(todoId);
    });
    
    expect(result.current.todos[0].completed).toBe(true);
  });

  it('deletes a todo', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TodoProvider>{children}</TodoProvider>
    );
    
    const { result } = renderHook(() => useTodo(), { wrapper });
    
    act(() => {
      result.current.addTodo({ title: 'Test Todo', priority: 'medium' });
    });
    
    const todoId = result.current.todos[0].id;
    expect(result.current.todos.length).toBe(1);
    
    act(() => {
      result.current.deleteTodo(todoId);
    });
    
    expect(result.current.todos.length).toBe(0);
  });

  it('updates todo priority', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TodoProvider>{children}</TodoProvider>
    );
    
    const { result } = renderHook(() => useTodo(), { wrapper });
    
    act(() => {
      result.current.addTodo({ title: 'Test Todo', priority: 'medium' });
    });
    
    const todoId = result.current.todos[0].id;
    
    act(() => {
      result.current.updateTodoPriority(todoId, 'high');
    });
    
    expect(result.current.todos[0].priority).toBe('high');
  });
});
