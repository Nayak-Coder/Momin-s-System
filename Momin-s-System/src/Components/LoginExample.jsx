import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';

export default function LoginExample() {
  const { login, register, user, loading, error, logout } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isRegister, setIsRegister] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(formData.name, formData.email, formData.password);
      } else {
        await login(formData.email, formData.password);
      }
      setFormData({ name: '', email: '', password: '' });
    } catch (err) {
      console.error('Auth error:', err);
    }
  };

  if (user) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Welcome, {user.name}!</h2>
        <p>Email: {user.email}</p>
        <button onClick={logout} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', padding: '20px' }}>
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {isRegister && (
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
      />

      <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>
        {loading ? 'Loading...' : isRegister ? 'Register' : 'Login'}
      </button>

      <button
        type="button"
        onClick={() => setIsRegister(!isRegister)}
        style={{ width: '100%', padding: '10px', marginTop: '10px', cursor: 'pointer' }}
      >
        {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
      </button>
    </form>
  );
}
