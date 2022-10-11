import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    isLoggedIn: boolean,
    currentUser: any
}

const initialState: InitialState = {
    isLoggedIn: false,
    currentUser: {}
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        }
    }
})

export default AuthSlice.reducer
export const AuthActions = AuthSlice.actions