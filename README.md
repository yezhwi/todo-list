# Todo List Application

A modern, feature-rich todo list application built with React 18, TypeScript, and ShadCN UI.

## Features

- 📝 **Create Todos**: Add new tasks with title, description, and priority
- ✅ **Mark as Complete**: Toggle todo completion status
- 🗑️ **Delete Todos**: Remove tasks you no longer need
- 📊 **Statistics Dashboard**: View counts of total, completed, pending, and high-priority todos
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI**: Beautiful interface built with ShadCN components
- 🔍 **Sortable Table**: Sort todos by title, priority, or creation date
- 🎯 **Priority Levels**: Set low, medium, or high priority for each todo

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **ShadCN UI** - Component library
- **TanStack React Table** - Data table management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **React Context API** - State management
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Vitest** - Testing framework

## Project Structure

```
todo-list/
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   └── TodoForm.tsx          # Todo form component
│   │   ├── todo/
│   │   │   ├── TodoList.tsx          # Todo list table
│   │   │   ├── AddTodoButton.tsx     # Add todo button
│   │   │   └── TodoStats.tsx         # Statistics cards
│   │   └── ui/
│   │       ├── button.tsx            # Button component
│   │       ├── card.tsx              # Card component
│   │       ├── checkbox.tsx          # Checkbox component
│   │       ├── dialog.tsx            # Dialog component
│   │       ├── input.tsx             # Input component
│   │       ├── label.tsx             # Label component
│   │       ├── select.tsx            # Select component
│   │       ├── table.tsx             # Table components
│   │       ├── textarea.tsx          # Textarea component
│   │       └── typography.tsx        # Typography components
│   ├── contexts/
│   │   └── TodoContext.tsx           # Todo state management
│   ├── lib/
│   │   └── utils.ts                  # Utility functions
│   ├── pages/
│   │   └── TodoPage.tsx              # Main todo page
│   ├── types/
│   │   └── todo.ts                   # TypeScript types
│   ├── App.tsx                       # Root component
│   ├── main.tsx                      # Application entry point
│   └── index.css                     # Global styles
├── index.html                        # HTML template
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript configuration
├── vite.config.ts                    # Vite configuration
├── tailwind.config.js                # Tailwind configuration
└── postcss.config.js                 # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Tests

```bash
npm test
```

### Lint Code

```bash
npm run lint
```

## Usage

### Adding a Todo

1. Click the "Add New Todo" button
2. Fill in the title, description (optional), and select a priority
3. Click "Add Todo" to save

### Managing Todos

- **Mark as complete**: Click on any todo row or use the checkbox
- **Delete**: Click the trash icon in the actions column
- **Sort**: Click on column headers to sort by that field
- **Select multiple**: Use the checkboxes to select multiple todos

### Viewing Statistics

The statistics dashboard at the top shows:
- Total number of todos
- Number of completed todos
- Number of pending todos
- Number of high-priority todos

## API

### TodoContext

The application uses React Context for state management. The `TodoContext` provides:

```typescript
interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: TodoFormValues) => void;
  toggleTodoCompleted: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodoPriority: (id: string, priority: Todo['priority']) => void;
}
```

### Types

```typescript
interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}

type TodoPriority = 'low' | 'medium' | 'high';

export interface TodoFormValues {
  title: string;
  description?: string;
  priority: TodoPriority;
}
```

## Customization

### Theme

The application uses Tailwind CSS with a custom theme. You can customize colors and other theme properties in `tailwind.config.js`.

### Components

All UI components are located in `src/components/ui/`. These are ShadCN-style components that can be customized or extended as needed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Acknowledgments

- Built with [ShadCN UI](https://ui.shadcn.com/)
- Inspired by modern admin dashboards
