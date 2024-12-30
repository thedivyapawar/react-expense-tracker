import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name :"expenses",
    initialState : {
        expenses :[],
    },
    reducers :{
        addExpense : (state, action)=>{
            state.expenses.push(action.payload);
            console.log(state.expenses);
            console.log(state.expenses.length);
            state.expenses.map((item)=>{
                console.log(item.title);
                
            })
        }
    }
})

export  const {addExpense} = expenseSlice.actions;
export default expenseSlice.reducer;