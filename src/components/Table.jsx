import { useSelector } from "react-redux"

function Table(){

    const allExpenses = useSelector((state)=>state.expenses.expenses)


    return(
        <>
            <div className="row justify-content-center my-4">
                <div className="col-10 col-md-6 p-4 border rounded-4 ">
                    <p className="fs-5 fw-semibold">Expenses List</p>
                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Title</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allExpenses.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.category}</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table