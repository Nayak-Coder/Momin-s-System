import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Context/CartContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Components/Pages/Home.jsx'
import AboutUs from './Components/Pages/AboutUs.jsx'
import Services from './Components/Pages/Services.jsx'
import Products from './Components/Pages/Products.jsx'
import Contact from './Components/Pages/Contact.jsx'
import Loginpage from './Components/Pages/login.jsx'
import Cart from './Components/Pages/Cart.jsx'
import MarketPlace from './Components/Pages/MarketPlace.jsx'
import Tech from './Components/Pages/Tech.jsx'
import BundleOffers from './Components/Pages/BundleOffers.jsx'
import UserTestimonials from './Components/Pages/UserTestimonials.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:"/",
        element: <HomePage />
      },
      {
        path: "aboutus",
        element: <AboutUs />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "login",
        element: <Loginpage />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "marketplace",
        element: <MarketPlace />
      },
      {
        path: "tech",
        element: <Tech />
      },
      {
        path: "bundleoffers",
        element: <BundleOffers />
      },
      {
        path: "UserTestimonials",
        element: <UserTestimonials />
      }
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
