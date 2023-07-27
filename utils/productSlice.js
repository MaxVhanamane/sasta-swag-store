import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../data/data";


const productSlice = createSlice({
    name: "products",
    initialState: {
        availableProducts: allProducts,
        userProducts: []
    },
    reducers: {

    }
})

export const { } = productSlice.actions
export default productSlice.reducer
