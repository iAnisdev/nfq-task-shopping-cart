import React from 'react'
import { Outlet } from 'react-router-dom'
import MainAppBar from '../../features/Appbar/Appbar'

function Main() {
    return (
        <>
            <MainAppBar />
            <Outlet />
        </>
    )
}

export default Main