import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../Utils/API";

interface InitialState {
    isLoggedIn: boolean,
    currentUser: any,
    loginError: any
}

const initialState: InitialState = {
    isLoggedIn: false,
    currentUser: {},
    loginError: null
}

export const LoginRequest = createAsyncThunk('auth/login', async (data: {username: string , password: string}) => {
    let result = await API.post('/auth/login', data)
    console.log(result)
    return result.data
})

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
    },
    extraReducers: {
        [LoginRequest.pending.toString()]: (state) => {
            state = initialState
        },
        [LoginRequest.fulfilled.toString()]: (state, action) => {
            state.isLoggedIn = true
            state.currentUser = action.payload
            state.loginError = {}
        },
        [LoginRequest.rejected.toString()]: (state, action) => {
            state = {
                ...initialState,
                loginError: action.payload
            }
        }
    }
})

export default AuthSlice.reducer
export const AuthActions = AuthSlice.actions