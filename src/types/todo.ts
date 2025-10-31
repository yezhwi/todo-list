export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}

export type TodoPriority = 'low' | 'medium' | 'high';

export interface TodoFormValues {
  title: string;
  description?: string;
  priority: TodoPriority;
}
