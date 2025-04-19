'use client';

import { motion } from "framer-motion";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
  };
  
export function Button({ children, onClick }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="mt-6 lg:mt-10 bg-accent-main text-white w-[240px] md:w-[372px] py-3 text-base font-semibold hover:bg-accent-main/90 transition "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      viewport={{ once: true }}

    >
      {children}
    </motion.button>
  );
}