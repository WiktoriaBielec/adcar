'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="onas" className="lg:scroll-mt-32 lg:px-16 md:px-10 px-4 md:py-24 py-14">
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row-reverse lg:items-stretch gap-6 max-w-6xl mx-auto">

        {/* Tekst z animacją */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-6 lg:w-[420px]">
            Profesjonalne blacharstwo samochodowe
          </h2>

          <div className="hidden md:block space-y-2 md:space-y-10 lg:space-y-6">
            <p>
              Od kilku lat zajmujemy się naprawą karoserii, usuwaniem wgnieceń i renowacją nadwozia. 
              Oferujemy kompleksowe usługi blacharskie – od drobnych poprawek po poważne naprawy powypadkowe - realizujemy rozliczenia bezgotówkowe.
            </p>
            <p>
              Dbamy o precyzję i jakość, przywracając pojazdom pierwotny wygląd. Skontaktuj się z nami!
            </p>
          </div>
        </motion.div>

        {/* Obraz z animacją */}
        <motion.div
          className="lg:w-1/2 relative h-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Desktop */}
          <div className="hidden lg:block w-full h-full">
            <Image
              src="/images/about-desktop.png"
              alt="Blacharz przy pracy"
              width={495}
              height={458}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          {/* Mobile */}
          <div className="block lg:hidden w-full h-full">
            <Image
              src="/images/about-mobile.png"
              alt="Blacharz przy pracy"
              width={287}
              height={256}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
