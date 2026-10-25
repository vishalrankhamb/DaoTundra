// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DaoTundra title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DaoTundra/i);
    expect(titleElement).toBeInTheDocument();
});
