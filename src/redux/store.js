import { configureStore } from "@reduxjs/toolkit";
import expenseSlicereducer from './slices/expenseSlice'

const myStore = configureStore({
    reducer:{
        expenses: expenseSlicereducer,
    }
})

export default myStore