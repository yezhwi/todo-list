import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

interface AddTodoButtonProps {
  onClick: () => void;
}

const AddTodoButton = React.forwardRef<HTMLButtonElement, AddTodoButtonProps>(({ onClick }, ref) => {
  return (
    <Button ref={ref} onClick={onClick} className="gap-2">
      <Plus className="h-4 w-4" />
      Add New Todo
    </Button>
  );
});

export { AddTodoButton };
