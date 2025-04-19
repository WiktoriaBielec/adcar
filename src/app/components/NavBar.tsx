"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="absolute w-full top-0 z-50 flex items-center justify-between lg:py-12 lg:px-12 py-8 px-6 ">
        {/* Logo */}
        <div>
            <button onClick={() => {}} aria-label="Logo">
                {/* Logo mobilne i tabletowe */}
                <Image
                    src={"/icons/logo-mobile.png"}
                    alt="Logo Mobile"
                    width={78}
                    height={19}
                    className="block lg:hidden"
                />

                {/* Logo desktopowe */}
                <Image
                    src={"/icons/logo-tablet.png"}
                    alt="Logo Desktop"
                    width={97}
                    height={62}
                    className="hidden lg:block"
                />
            </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-10 items-center">
            <a href="#onas">O nas</a>
            <a href="#uslugi">Usługi</a>
            <a href="#opinie">Opinie</a>
            <a href="#kontakt">Kontakt</a>
        </div>

        {/* Mobile / Tablet menu */}
        <div className="flex items-center space-x-4 lg:hidden">
            {!isOpen && (
                <a href="tel:+48123456789" aria-label="Zadzwoń">
                <Image
                    src="/icons/phone-mobile.png"
                    alt="Telefon"
                    width={24}
                    height={24}
                />
                </a>
            )}
            

            <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <Image
                src={isOpen ? "/icons/close-mobile.png" : "/icons/menu-mobile.png"}
                alt="Menu"
                width={24}
                height={24}
            />
            </button>
        </div>
    </nav>
    
    {/* Full-screen mobile menu */}
    {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-40 flex justify-center ">
        <div className="w-full h-full flex flex-col justify-center space-y-6 py-20 px-8">

            <Link href="#home" className="text-2xl text-black" onClick={() => setIsOpen(false)}><li>Strona główna</li></Link>
            <Link href="#onas" className="text-2xl text-black" onClick={() => setIsOpen(false)}><li>O nas</li></Link>
            <Link href="#uslugi" className="text-2xl text-black" onClick={() => setIsOpen(false)}><li>Usługi</li></Link>
            <Link href="#opinie" className="text-2xl text-black" onClick={() => setIsOpen(false)}><li>Opinie</li></Link>
            <Link href="#kontakt" className="text-2xl text-black" onClick={() => setIsOpen(false)}><li>Kontakt</li></Link>

            <div className="mt-4">
                <h5 className="text-white uppercase">ul. Gaik 25A</h5>
                <h5 className="text-white uppercase">00-000 Kraków</h5>
            </div>
            <a 
                href="tel:+48123456789" 
                aria-label="Zadzwoń" 
                className="mt-20 flex text-white uppercase font-bold tracking-widest">
                Zadzwoń
            </a>
        </div>
    </div>
    )}
  </>
  );
}
