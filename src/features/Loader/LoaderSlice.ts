import { createSlice } from "@reduxjs/toolkit";
interface LoaderInitialState {
    open: boolean
}

const initialState: LoaderInitialState = {
    open: false
}

const loaderSlice = createSlice({
    name: 'loader',
    initialState: initialState,
    reducers: {
        show: (state) => {
            state.open = true
        },
        hide: (state) => {
            state.open = true
        }
    },
    extraReducers: {
        'product/load/pending': (state) => {
            state.open = true
        },
        'product/load/fulfilled': (state) => {
            state.open = false
        },
        'product/load/rejected': (state) => {
            state.open = false
        }
    }
})

export default loaderSlice.reducer
export const loaderActions = loaderSlice.actions