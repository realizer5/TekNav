import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Home, About, Services, Contact, Login, ForgetPassword, SignUp } from "./pages"
import Layout from "./Layout"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} >
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="signup" element={<SignUp />} />
        </Route >
    )
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
