import { render, screen, fireEvent } from '@testing-library/react';
import { TodoForm } from './TodoForm';

vi.mock('react-hook-form', () => ({
  useForm: () => ({
    register: (name: string) => ({ name }),
    handleSubmit: (fn: Function) => fn,
    formState: { errors: {} },
  }),
}));

describe('TodoForm', () => {
  it('renders form with all fields', () => {
    render(<TodoForm onSubmit={() => {}} />);
    
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Priority/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Todo/i)).toBeInTheDocument();
  });

  it('calls onSubmit when form is submitted', () => {
    const mockOnSubmit = vi.fn();
    render(<TodoForm onSubmit={mockOnSubmit} />);
    
    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Todo' } });
    fireEvent.click(screen.getByText(/Add Todo/i));
    
    expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({
      title: 'Test Todo',
      priority: 'medium',
    }));
  });

  it('calls onCancel when cancel button is clicked', () => {
    const mockOnCancel = vi.fn();
    render(<TodoForm onSubmit={() => {}} onCancel={mockOnCancel} />);
    
    fireEvent.click(screen.getByText(/Cancel/i));
    
    expect(mockOnCancel).toHaveBeenCalled();
  });
});
