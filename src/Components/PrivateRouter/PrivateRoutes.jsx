import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PrivateRoutes = () => {
    const {userLogged} = useSelector(state => state.authReducer)
    return (
    <>
    {!userLogged ? <Navigate to={'/login'} /> : <Outlet/>}
    </>
)
}

export default PrivateRoutes