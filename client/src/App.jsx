import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import { useContext } from 'react'


const  App = () => {

  const {showLogin} = useContext(AppContext)
  return (
    <div className= 'px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-l from-pink-200 via-purple-100 to-blue-300 '>
<ToastContainer position='bottom-right'/>

<Navbar/>
{showLogin && <Login/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/buy" element={<BuyCredit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
