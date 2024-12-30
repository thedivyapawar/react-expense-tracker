import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Navbar(){

    const allExpenses = useSelector ((state)=>state.expenses.expenses)
    const length = allExpenses.length

    return(
        <>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid align-items-center">
                <Link className="navbar-brand" to="/">My-Expenso</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/expense">Expense</Link>
                    </li>
                
                </ul>
                
                <div>
                    <i className="bi bi-wallet2 fs-5"></i>
                    <sup className="mx-1 fs-6">{length}</sup>
                </div>
                </div>
            </div>
            </nav> */}

            <div className="d-flex px-3 py-2 justify-content-between align-items-center">
                <div className="d-flex gap-4 align-items-center">
                    <Link className="fw-bold fs-4 nav-link" to="/">My-Expenso</Link>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/expense" className="nav-link">Expenses</Link >
                </div>

                <div>
                    <Link to="/expense" className="nav-link">
                    <i className="bi bi-wallet2 fs-5"></i>
                    <sup className="mx-1 fs-6">{length}</sup>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar