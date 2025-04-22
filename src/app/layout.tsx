import "./globals.css";
import { Roboto, Public_Sans } from 'next/font/google';

export const metadata = {
  title: 'ADCAR – Mechanik Samochodowy | Kraków',
  description: 'Doświadczony mechanik samochodowy z Krakowa. Naprawy, wulkanizacja i serwis aut.',
  keywords: ['mechanik', 'Kraków', 'naprawa samochodów', 'serwis auta', 'wulkanizacja'],
  openGraph: {
    title: 'ADCAR – Mechanik Samochodowy',
    description: 'Profesjonalny mechanik z wieloletnim doświadczeniem. Umów się na wizytę już dziś!',
    url: 'https://adcar.vercel.app/',
    siteName: 'ADCAR Mechanik',
    images: [
      {
        url: '/icons/logo-mobile.png',
        width: 1200,
        height: 630,
        alt: 'Warsztat samochodowy Jan Kowalski',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-roboto',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-public-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${publicSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
