import { useState } from 'react'
import './App.css'
import HomePage from './Components/Pages/Home.jsx';
import Header from './Screens/Header.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header className="bg-white p-4 rounded-lg shadow-md container mx-auto justify-between items-center" />
      <HomePage className="bg-gray-700 p-4 rounded-lg shadow-md" />
      </div>
      
  
      <p className="font bold text-2xl text-center mt-4">
        Click on the Vite and React logos to learn more
      </p>
      <footer className="bg-gray-800 text-white p-4 mt-4 text-center">
        <p>Made with ❤️ by Your Name</p>
      </footer>
    </>
  )
}

export default App
