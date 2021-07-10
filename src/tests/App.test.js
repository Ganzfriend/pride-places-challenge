import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App div', () => {
  const { container } = render(<App />);
  expect(container.firstChild.classList.contains('App')).toBe(true)
});
