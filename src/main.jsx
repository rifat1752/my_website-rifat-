import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Router.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster
    toastOptions={{duration: 5000}}
    ></Toaster>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
