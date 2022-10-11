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
        },
        'auth/login/pending': (state) => {
            state.open = true
        },
        'auth/login/fulfilled': (state) => {
            state.open = false
        },
        'auth/login/rejected': (state) => {
            state.open = false
        },
        'auth/reset/pending': (state) => {
            state.open = true
        },
        'auth/reset/fulfilled': (state) => {
            state.open = false
        },
        'auth/reset/rejected': (state) => {
            state.open = false
        },
        'auth/signup/pending': (state) => {
            state.open = true
        },
        'auth/signup/fulfilled': (state) => {
            state.open = false
        },
        'auth/signup/rejected': (state) => {
            state.open = false
        }
    }
})

export default loaderSlice.reducer
export const loaderActions = loaderSlice.actions