import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../Utils/API";
import { ProductInterface, CartItemInterface } from "../../Types/product";

export const loadProducts = createAsyncThunk('product/load', async (arg) => {
    let products = await API.get('/products')
    return products.data
})

interface InitialStateInterface {
    products: ProductInterface[],
    targetItem: CartItemInterface
}
let targetItemIntial = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
        rate: 0,
        count: 0
    },
    quanitity: 1

}

const initialState: InitialStateInterface = {
    products: [],
    targetItem: targetItemIntial
}

const ProductSlice = createSlice({
    name: 'producs',
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        resetProducts: (state) => {
            state.products = []
        },

        setTargetItem: (state, action) => {
            if (!action.payload.hasOwnProperty('quanitity')) {
                state.targetItem = { ...action.payload, quanitity: 1 }
            } else {
                state.targetItem = action.payload
            }
        },
        resetTargetItem: (state) => {
            state.targetItem = targetItemIntial
        }
    },
    extraReducers: {
        [loadProducts.pending.toString()]: (state, action) => {
            state.products = []
        },
        [loadProducts.fulfilled.toString()]: (state, action) => {
            state.products = action.payload
        },
        [loadProducts.rejected.toString()]: (state) => {
            state.products = []
        }
    }
})


export default ProductSlice.reducer
export const ProductAction = ProductSlice.actions