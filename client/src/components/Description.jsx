import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

function Description() {
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    className="flex flex-col items-center justify-center my-24 p-6 md:px-28 bg-gray-50">
      {/* Header Section */}
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-800">
        Create AI Images
      </h1>
      <p className="text-gray-600 mb-10 text-center text-lg max-w-2xl">
        Transform your imagination into stunning visuals with the power of AI.
      </p>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center">
        {/* Image Section */}
        <div className="transition-transform duration-500 hover:scale-105">
          <img
            src={assets.image9}
            alt="AI Image"
            className="w-80 xl:w-96 rounded-lg shadow-lg hover:shadow-xl"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-xl text-gray-700">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Introducing AI-Powered Text to Image Generator
          </h2>
          <p className="text-lg mb-6">
            The AI-Powered Text-to-Image Generator transforms written descriptions into stunning,
            visually accurate images in seconds. Utilizing advanced machine learning models, it
            interprets text inputs to create realistic or artistic visuals, enabling creative
            exploration, rapid prototyping, and enhanced storytelling for artists, designers,
            and businesses across industries.
          </p>
          <p className="text-lg">
            This tool blends innovation with creativity, enabling users to visualize concepts,
            design ideas, and artistic visions effortlessly. Ideal for artists, marketers, and
            developers, it brings imagination to life in just seconds.
          </p>
        </div>
      </div>

     
    </motion.div>
  );
}

export default Description;
