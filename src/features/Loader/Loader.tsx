import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { loaderActions } from './LoaderSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export default function LoaderBackdrop(): React.ReactElement {

    const loading = useAppSelector((state ) => state.loader.open)
    const disptach = useAppDispatch()

    const handleClose = () :void => {
        disptach(loaderActions.hide())
    }

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}