import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio headline and section anchors', () => {
  render(<App />);

  expect(screen.getByText(/MFin Candidate @ MIT/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /About Me/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Projects/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Courses/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Worked At/i })).toBeInTheDocument();
});
