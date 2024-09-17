import { Link, useLocation } from "react-router-dom"
import React from "react"
type NavItemProps = {
    to: string,
    onClick: () => void,
    children: React.ReactNode
}
const NavItem: React.FC<NavItemProps> = ({ to, children, onClick }) => {
    const {pathname} = useLocation();
    const isActive = pathname == to ? true : false;
    return <>
        <Link className={isActive ? "bg-[#3B4252] text-white p-3" : "p-3"} to={to} onClick={onClick}>{children}</Link>
    </>
}

export default NavItem;