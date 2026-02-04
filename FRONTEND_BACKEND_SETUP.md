# Frontend-Backend Connection Setup

Your React frontend is now connected to the Node.js backend! Here's what was set up:

## Files Created/Updated

### 1. **API Service** (`src/services/api.js`)
Central API client for all backend communication with methods for:
- Users (register, login, getProfile)
- Products (getAll, getById, create, update, delete)
- Cart (getCart, addToCart, removeFromCart)
- Orders (getUserOrders, getOrderById, createOrder)

### 2. **Auth Context** (`src/Context/AuthContext.jsx`)
Manages user authentication with:
- `register()` - Create new user account
- `login()` - Authenticate user
- `logout()` - Clear session
- `user` - Current user data
- `isAuthenticated` - Boolean check

### 3. **Updated Main** (`src/main.jsx`)
Added `AuthProvider` wrapper around your app

### 4. **Example Components**
- `src/Components/LoginExample.jsx` - Complete login/register form
- `src/Components/ProductsExample.jsx` - Display products from backend

## How to Use

### In Any Component - Get User Data
```jsx
import { useAuth } from '../Context/AuthContext';

function MyComponent() {
  const { user, login, register, logout } = useAuth();
  
  // Use user data, call login/register
}
```

### In Any Component - Use Products
```jsx
import { productAPI } from '../services/api';

async function loadProducts() {
  const data = await productAPI.getAll();
  console.log(data.products);
}
```

### In Any Component - Use Cart
```jsx
import { useCart } from '../Context/CartContext';

function MyComponent() {
  const { items, addItem, removeItem, totalPrice } = useCart();
  
  // Use cart methods
}
```

## Current Flow

1. **Frontend** (React on http://localhost:5173)
   ↓
2. **API Service** (routes to http://localhost:5000/api/*)
   ↓
3. **Backend** (Express server)
   ↓
4. **MongoDB** (stores data)

## Testing the Connection

### 1. Start Backend (if not running)
```bash
cd backend
npm start
```

### 2. Start Frontend
```bash
cd Momin-s-System
npm run dev
```

### 3. Test API with these examples:

**Register User:**
```javascript
import { userAPI } from './services/api';

const result = await userAPI.register({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123'
});
```

**Get All Products:**
```javascript
import { productAPI } from './services/api';

const result = await productAPI.getAll();
console.log(result.products);
```

**Create Product (from admin):**
```javascript
const newProduct = await productAPI.create({
  name: 'Laptop',
  description: 'High-performance laptop',
  price: 999.99,
  category: 'Electronics',
  stock: 50
});
```

**Create Order:**
```javascript
import { orderAPI } from './services/api';

const order = await orderAPI.createOrder({
  user: 'userId',
  items: [
    {
      product: 'productId',
      quantity: 2,
      price: 100
    }
  ],
  totalAmount: 200,
  shippingAddress: '123 Main St',
  paymentMethod: 'card'
});
```

## Environment Variables

Frontend doesn't need .env setup (hardcoded to http://localhost:5000)

Backend needs `.env` file in `/backend` folder with:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

## Next Steps

1. Replace example login page with your Login.jsx
2. Replace example products with your Products.jsx
3. Update Cart.jsx to use cartAPI
4. Update any other pages to use the API services
5. Test all features thoroughly

## Common Issues

**CORS Error?**
- Make sure backend is running on port 5000
- CORS is already configured in backend/server.js

**Can't connect to MongoDB?**
- Add your IP to MongoDB Atlas whitelist
- Check connection string in .env file

**API calls return undefined?**
- Make sure backend server is running
- Check console for error messages
- Verify endpoints match in api.js

