"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  targetId?: string;
  hideAfterScroll?: number;
}

export function ScrollIndicator({ targetId, hideAfterScroll = 100 }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < hideAfterScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideAfterScroll]);

  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          aria-label="Scroll down"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest group-hover:text-white/50 transition-colors">
            Scroll
          </span>

          <div className="relative w-6 h-10 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-linear-to-b from-cyan-400 to-purple-400"
            />
          </div>

          <motion.div
            animate={{ y: [0, 4, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
