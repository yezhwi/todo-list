import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Todo } from '@/types/todo';
import { CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

interface TodoStatsProps {
  todos: Todo[];
}

export const TodoStats: React.FC<TodoStatsProps> = ({ todos }) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;
  const highPriorityTodos = todos.filter((todo) => todo.priority === 'high').length;

  const stats = [
    {
      title: 'Total Todos',
      value: totalTodos,
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      color: 'bg-blue-100',
    },
    {
      title: 'Completed',
      value: completedTodos,
      icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
      color: 'bg-green-100',
    },
    {
      title: 'Pending',
      value: pendingTodos,
      icon: <Clock className="h-6 w-6 text-yellow-500" />,
      color: 'bg-yellow-100',
    },
    {
      title: 'High Priority',
      value: highPriorityTodos,
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      color: 'bg-red-100',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.title.toLowerCase()} tasks
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
