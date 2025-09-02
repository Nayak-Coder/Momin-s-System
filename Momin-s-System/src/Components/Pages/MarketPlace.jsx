import React from 'react';

// Mock product data
const products = [
    {
        id: 1,
        name: 'Product A',
        price: 120,
        image: 'https://via.placeholder.com/120',
    },
    {
        id: 2,
        name: 'Product B',
        price: 80,
        image: 'https://via.placeholder.com/120',
    },
    {
        id: 3,
        name: 'Product C',
        price: 150,
        image: 'https://via.placeholder.com/120',
    },
];

const MarketPlace = () => {
    return (
        <div style={{ maxWidth: 900, margin: '40px auto', padding: 24 }}>
            <h2 style={{ marginBottom: 32 }}>Market Place</h2>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                {products.map(product => (
                    <div
                        key={product.id}
                        style={{
                            background: '#fff',
                            borderRadius: 8,
                            boxShadow: '0 2px 8px #eee',
                            padding: 16,
                            width: 220,
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }}
                        />
                        <h3 style={{ fontSize: 18, margin: '12px 0 8px' }}>{product.name}</h3>
                        <div style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 12 }}>${product.price}</div>
                        <button
                            style={{
                                padding: '8px 18px',
                                background: '#007bff',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 4,
                                cursor: 'pointer',
                                fontSize: 15,
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarketPlace;