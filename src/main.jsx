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
import DashboardMobile from './pages/dashboardMobile.jsx'
import FormKeuangan from './pages/formTransaksi.jsx'
import Riwayat from './pages/Riwayat.jsx'
import KalenderPage from './pages/Kalender.jsx'
import Profile from './pages/Profile.jsx'
import GrafikPage from './pages/grafik.jsx'
import Chatbot from './pages/chatbot.jsx'
import Prediksi from './pages/Prediksi.jsx'
import Fitur from './pages/fitur.jsx'
import TentangFinancialTracker from './pages/tentangFintrack.jsx'

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
      element: <KalenderPage/>
    },
    {
      path: "/Grafik",
      element: <GrafikPage />
    },
    {
      path: "/Prediksi",
      element: <Prediksi />
    },
    {
      path: "/Riwayat",
      element: <Riwayat/>
    },
    {
      path: "/Profile",
      element: <Profile/>
    },
    {
      path: "/Chatbot",
      element: <Chatbot />,
    },
    {
      path: "/Fitur",
      element: <Fitur/>
    },
    {
      path: "/TentangFinancialTracker",
      element: <TentangFinancialTracker/>,
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
