import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage'
import ExpensePage from './pages/ExpensePage'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import myStore from './redux/store'

function App() {

  return (
    <>
     <Provider store={myStore}>
          <Navbar/>
          <Outlet/>
          <Footer/>
     </Provider>
    </>
  )
}

export const myRoute = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children :[
      {
        path :"/",
        element :<HomePage/>
      },
      {
        path :"/expense",
        element :<ExpensePage/>
      },
    ]
  }
])

export default App
