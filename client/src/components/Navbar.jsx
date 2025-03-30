import React, {useContext} from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function Navbar() {
   const {user, setShowLogin, logout, credit} = useContext(AppContext);
   

   
    const navigate = useNavigate();
  return (
    <div className="flex item-center justify-between py-4 ">
        <Link to="/">
        <div className="flex flex-row justify-center items-center gap-1 font-semibold md:text-2xl text-l text-slate-700">
       <img src={assets.artifex} alt="logo" className="w-10 h-10 md:w-12 md:h-12"/> ImaginAiry
        </div>
       </Link>

       <div>
        {
        user?
        <div 
        // onClick= 
        // {()=>navigate('/buy')}
        className="flex items-center gap-2 sm:gap-3">
            <button className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                <img className='w-5' src={assets.credit_star} alt="credit_star"/>
                <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit left : {credit}</p>
            </button>
            <p className='text-gray-600 max-sm:hidden pl-4'>Hi,{user.name}</p>
            <div className="relative group">
                <img src={assets.user_icon}  className="w-10 drop-shadow" alt=""/>

                <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12 ">
                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                        <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                    </ul>
                    </div>
            </div>
        </div>
        :
        <div className="flex items-center gap-2 sm:gap-5">
            {/* <p onClick={()=>navigate('/buy')} className='cursor-pointer'>Pricing</p> */}
            <button className='bg-zinc-800 text-white px-7 py-2 sm:px-9 text-sm rounded-full' onClick={()=> setShowLogin(true)}>Login</button>
        </div>
        }
       </div>
    
        </div>
  )
       
}

export default Navbar