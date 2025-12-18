"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-2 px-2 py-1 text-[0.6em] font-medium text-white bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl whitespace-nowrap pointer-events-none z-50"
          >
            {content}
            {/* Tiny arrow
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white/20" /> */}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}
