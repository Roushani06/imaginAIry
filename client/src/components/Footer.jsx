import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='flex items-center justify-between py-3 mt-20'>
        <div className="flex flex-row justify-center items-center gap-1 font-semibold md:text-l text-l text-slate-700">
               <img src={assets.artifex} alt="logo" className="w-8 h-8 md:w-8 md:h-8"/> ImaginAiry
                </div>

        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
            Copyright @ImaginAiry.com | All rights reserved
        </p>

        <div className='flex gap-2.5'>

            <img src={assets.facebook_icon} alt="" width={35}/>
            <img src={assets.twitter_icon} alt="" width={35}/>
            <img src={assets.instagram_icon} alt="" width={35}/>
            </div>
    </div>
  )
}

export default Footer