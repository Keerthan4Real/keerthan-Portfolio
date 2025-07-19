import React from "react";
import portfolioData from "./Data";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.header
      id="home"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#f0f4ff] text-center w-full h-screen flex items-center justify-center flex-col overflow-hidden"
    >
      {/* Background animated blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      {/* Main content */}
      <div className="z-10 px-6">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-md">
          {portfolioData.header.name}
        </h1>

        <h2 className="text-2xl sm:text-3xl text-gray-700 mt-4 font-semibold">
          {portfolioData.header.title}
        </h2>

        <p className="text-lg sm:text-xl mt-4 text-gray-500 max-w-xl mx-auto">
          {portfolioData.header.tagline}
        </p>
      </div>
    </motion.header>
  );
};

export default Home;
