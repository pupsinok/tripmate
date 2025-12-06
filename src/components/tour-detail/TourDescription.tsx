import tourGallery1 from "@/assets/tour-gallery-1.jpg";
import tourGallery2 from "@/assets/tour-gallery-2.jpg";

export const TourDescription = () => {
  return (
    <section className="mb-8">
      <h2 className="font-heading font-semibold text-2xl mb-4">Описание тура</h2>
      <div className="text-muted-foreground leading-relaxed space-y-4 mb-6">
        <p>
          Откройте для себя магию Санторини — одного из самых романтичных островов 
          Греции. Белоснежные домики, вырубленные в скалах, лазурные воды Эгейского 
          моря и потрясающие закаты ждут вас.
        </p>
        <p>
          За 5 дней вы посетите знаменитую Ию с её живописными улочками, 
          попробуете местную кухню в традиционных тавернах, искупаетесь на 
          уникальных красных и чёрных пляжах, а также узнаете древнюю историю 
          острова на раскопках Акротири.
        </p>
      </div>

      {/* Photo gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl overflow-hidden shadow-card group cursor-pointer">
          <img
            src={tourGallery1}
            alt="Санторини закат"
            className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-card group cursor-pointer">
          <img
            src={tourGallery2}
            alt="Греческая таверна"
            className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};
