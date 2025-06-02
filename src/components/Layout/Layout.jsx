import React from 'react'
import { Outlet } from 'react-router-dom'
import  Header  from '../../components/Header/Header'

const Layout = ({ cartItems, clearCart, user, onLogout }) => {
    return (
        <div>
            <Header cartItems={cartItems} user={user} onLogout={onLogout} />
            <Outlet context={{ cartItems, clearCart }} />
        </div>
    )
}

export default Layout