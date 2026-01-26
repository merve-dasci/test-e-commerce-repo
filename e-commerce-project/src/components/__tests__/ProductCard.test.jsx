import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '../../test/test-utils';
import ProductCard from '../ProductCard';

describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    name: 'Test Product',
    description: 'This is a test product description',
    price: 99.99,
    rating: 4.5,
    sell_count: 150,
    images: [{ url: '/test-image.jpg' }],
  };

  const mockProductUrl = '/shop/kadin/tshirt/1/test-product/1';

  it('renders product name correctly', () => {
    renderWithProviders(
      <ProductCard product={mockProduct} productUrl={mockProductUrl} />
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('renders product price correctly', () => {
    renderWithProviders(
      <ProductCard product={mockProduct} productUrl={mockProductUrl} />
    );

    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('renders product description', () => {
    renderWithProviders(
      <ProductCard product={mockProduct} productUrl={mockProductUrl} />
    );

    expect(screen.getByText('This is a test product description')).toBeInTheDocument();
  });

  it('renders product rating', () => {
    renderWithProviders(
      <ProductCard product={mockProduct} productUrl={mockProductUrl} />
    );

    expect(screen.getByText('4.5')).toBeInTheDocument();
  });

  it('renders as a link with correct URL', () => {
    renderWithProviders(
      <ProductCard product={mockProduct} productUrl={mockProductUrl} />
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockProductUrl);
  });

  it('renders product image with correct alt text', () => {
    renderWithProviders(
      <ProductCard product={mockProduct} productUrl={mockProductUrl} />
    );

    const image = screen.getByAltText('Test Product');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });

  it('uses placeholder image when no images provided', () => {
    const productWithoutImage = { ...mockProduct, images: [] };
    
    renderWithProviders(
      <ProductCard product={productWithoutImage} productUrl={mockProductUrl} />
    );

    const image = screen.getByAltText('Test Product');
    expect(image).toHaveAttribute('src', '/images/placeholder.jpg');
  });

  // Legacy format test (for HomePage compatibility)
  it('renders legacy format with old props', () => {
    renderWithProviders(
      <ProductCard 
        id={1}
        title="Legacy Product"
        department="Electronics"
        originalPrice="129.99"
        salePrice="99.99"
        image="/legacy-image.jpg"
        colors={['#ff0000', '#00ff00']}
      />
    );

    expect(screen.getByText('Legacy Product')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('$129.99')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });
});
