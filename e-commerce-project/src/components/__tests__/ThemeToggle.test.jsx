import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle';
import { ThemeContext } from '../../context/ThemeContextValue';

// Helper to render with theme context
const renderWithTheme = (isDarkMode = false, toggleTheme = vi.fn()) => {
  return render(
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, setIsDarkMode: vi.fn() }}>
      <ThemeToggle />
    </ThemeContext.Provider>
  );
};

describe('ThemeToggle Component', () => {
  it('renders correctly', () => {
    renderWithTheme();
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('shows moon icon in light mode', () => {
    renderWithTheme(false);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Dark mode');
    expect(button).toHaveAttribute('title', 'Koyu temaya geç');
  });

  it('shows sun icon in dark mode', () => {
    renderWithTheme(true);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Light mode');
    expect(button).toHaveAttribute('title', 'Açık temaya geç');
  });

  it('calls toggleTheme when clicked', () => {
    const mockToggle = vi.fn();
    renderWithTheme(false, mockToggle);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it('has correct styling in light mode', () => {
    renderWithTheme(false);
    
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-gray-100');
  });

  it('has correct styling in dark mode', () => {
    renderWithTheme(true);
    
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-gray-700');
  });
});
