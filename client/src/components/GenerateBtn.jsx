import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function GenerateBtn() {

  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
  
    const onClickHandler = () =>{
      if(user){
        navigate('/result')
      }else{
        setShowLogin(true)
    }
  }
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    className="border max-w-screen-xl mx-auto px-6 md:px-12 text-center pb-15 bg-white/10 rounded-lg shadow-md">
      {/* Heading Section */}
      <h2 className="text-3xl sm:text-4xl font-extrabold md:py-16 py-6 text-neutral-800">
        Ready to Generate Your Own AI Images?
      </h2>

      {/* Description */}
      <p className="text-lg mb-8 text-gray-600 leading-relaxed">
        Start creating stunning visuals from your text prompts in just a few clicks. <br />
        Join thousands of users who have unlocked limitless creativity.
      </p>

      {/* Button */}
      <button 
      onClick={onClickHandler}
      className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg mb-10">
        Try It Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-11.293a1 1 0 00-1.414 0L7 10.586V9a1 1 0 00-2 0v4a1 1 0 001 1h4a1 1 0 000-2H8.414l3.293-3.293a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </motion.div>
  );
}

export default GenerateBtn;
