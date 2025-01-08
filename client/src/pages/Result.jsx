import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets'; // Import your assets, including the placeholder image
import { motion } from 'framer-motion'; // Import the motion component
import { AppContext } from '../context/AppContext';



function Result() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loading


  const {generateImage} = useContext(AppContext);

  // Simulate image generation (replace this with actual API logic)
  const handleGenerateImage = async () => {
    

    setIsLoading(true); // Start loading

    if(prompt){
      const image = await generateImage(prompt)
      if(image){
        setGeneratedImage(image);
      }
    }
    setIsLoading(false);
    
      
  };

  // Handle downloading the generated image
  const handleDownloadImage = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = 'generated-image.png';
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-screen bg-white/50 shadow-lg flex flex-col items-center py-10 px-6"
    >
      {/* Header Section */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-700 text-center mb-10">
        Generate AI Images
      </h1>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-6xl">
        {/* Left Side - Prompt Input */}
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enter Your Prompt</h2>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your imagination here..."
            className="resize-none h-32 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            onClick={handleGenerateImage}
            className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 shadow-lg transition-all duration-300"
          >
            Generate Image
          </button>
        </div>

        {/* Right Side - Generated Image */}
        <div className="flex flex-col items-center justify-center bg-gray-100 shadow-lg rounded-lg p-6 w-full lg:w-1/2">
          {generatedImage ? (
            <div className="relative flex flex-col items-center gap-4">
              <img
                src={generatedImage}
                alt="Generated Image"
                className="rounded-lg shadow-md max-w-full max-h-[400px] transition-transform duration-500 hover:scale-105"
                onLoad={() => setIsLoading(false)} // Ensure loading stops when the image is fully loaded
              />
              {isLoading && (
                <div className="w-full h-1 bg-gray-300 mt-2">
                  <div className="h-full bg-blue-500 animate-pulse"></div>
                </div>
              )}
              {/* Buttons Below Image */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setGeneratedImage('');
                    setPrompt('');
                  }}
                  className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 shadow-lg transition-all duration-300"
                >
                  Generate Another
                </button>
                <button
                  onClick={handleDownloadImage}
                  className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 shadow-lg transition-all duration-300"
                >
                  Download
                </button>
              </div>
            </div>
          ) : (
            <div className="relative">
              <img
                src={assets.image1} // Replace with your placeholder image path
                alt="Placeholder"
                className="rounded-lg shadow-md max-w-full max-h-[400px] opacity-80"
              />
              {isLoading && (
                <div className="w-full h-1 bg-gray-300 mt-2">
                  <div className="h-full bg-blue-500 animate-pulse"></div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Result;
