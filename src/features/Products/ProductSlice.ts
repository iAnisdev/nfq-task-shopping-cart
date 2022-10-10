import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../Utils/API";
import { ProductInterface } from "../../Types/product";

export const loadProducts = createAsyncThunk('product/load', async (arg) => {
    let products = await API.get('/products')
    return products.data
})

interface InitialStateInterface {
    products: ProductInterface[]
}

const initialState: InitialStateInterface = {
    products: []
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