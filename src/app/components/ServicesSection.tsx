import { ServiceCard } from "./ServiceCard";

export function ServiceSection() {
  return (
    <section id="uslugi" className="lg:scroll-mt-32 bg-dark-gray py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-center font-semibold mb-12">
            Nasza oferta
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
        <ServiceCard
          imageSrc="/images/servis1-mobile.png"
          title="Blacharstwo"
          description="Naprawa karoserii, usuwanie wgnieceń oraz renowacja nadwozia."
          delay={0}
        />
        <ServiceCard
          imageSrc="/images/servis2-mobile.png"
          title="Wulkanizacja"
          description="Wymiana, wyważanie oraz naprawa opon."
          delay={0.1}
        />
        <ServiceCard
          imageSrc="/images/servis3-mobile.png"
          title="Drobna mechanika"
          description="Bieżące naprawy, wymiana części i konserwacja pojazdów."
          delay={0.2}
        />

        </div>
      </div>
    </section>
  );
}
