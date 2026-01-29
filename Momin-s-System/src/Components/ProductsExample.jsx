import React, { useState, useEffect } from 'react';
import { productAPI } from '../services/api';
import { useCart } from '../Context/CartContext';

export default function ProductsExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addItem } = useCart();

    setLoading(true);
    setError(null);
    try {
      const data = await productAPI.getAll();
      setProducts(data.products || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    addItem(product, 1);
    alert(`${product.name} added to cart!`);
  };

  if (loading) return <div style={{ padding: '20px' }}>Loading products...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products from Backend</h2>
      <button onClick={fetchProducts} style={{ padding: '10px 20px', marginBottom: '20px' }}>
        Refresh Products
      </button>

      {products.length === 0 ? (
        <p>No products available. Add some from the admin panel.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: '1px solid #ddd',
                padding: '15px',
                borderRadius: '5px',
              }}
            >
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p style={{ fontWeight: 'bold' }}>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <p>Category: {product.category}</p>
              <button
                onClick={() => handleAddToCart(product)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
