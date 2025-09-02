import React from 'react';

// Mock cart items (replace with real data or props/context)
const cartItems = [
    { id: 1, name: 'Product A', price: 120, quantity: 4 },
    { id: 2, name: 'Product B', price: 80, quantity: 1 },
];

const Cart = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div style={{ maxWidth: 600, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee' }}>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24 }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', padding: 8 }}>Product</th>
                            <th style={{ textAlign: 'center', padding: 8 }}>Quantity</th>
                            <th style={{ textAlign: 'right', padding: 8 }}>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td style={{ padding: 8 }}>{item.name}</td>
                                <td style={{ textAlign: 'center', padding: 8 }}>{item.quantity}</td>
                                <td style={{ textAlign: 'right', padding: 8 }}>${item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 18 }}>
                Total: ${total}
            </div>
            <button
                style={{
                    marginTop: 24,
                    padding: '10px 24px',
                    background: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontSize: 16,
                }}
                disabled={cartItems.length === 0}
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default Cart;