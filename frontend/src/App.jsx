import { RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Navbar from './components/shared/Navbar'
import {createBrowserRouter} from "react-router-dom"
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'

const appRouter= createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])

function App() {


  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
