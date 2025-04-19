'use client';

import { Button } from "./Button";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
      <section className="relative text-white h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat
                      bg-[url('/images/hero-mobile.png')] 
                      sm:bg-[url('/images/hero-tablet.png')] 
                      lg:bg-[url('/images/hero-desktop.png')] 
                      z-[-1]"/>     
        <div className="text-center
                        w-72
                        sm:w-[550px]
                        lg:w-6xl" >
            
            <motion.h1 
              className="text-[1rem] md:text-[2.75rem] font-light text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}

            >
                BLACHARSTWO SAMOCHODOWE 
            </motion.h1>
            <motion.h1 
              className="text-[1.5rem] md:text-[3.75rem] font-bold text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}

            >
                ADCAR 
            </motion.h1>
            <motion.h3 
              className="mt-4" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{ once: true }}

            >
                Naprawa karoserii i usuwanie wgnieceń, precyzja i jakość
            </motion.h3>
            <a href="#kontakt">
              <Button >Skontaktuj się </Button>
            </a>
        </div>
      </section>
    );
}
  