import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import Abaut from './pages/Abaut'
import Product from './pages/Product'
import Card from './pages/Card'
import Single from './pages/Single'
function App() {
 

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/abaut',
      element: < Abaut />
    },
    {
      path: '/product',
      element: <Product />
    },
    {
      path: '/card',
      element: <Card />
    },
    {
      path: '/single/',
      element: <Single />
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App