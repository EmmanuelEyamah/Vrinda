import React from 'react';
import { motion } from 'framer-motion';

const StLineIIIcon: React.FC = () => {
  return (
    <svg width="24" height="534" viewBox="0 0 24 534" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M11 512H13V519H11V512ZM11 525H13V532H11V525ZM15 521H22V523H15V521ZM2 521H9V523H2V521Z"
        fill="#3754FF"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M12 511L12 0.999988"
        stroke="url(#paint0_linear_373_1176)"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeDasharray="1 1"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="paint0_linear_373_1176" x1="-30.4991" y1="299.669" x2="-35.3264" y2="61.9285" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3754FF" />
          <stop offset="0.565" stopColor="#FFE2FE" stopOpacity="0.16" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StLineIIIcon;
