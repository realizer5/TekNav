import React from "react"
import { NavLink, Link } from "react-router-dom"
import { Logo } from '../../img'

const Navbar = () => {
    return (
        <>
            <nav className="bg-white p-4 flex justify-between items-center shadow sticky z-50 top-0">
                <div className="flex items-center space-x-2">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} alt="" className="h-10 mr-3" />
                        <span className="font-bold text-xl hover:text-indigo-600">Tek Nav</span>
                    </Link>
                </div>
                <ul className="flex space-x-8 font-medium text-base">
                    <li className="w-14">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "text-indigo-700 font-semibold" : "text-gray-700 hover:text-indigo-600"} transition-colors duration-200`}> Home </NavLink>
                    </li>
                    <li className="w-14">
                        <NavLink to="/courses" className={({ isActive }) => `${isActive ? "text-indigo-700 font-semibold" : "text-gray-700 hover:text-indigo-600"} transition-colors duration-200`}> Courses </NavLink>
                    </li>
                    <li className="w-14">
                        <NavLink to="/services" className={({ isActive }) => `${isActive ? "text-indigo-700 font-semibold" : "text-gray-700 hover:text-indigo-600"} transition-colors duration-200`}> Services </NavLink>
                    </li>
                    <li className="w-14">
                        <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-indigo-700 font-semibold" : "text-gray-700 hover:text-indigo-600"} transition-colors duration-200`}> About </NavLink>
                    </li>
                    <li className="w-14">
                        <NavLink to="/Contact" className={({ isActive }) => `${isActive ? "text-indigo-700 font-semibold" : "text-gray-700 hover:text-indigo-600"} transition-colors duration-200"}`}> Contact </NavLink>
                    </li>
                </ul>
                <Link
                    to="/login" className="py-2 px-4 bg-indigo-700 rounded-md text-sm text-white font-semibold shadow hover:bg-indigo-600 active:bg-indigo-800 transition-colors duration-200" > Login </Link>
            </nav>
        </>
    )
}

export default Navbar
