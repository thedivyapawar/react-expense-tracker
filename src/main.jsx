import { createRoot } from 'react-dom/client'
import './index.css'
import App, { myRoute } from './App.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={myRoute}></RouterProvider>
)
