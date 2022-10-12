import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../Utils/API";
import { UserInterface } from "../../Types/user";

interface InitialState {
    isLoggedIn: boolean,
    currentUser: UserInterface,
    loginError: any,
    access_token: string,
    emailSent: boolean
}

const initialUser: UserInterface = {
    email: '',
    username: '',
    password: '',
    name: {
        firstname: '',
        lastname: ''
    }
}


const initialState: InitialState = {
    isLoggedIn: false,
    currentUser: initialUser,
    loginError: null,
    access_token: '',
    emailSent: false
}

export const LoginRequest = createAsyncThunk('auth/login', async (data: { username: string, password: string }) => {
    //switching from login to user api as login api is not working
    // let result = await API.post('/auth/login', data)
    let result = await API.get('/users/1') 
    return {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR',
        user: {
            ...result.data
        }
    }
})

export const SignupRequest = createAsyncThunk('auth/signup', async (data: UserInterface) => {
    let result = await API.post('/users', data)
    return {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR',
        user: {
            ...result.data,
            ...data
        }
    }
})

export const ResetRequest = createAsyncThunk('auth/reset', async (data: { email: string }) => {
    let result = await API.post('/auth/reset', data)
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
            state.access_token = ''
        },
        setUser: (state , action) => {
            state.currentUser = action.payload
        },
        resetUser: (state) => {
            state.currentUser = initialUser
        }
    },
    extraReducers: {
        [LoginRequest.pending.toString()]: (state) => {
            state = initialState
        },
        [LoginRequest.fulfilled.toString()]: (state, action) => {
            state.isLoggedIn = true
            state.currentUser = action.payload.user
            state.access_token = action.payload.access_token
            state.loginError = {}
        },
        [LoginRequest.rejected.toString()]: (state, action) => {
            state = {
                ...initialState,
                loginError: action.payload
            }
        },
        [SignupRequest.pending.toString()]: (state) => {
            state = initialState
        },
        [SignupRequest.fulfilled.toString()]: (state, action) => {
            state.isLoggedIn = true
            state.currentUser = action.payload.user
            state.access_token = action.payload.access_token
            state.loginError = {}
        },
        [SignupRequest.rejected.toString()]: (state, action) => {
            state = {
                ...initialState,
                loginError: action.payload
            }
        },
        [ResetRequest.pending.toString()]: (state) => {
            state = initialState
        },
        [ResetRequest.fulfilled.toString()]: (state, action) => {
            state.emailSent = true
            state.loginError = {}
        },
        [ResetRequest.rejected.toString()]: (state, action) => {
            state = {
                ...initialState,
                loginError: action.payload
            }
        },

    }
})

export default AuthSlice.reducer
export const AuthActions = AuthSlice.actions