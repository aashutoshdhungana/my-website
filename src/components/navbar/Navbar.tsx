import { useState } from "react";
import NavItem from "./NavItem";
import './Navbar.css';

const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState<boolean>(false);

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const navItems = <>
        <NavItem to="/" onClick={() => toggleNavbar()}>Home</NavItem>
        <NavItem to="/Projects" onClick={() => toggleNavbar()}>Projects</NavItem>
        <NavItem to="/Contact" onClick={() => toggleNavbar()}>Contact Me</NavItem>
    </>
    
    return <>
        <div className="p-3 text-right md:hidden"><button className={`hamburger ${showNavbar ? "open" : ""}`} onClick={() => {toggleNavbar()}}><span></span><span></span><span></span></button></div>
        <div className={`z-50 bg-white w-full fixed right-0 h-full transition-all duration-300 ease-in-out ${showNavbar ? "translate-x-0" : "translate-x-full"} md:hidden`}>
            {<nav className={`flex flex-col gap-3 text-[#212529]`}>
                {navItems}
            </nav>}
        </div>
        <nav className="hidden md:flex gap-3 justify-end fixed top-0 w-full px-4">
            {navItems}
        </nav>
    </>
}

export default NavBar;