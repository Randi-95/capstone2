import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home.jsx'
import {TentangKamiPage} from './pages/TentangKami.jsx'
import NotFound from './pages/notFound.jsx'
import Blogs from './pages/blogs.jsx'
import Login from './pages/Login.jsx'
import Registrasi from './pages/daftar.jsx'
import Dashboard from './pages/dashboard.jsx'
import Keuangan from './pages/Keuangan.jsx'
import DashboardMobile from './pages/dashboardMobile.jsx'

const router = createBrowserRouter ([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFound/>
    },
    {
      path: "/tentangkami",
      element: <TentangKamiPage />
    },
    {
      path: "/blogs",
      element: <Blogs />
    },
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path: "/Registrasi",
      element: <Registrasi/>
    },
    {
      path: "/Dashboard",
      element: <DashboardMobile/>
    },
    {
      path: "/Keuangan",
      element: <Keuangan />
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
