import destinationSantorini from "@/assets/destination-santorini.jpg";
import destinationParis from "@/assets/destination-paris.jpg";
import destinationBali from "@/assets/destination-bali.jpg";
import destinationTokyo from "@/assets/destination-tokyo.jpg";
import destinationDubai from "@/assets/destination-dubai.jpg";
import destinationSwitzerland from "@/assets/destination-switzerland.jpg";

const destinations = [
  {
    id: 1,
    city: "Санторини",
    country: "Греция",
    description: "Белоснежные домики, лазурное море и незабываемые закаты на острове мечты",
    image: destinationSantorini,
  },
  {
    id: 2,
    city: "Париж",
    country: "Франция",
    description: "Романтика, искусство и гастрономия в самом элегантном городе мира",
    image: destinationParis,
  },
  {
    id: 3,
    city: "Бали",
    country: "Индонезия",
    description: "Тропический рай с древними храмами, рисовыми террасами и пляжами",
    image: destinationBali,
  },
  {
    id: 4,
    city: "Токио",
    country: "Япония",
    description: "Футуристический мегаполис с уникальной культурой и вкуснейшей кухней",
    image: destinationTokyo,
  },
  {
    id: 5,
    city: "Дубай",
    country: "ОАЭ",
    description: "Город будущего с небоскрёбами, роскошными отелями и пустынными сафари",
    image: destinationDubai,
  },
  {
    id: 6,
    city: "Швейцария",
    country: "Альпы",
    description: "Величественные горы, чистейшие озёра и уютные шале в сердце Европы",
    image: destinationSwitzerland,
  },
];

export const DestinationsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
          Популярные направления
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <article
              key={destination.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={destination.image}
                  alt={`${destination.city}, ${destination.country}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-card">
                  <p className="font-heading font-semibold text-lg">
                    {destination.city}, {destination.country}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                  {destination.city}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {destination.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
