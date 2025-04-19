'use client';

import { motion } from "framer-motion";
import Image from "next/image";

type Review = {
  name: string;
  content: string;
};

const reviews: Review[] = [
  {
    name: "Anna",
    content: "Świetna obsługa i dokładna naprawa – auto wygląda jak nowe!",
  },
  {
    name: "Marek",
    content: "Profesjonalnie, szybko i w dobrej cenie. Polecam z czystym sumieniem.",
  },
  {
    name: "Kasia",
    content: "Zespół zna się na rzeczy. Pomogli mi po stłuczce i wszystko poszło sprawnie.",
  },
];

export function ReviewsSection() {
  return (
    <section id="opinie" className="lg:scroll-mt-32 bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Opinie klientów</h2>

        <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:justify-between">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="group bg-white p-6 shadow-md flex flex-col gap-4 w-full lg:max-w-[30%] transition-transform duration-300 transform hover:scale-[1.03] hover:shadow-xl hover:bg-gray-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg text-gray-700">{review.name}</span>
                <div className="w-6 h-6 relative group-hover:scale-110 transition-all duration-300">
                  <Image
                    src="/images/thumb-desktop.png"
                    alt="Kciuk w górę"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <p className="text-gray-700">{review.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
