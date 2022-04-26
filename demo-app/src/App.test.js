import { render, screen } from '@testing-library/react';
import {App} from './App';
//import MyH from './H1';

test('renders h1 tag', () => {
  render(<App />);
  const h1 = screen.getByText(/hello react app.../i);
  expect(h1).toBeInTheDocument();
});
