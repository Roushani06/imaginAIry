import React, { useContext } from 'react'
import {assets} from '../assets/assets'
//import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import {useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion'


const images = [
    assets.image1,
    assets.image2,
    assets.image3,
    assets.image4,
    assets.image5,
    assets.image6,
    assets.sample_img_1,
    assets.sample_img_2,
    assets.image7,
    assets.image8,
    assets.image9,
    assets.image10
  ];

function Header() {
  const {user, setShowLogin} = useContext(AppContext)
const navigate = useNavigate()

  const onClickHandler = () => {
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
  }
}
  return (
    <motion.div className='flex flex-col justify-between items-center text-center my-20' 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
>
        <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 shadow-md'>
            <p>Best text to image generator</p>
            <img src={assets.star_icon} alt='' />
        </motion.div>

        <motion.h1 className=' text-4xl font-extrabold max-w-[320px] sm:max-w-[600px] mx-auto mt-10 text-center leading-tight whitespace-nowrap 
  transition-all duration-500 ease-out transform hover:scale-105'
   initial={{opacity: 0}}
   animate={{opacity: 1}}
   transition={{delay: 0.4, duration: 2}}
   >
  <p className='flex flex-wrap justify-center md:!flex-none md:!flex-nowrap md:!justify-start'>Type your <span className='text-blue-500 ml-1 mr-1'> vision, </span> watch it come alive</p>
</motion.h1>

        <p className='text-center max-w-xl mx-auto mt-5'>
            Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.
        </p>

        <motion.button 
        onClick={onClickHandler}
        className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        initial={{opacity:0}}
        animate={{opacity:1}}
      transition={{default: {duration: 0.5}, opacity: {delay: 0.8, duration: 1}}}
        
        >            
            Generate Images
            <img className=' h-6' src={assets.star_group} alt='' />
        </motion.button>

        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1, duration: 1}}
        className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-16'>
    {images.map((src, index) => (
      <motion.div>
      <img
        key={index}
        className='rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-500 ease-in-out transform cursor-pointer'
        src={src}
        alt={`Image ${index + 1}`}
        width={500}
        height={500}

        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1, // Staggered animation for images
          duration: 0.6,
          type: 'spring',
        }}
      />
      </motion.div>
    ))}
  </motion.div>

        <motion.p 
        initial={{opacity: 0}}
        animate={{opacity: 1}}  
        transition={{delay: 1.2, duration: 0.8}}
        className='mt-2 text-neutral-600'>Generated images from artifex</motion.p>
        </motion.div>
  )


}

export default Header