import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import destinationSantorini from "@/assets/destination-santorini.jpg";
import destinationParis from "@/assets/destination-paris.jpg";
import destinationBali from "@/assets/destination-bali.jpg";
import destinationTokyo from "@/assets/destination-tokyo.jpg";

const tours = [
  {
    id: 1,
    title: "Магия Санторини",
    author: "Мария Петрова",
    rating: 4.9,
    reviews: 29,
    price: 85000,
    image: destinationSantorini,
  },
  {
    id: 2,
    title: "Романтика Парижа",
    author: "Алексей Иванов",
    rating: 4.9,
    reviews: 29,
    price: 85000,
    image: destinationParis,
  },
  {
    id: 3,
    title: "Тропический Бали",
    author: "Елена Смирнова",
    rating: 4.9,
    reviews: 29,
    price: 85000,
    image: destinationBali,
  },
  {
    id: 4,
    title: "Загадочный Токио",
    author: "Дмитрий Козлов",
    rating: 4.9,
    reviews: 29,
    price: 85000,
    image: destinationTokyo,
  },
];

export const ToursList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tours.map((tour, index) => (
        <article
          key={tour.id}
          className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className="font-heading font-semibold text-lg mb-1">
              {tour.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              Автор: {tour.author}
            </p>
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-primary text-primary"
                />
              ))}
              <span className="text-sm text-muted-foreground ml-1">
                {tour.rating} ({tour.reviews})
              </span>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between">
              <div className="font-heading font-bold text-xl">
                {tour.price.toLocaleString('ru-RU')}₽
              </div>
              <Link to={`/tours/${tour.id}`}>
                <Button size="sm">Подробнее</Button>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
