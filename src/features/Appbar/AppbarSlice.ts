import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    theme: 'light' | 'dark'
}

const initialState: InitialState = {
    theme: 'light'
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
        }
    }
})

export default AppBarSlice.reducer
export const AppbarActions = AppBarSlice.actions