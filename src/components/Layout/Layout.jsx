import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Layout = ({ cartItems, clearCart }) => {
    return (
        <div>
            <Header cartItems={cartItems} />
            <Outlet context={{ cartItems, clearCart }} />
        </div>
    )
}

export default Layout