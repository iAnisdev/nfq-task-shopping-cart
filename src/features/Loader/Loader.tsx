import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { loaderActions } from './LoaderSlice';

export default function LoaderBackdrop(): React.ReactElement {
    
    const loading = useSelector((state: RootState) => state.loader.open)
    const disptach = useDispatch()

    function handleClose() {
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