import { createSlice } from "@reduxjs/toolkit";

interface InitialStateInterface {
    search: string
}

const initialState: InitialStateInterface = {
    search: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        setSeach: (state, action) => {
            state.search = action.payload
        },
        resetSearch: (state) => {
            state.search = ''
        }
    }
})


export default searchSlice.reducer
export const SearchActions = searchSlice.actions