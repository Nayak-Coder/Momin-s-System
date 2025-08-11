import React from 'react'
import './App.css'
import Header from './Screens/Header.jsx';
import Footer from './Screens/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
      <Header/>
      <div>
      <Outlet Clasname="font-size 200" />
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default App
