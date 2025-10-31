import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TodoList } from '@/components/todo/TodoList';
import { AddTodoButton } from '@/components/todo/AddTodoButton';
import { TodoForm } from '@/components/forms/TodoForm';
import { TodoStats } from '@/components/todo/TodoStats';
import { useTodo } from '@/contexts/TodoContext';
import { TodoFormValues } from '@/types/todo';
import { Heading } from '@/components/ui/typography';

const TodoPage: React.FC = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { todos, addTodo, toggleTodoCompleted, deleteTodo } = useTodo();

  const handleAddTodo = (data: TodoFormValues) => {
    addTodo(data);
    setIsAddDialogOpen(false);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Heading level={1}>Todo Management</Heading>
          <p className="text-muted-foreground mt-2">Organize and track your tasks efficiently</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <AddTodoButton onClick={() => setIsAddDialogOpen(true)} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Todo</DialogTitle>
            </DialogHeader>
            <TodoForm
              onSubmit={handleAddTodo}
              onCancel={() => setIsAddDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <TodoStats todos={todos} />

      <div className="mt-8">
        <TodoList
          todos={todos}
          onToggleCompleted={toggleTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
};

export default TodoPage;
