import React from "react";
import { useCart } from '../../Context/CartContext';

const Cart = () => {
    const { items, totalPrice, removeItem, updateQuantity, clear } = useCart();
    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen">
            <header className="bg-gradient-to-r from-green-900 via-green-700 to-amber-200 text-white py-5 px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-wide">Your Cart</h1>
                <nav className="space-x-6 text-sm">
                    <a href="/" className="hover:text-gray-400">Home</a>
                    <a href="/products" className="hover:text-gray-400">Products</a>
                    <a href="/tech" className="hover:text-gray-400">Tech</a>
                    <a href="/contact" className="hover:text-gray-400">Contact</a>
                    <a href="/cart" className="hover:text-gray-400">Cart</a>
                </nav>
            </header>

            <section className="py-20 px-4 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h2>
                {items.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                    <div className="bg-gray-50 rounded-xl shadow-md p-6">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-2">Product</th>
                                    <th className="py-2">Name</th>
                                    <th className="py-2">Price</th>
                                    <th className="py-2">Quantity</th>
                                    <th className="py-2">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id} className="border-b hover:bg-gray-100">
                                        <td className="py-3">
                                            <img src={item.image} alt={item.name} className="w-20 h-14 object-cover rounded" />
                                        </td>
                                        <td className="py-3 font-semibold">{item.name}</td>
                                        <td className="py-3">Rs {Number(item.price).toLocaleString()}</td>
                                        <td className="py-3">
                                            <div className="flex items-center gap-2">
                                                <button onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))} className="px-2 py-1 bg-gray-200 rounded">-</button>
                                                <div className="px-3 py-1 border rounded">{item.quantity}</div>
                                                <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                                            </div>
                                        </td>
                                        <td className="py-3 font-bold">Rs {(Number(item.price) * (item.quantity || 1)).toLocaleString()}</td>
                                        <td className="py-3">
                                            <button onClick={() => removeItem(item.id)} className="text-sm text-red-600 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-between items-center mt-6">
                            <div>
                                <button onClick={() => clear()} className="text-sm text-red-600 hover:underline">Clear cart</button>
                            </div>
                            <div className="text-xl font-bold">Total: Rs {Number(totalPrice).toLocaleString()}</div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button className="bg-green-700 text-white px-8 py-3 rounded hover:bg-green-800 transition text-lg font-medium" disabled={items.length === 0}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Cart;