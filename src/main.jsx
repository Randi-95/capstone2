import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home.jsx'
import {TentangKamiPage} from './pages/TentangKami.jsx'
import NotFound from './pages/notFound.jsx'

const router = createBrowserRouter ([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFound/>
    },
    {
      path: "/tentangkami",
      element: <TentangKamiPage />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
