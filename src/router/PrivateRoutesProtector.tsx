import { FC, ReactElement, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { loaderActions } from '../features/Loader/LoaderSlice'

interface ProtectorProp {
    requiredAuth: boolean
}

const PrivateRoutesProtector: FC<ProtectorProp> = (props: ProtectorProp): ReactElement => {
    let isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
        loaderActions.show()    
      return () => {
        loaderActions.hide()  
      }
    }, [isLoggedIn])
    
    if (props.requiredAuth) {
        if (isLoggedIn) {
            return <Outlet />
        } else {
            return <Navigate to={'/login'} />
        }
    } else {
        if (isLoggedIn) {
            return <Navigate to={'/'} />
        } else {
            return <Outlet />
        }
    }
}

export default PrivateRoutesProtector