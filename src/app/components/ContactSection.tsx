'use client';

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="kontakt" className="relative md:content-normal content-center h-screen lg:p-36 md:py-24 md:px-24 py-12 px-6 bg-cover bg-center 
                        bg-[url('/images/contact-mobile.png')] md:bg-[url('/images/contact-desktop.png')]">
      <motion.div 
        className="max-w-6xl mx-auto text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Tytuł */}
        <h2 className="">Dane kontaktowe</h2>

        {/* Mobile/Tablet Layout */}
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold">Adres</h4>
            <p>ul. Gaik 25a</p>
            <p>31-338 Kraków</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold">E-mail</h4>
            <p>arti.a@interia.pl</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold">Telefon</h4>
            <p>+48 503 013 451</p>
          </div>
          
          {/* Godziny otwarcia */}
          <div className="mt-6 flex flex-col gap-2">
            <h4 className="text-xl font-semibold">Godziny otwarcia</h4>
            <p>poniedziałek - piątek: 9:00 - 17:00</p>
            <p>sobota - 10:00 - 15:00</p>
            <p>niedziela - zamknięte</p>
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="lg:mt-20 mt-12 hidden md:grid md:grid-cols-3 md:gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold">Adres</h4>
            <p>ul. Gaik 25a</p>
            <p>31-338 Kraków</p>
            <h4 className="text-xl font-semibold">E-mail</h4>
            <p>arti.a@interia.pl</p>

            <h4 className="text-xl font-semibold mt-4">Telefon</h4>
            <p>+48 503 013 451</p>
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <h4 className="text-xl font-semibold">Godziny otwarcia</h4>
            <p className="mt-4">poniedziałek - piatek - 9:00 - 17:00</p>
            <p>sobota - 10:00 - 15:00</p>
            <p>niedziela - zamknięte</p>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
