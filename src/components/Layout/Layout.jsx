import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Layout = ({ cartItems }) => {
    return (
        <div>
            <Header cartItems={cartItems} />
            <Outlet />
        </div>
    )
}

export default Layout