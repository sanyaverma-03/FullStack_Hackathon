import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Button1 from './components/01_atoms/Buttons/Button_01';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Button1 />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
