import { createSlice } from "@reduxjs/toolkit";
interface LoaderInitialState {
    isOpen: boolean
}

const initialState: LoaderInitialState = {
    isOpen: false
}

const drawerSlice = createSlice({
    name: 'drawer',
    initialState: initialState,
    reducers: {
        show: (state) => {
            state.isOpen = true
        },
        hide: (state) => {
            state.isOpen = false
        }
    }
})

export default drawerSlice.reducer
export const DrawerActions = drawerSlice.actions