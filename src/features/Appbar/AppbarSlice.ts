import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    theme: 'light' | 'dark',
    language: {
        name: string,
        code: string
    }
}

const initialState: InitialState = {
    theme: 'light',
    language: {
        name: 'English',
        code: 'en'
    }
}

const AppBarSlice = createSlice({
    name: 'Appbar',
    initialState: initialState,
    reducers: {
        toggleTheme: (state) => {
            if (state.theme === 'light') {
                state.theme = 'dark'
            } else {
                state.theme = 'light'
            }
        },
        setLanguage: (state , action) => {
            state.language = action.payload
        }
    }
})

export default AppBarSlice.reducer
export const AppbarActions = AppBarSlice.actions