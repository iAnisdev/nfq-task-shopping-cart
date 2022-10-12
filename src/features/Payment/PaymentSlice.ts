import { createSlice } from "@reduxjs/toolkit";
interface LoaderInitialState {
    card: {
        number: number | null,
        expiry: string,
        cvv: number | null
    }
}

const initialState: LoaderInitialState = {
    card: {
        number: null,
        expiry: '',
        cvv: null
    }
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState: initialState,
    reducers: {
        setCard: (state, action) => {
            state.card = action.payload
        },
        resetCard: (state) => {
            state.card = initialState.card
        }
    }
})

export default paymentSlice.reducer
export const PaymentActions = paymentSlice.actions