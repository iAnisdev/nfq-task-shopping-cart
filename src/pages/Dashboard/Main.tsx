import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import MainAppBar from '../../features/Appbar/Appbar'
import ItemDrawer from '../../features/Drawer/Drawer'

function Main() {

    const currentTheme = useAppSelector((state) => state.app.theme)

    useEffect(() => {
        if (currentTheme === 'dark') {
            document.body.classList.add('bg-black');
        } else {
            document.body.classList.add('bg-light');
        }
        return () => {
            document.body.classList.remove('bg-black');
            document.body.classList.remove('bg-light');
        }
    }, [currentTheme])


    return (
        <>
            <MainAppBar />
            <Outlet />
            <ItemDrawer />
        </>
    )
}

export default Main