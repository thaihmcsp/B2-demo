import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'productList',
    initialState: [],
    reducers: {
        addProduct : function (state, action){
            return [...state, action.payload]
        }, 

        deleteProduct : function (state, action){
            let cloneState = [...state]
            let index = cloneState.findIndex(function(value){
                return value.idSP === action.payload
            })
            cloneState.splice(index, 1)
            return cloneState
        },

    }
})

export const {addProduct, deleteProduct} = productSlice.actions
console.log(productSlice.actions);
export const productReducer = productSlice.reducer
