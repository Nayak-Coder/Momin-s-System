// API Service - Connect to backend
const API_BASE_URL = 'http://localhost:5000/api';

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add auth token if available
  const token = localStorage.getItem('authToken');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// USER ENDPOINTS
export const userAPI = {
  register: (userData) =>
    apiCall('/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),

  login: (email, password) =>
    apiCall('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  getProfile: (userId) => apiCall(`/users/profile/${userId}`),
};

// PRODUCT ENDPOINTS
export const productAPI = {
  getAll: () => apiCall('/products'),

  getById: (productId) => apiCall(`/products/${productId}`),

  create: (productData) =>
    apiCall('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    }),

  update: (productId, productData) =>
    apiCall(`/products/${productId}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    }),

  delete: (productId) =>
    apiCall(`/products/${productId}`, {
      method: 'DELETE',
    }),
};

// CART ENDPOINTS
export const cartAPI = {
  getCart: (userId) => apiCall(`/cart/${userId}`),

  addToCart: (userId, cartData) =>
    apiCall(`/cart/${userId}`, {
      method: 'POST',
      body: JSON.stringify(cartData),
    }),

  removeFromCart: (userId, productId) =>
    apiCall(`/cart/${userId}/${productId}`, {
      method: 'DELETE',
    }),
};

// ORDER ENDPOINTS
export const orderAPI = {
  getUserOrders: (userId) => apiCall(`/orders/user/${userId}`),

  getOrderById: (orderId) => apiCall(`/orders/${orderId}`),

  createOrder: (orderData) =>
    apiCall('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    }),
};

// HEALTH CHECK
export const checkBackendHealth = () => apiCall('/health');
