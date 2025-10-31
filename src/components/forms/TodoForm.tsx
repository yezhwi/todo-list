import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TodoFormValues } from '@/types/todo';

const todoSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  description: z.string().max(500, 'Description must be less than 500 characters').optional(),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
});

type TodoFormSchema = z.infer<typeof todoSchema>;

interface TodoFormProps {
  onSubmit: (data: TodoFormValues) => void;
  onCancel?: () => void;
  defaultValues?: Partial<TodoFormValues>;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, onCancel, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormSchema>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      priority: 'medium',
      ...defaultValues,
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          placeholder="Enter todo title"
          {...register('title')}
          className={errors.title ? 'border-destructive' : ''}
        />
        {errors.title && (
          <p className="text-sm text-destructive">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Enter todo description (optional)"
          {...register('description')}
          className={errors.description ? 'border-destructive' : ''}
        />
        {errors.description && (
          <p className="text-sm text-destructive">{errors.description.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="priority">Priority</Label>
        <Select {...register('priority')}>
          <SelectTrigger>
            <SelectValue placeholder="Select priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit">
          {defaultValues ? 'Update Todo' : 'Add Todo'}
        </Button>
      </div>
    </form>
  );
};
