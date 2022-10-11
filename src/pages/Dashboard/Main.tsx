import { Outlet } from 'react-router-dom'
import MainAppBar from '../../features/Appbar/Appbar'
import ItemDrawer from '../../features/Drawer/Drawer'

function Main() {
    return (
        <>
            <MainAppBar />
            <Outlet />
            <ItemDrawer />
        </>
    )
}

export default Main