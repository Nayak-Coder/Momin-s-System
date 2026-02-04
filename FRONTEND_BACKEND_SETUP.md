# Frontend-Backend Connection Setup
## Files Created/Updated

### 1. **API Service** (`src/services/api.js`)
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

### In Any Component - Use Cart
```jsx
import { useCart } from '../Context/CartContext';

function MyComponent() {
  const { items, addItem, removeItem, totalPrice } = useCart();
  
  // Use cart methods
}
```

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

## Environment Variables

Frontend doesn't need .env setup (hardcoded to http://localhost:5000)

Backend needs `.env` file in `/backend` folder with:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

