import React from 'react';
import { motion } from 'framer-motion';

const StLineIcon: React.FC = () => {
  return (
    <svg width="81" height="57" viewBox="0 0 81 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M1 55.9282L80.1384 1"
        stroke="url(#paint0_linear_12_1321)"
        initial={{ pathLength: 0, pathOffset: 1, opacity: 0 }}
        animate={{ pathLength: 1, pathOffset: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 5, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="paint0_linear_12_1321" x1="-138.546" y1="-265.332" x2="-99.785" y2="-287.736" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3754FF" />
          <stop offset="0.953125" stopColor="#8993CD" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StLineIcon;
