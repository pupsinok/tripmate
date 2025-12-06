import tourHeroImage from "@/assets/tour-hero.jpg";

export const TourHero = () => {
  return (
    <section className="relative h-64 md:h-80 overflow-hidden">
      <img
        src={tourHeroImage}
        alt="Магия Санторини"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-card animate-fade-in">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-3">
            Магия Санторини
          </h1>
          <p className="text-card/90 text-lg md:text-xl">
            Незабываемое путешествие на остров мечты
          </p>
        </div>
      </div>
    </section>
  );
};
