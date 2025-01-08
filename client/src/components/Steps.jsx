import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

function Steps() {
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    className="flex flex-col items-center justify-center my-32 px-6 md:px-12">
      {/* Title Section */}
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold mb-4 text-neutral-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        How It Works
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      >
        Transform Words Into Stunning Images
      </motion.p>

      {/* Steps Section */}
      <motion.div
        className="space-y-6 w-full max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-6 p-6 px-8 bg-white shadow-md border border-gray-200 cursor-pointer 
              hover:scale-105 hover:shadow-lg hover:border-blue-500 transition-all duration-500 rounded-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon Section */}
            <div className="flex-shrink-0">
              <img
                src={item.icon}
                alt=""
                className="w-12 h-12 bg-blue-100 p-3 rounded-full shadow-sm"
              />
            </div>
            {/* Text Section */}
            <div>
              <h2 className="text-xl font-medium text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-1">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Steps;
