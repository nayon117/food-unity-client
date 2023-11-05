import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Route/Route'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={myCreatedRoute} ></RouterProvider>
    </AuthProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
)
