import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { renderWithProviders, screen } from '../../test/test-utils';
import ErrorBoundary from '../ErrorBoundary';

// Component that throws an error
const ThrowError = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('ErrorBoundary Component', () => {
  // Suppress console.error for these tests
  const originalError = console.error;
  beforeAll(() => {
    console.error = () => {};
  });
  afterAll(() => {
    console.error = originalError;
  });

  it('renders children when there is no error', () => {
    renderWithProviders(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders error UI when child throws', () => {
    renderWithProviders(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Bir Şeyler Ters Gitti')).toBeInTheDocument();
    expect(screen.getByText('Ana Sayfa')).toBeInTheDocument();
  });

  it('shows refresh button in error state', () => {
    renderWithProviders(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Sayfayı Yenile')).toBeInTheDocument();
  });
});
