import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css'
import Wallet from './pages/Wallet'
import Members from "./pages/Members";
import Home from "./pages/Home"

function App() {
  const router =createBrowserRouter([
    {path:'/',element:<Wallet/>},
    {path:'/home',element:<Home/>},
    {path:'/members',element:<Members/>},
  ])
 
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
