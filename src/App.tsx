import { TodoProvider } from './contexts/TodoContext';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <TodoProvider>
        <TodoPage />
      </TodoProvider>
    </div>
  );
}

export default App;
