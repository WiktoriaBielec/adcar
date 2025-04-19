'use client';

import { motion } from "framer-motion"; // dodaj to
import Image from "next/image";

type ServiceCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  delay?: number; // <- dodaj delay jako props opcjonalny
};

export function ServiceCard({ imageSrc, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="group flex flex-col bg-red-700 group-hover:bg-red-600 shadow-md w-full max-w-xs mx-auto md:max-w-[392px] lg:max-w-[324px] 
                transition-transform duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      {/* Obrazek */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Tekst */}
      <div className="px-4 pt-4 pb-6 bg-red-700 group-hover:bg-red-600 transition-colors duration-300 text-white flex flex-col justify-center text-center">
        <h4 className="font-bold">{title}</h4>
        <p className="mt-2">{description}</p>
      </div>
    </motion.div>
  );
}
