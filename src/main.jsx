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
import DashboardMobile from './pages/dashboardMobile.jsx'
import KeuanganPage from './pages/Keuangan.jsx'
import FormKeuangan from './pages/formTransaksi.jsx'
import Kalender from './pages/Keuangan.jsx'

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
      element: <FormKeuangan/>
    },
    {
      path: "/Kalender",
      element: <Kalender/>
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
