import { useState } from "react"
import { addExpense } from "../redux/slices/expenseSlice"
import { useDispatch } from "react-redux"

function Form(){
    const[title,setTitle]= useState("")
    const[amount,setAmount]= useState("")
    const[category,setCategory] =  useState("Food")
    const dispatch =  useDispatch()

    function addExpenseFunc(){
        console.log(title, ".", amount,  ".", category);
        const myObj ={
            title : title,
            amount : amount,
            category : category,
        }

        dispatch (addExpense(myObj))
        setTitle("");
        setAmount("");
        setCategory("Food");
    }

    return(
        <>
        <div className="row justify-content-center align-items-center my-5">
            <div className="col-10 col-md-6 border rounded-4">
            <form className="p-4">
                <p className="fs-5 fw-semibold">Let's Add Your Expense.</p>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Expense Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Expense Amount</label>
                <input type="number" className="form-control" id="exampleInputPassword1" value={amount}  onChange={(e)=>setAmount(e.target.value)}/>
            </div>

            <div className="mb-3">
            <label htmlFor="expenseCategory" className="form-label">Select Expense Category</label>
            <select id="expenseCategory" className="form-select" aria-label="Default select example" value={category} onChange={(e)=>setCategory(e.target.value)}>
                
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Grocery">Grocery</option>
                <option value="Other">Other</option>
            </select>
            </div>
            
            <button type="button" className="btn btn-dark" onClick={addExpenseFunc}>Add Expense</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default Form