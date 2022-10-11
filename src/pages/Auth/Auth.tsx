import { Outlet } from 'react-router-dom'
import MainAppBar from '../../features/Appbar/Appbar'

function AuthPage() {
    return (
        <>
            <MainAppBar />
            <Outlet />
        </>
    )
}

export default AuthPage