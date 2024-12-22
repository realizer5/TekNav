import React from "react"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="p-4 flex justify-between items-center shadow sticky z-50 top-0">
                <div className="flex items-center space-x-2">
                    <img src="https://avatars.pfptown.com/176/monster-pfp-2807.png" alt="" className="h-10 rounded-full" />
                    <span className="font-bold text-xl">Tek Nav</span>
                </div>
                <ul className="flex space-x-8 font-medium text-base">
                    <li>
                        <NavLink to="/" className={({ isActive }) => ``}> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => ``}> About </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={({ isActive }) => ``}> Services </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className={({ isActive }) => ``}> Contact </NavLink>
                    </li>
                </ul>
                <Link
                    to="/login" className="py-2 px-4 bg-indigo-600 rounded-md text-sm text-white font-semibold shadow hover:bg-indigo-700 active:bg-indigo-800" > Login </Link>
            </nav>
        </>
    )
}

export default Navbar
