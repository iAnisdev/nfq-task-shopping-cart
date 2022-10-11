import { createSlice } from "@reduxjs/toolkit";
import { CartItemInterface } from "../../Types/product";

interface CartInitialState {
    cart: CartItemInterface[]
}

const initialState: CartInitialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            let availableItem = state.cart.find((item) => item.id === action.payload.id)
            if(availableItem){
                state.cart = state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        item.quanitity += action.payload.quanitity
                    }
                    return item
                })
            }else{
                state.cart.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        updateItemInCart: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.quanitity = action.payload.quanitity
                }
                return item
            })
        },
        resetCart: (state) => {
            state.cart = []
        }
    }
})

export default cartSlice.reducer
export const CartActions = cartSlice.actions