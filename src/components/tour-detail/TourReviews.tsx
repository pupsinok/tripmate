import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Анна Сидорова",
    rating: 5,
    text: "Потрясающий тур! Организация на высшем уровне, гид Мария очень профессиональна и влюблена в Грецию. Отель превзошёл ожидания — просыпаться с видом на кальдеру бесценно. Закат в Ие — это must-see! Рекомендую всем!",
  },
  {
    id: 2,
    name: "Дмитрий Козлов",
    rating: 5,
    text: "Ездили с женой на годовщину свадьбы. Всё было идеально! Особенно понравился круиз по кальдере и купание в горячих источниках. Винодельня тоже приятно удивила. Спасибо команде TripMate за незабываемые впечатления!",
  },
  {
    id: 3,
    name: "Елена Морозова",
    rating: 5,
    text: "Уже второй раз беру туры через TripMate и снова в восторге. Санторини — это сказка! Всё продумано до мелочей, никаких накладок. Отдельное спасибо за рекомендации по ресторанам — каждый ужин был праздником.",
  },
  {
    id: 4,
    name: "Михаил Петров",
    rating: 4,
    text: "Отличный тур, красивые места. Единственное — хотелось бы больше свободного времени для самостоятельных прогулок. В остальном всё супер: комфортный отель, вкусная еда, интересные экскурсии.",
  },
];

export const TourReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleReviews = 2;
  const maxIndex = Math.max(0, reviews.length - visibleReviews);

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading font-bold text-2xl md:text-3xl">Отзывы</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
          {reviews.slice(currentIndex, currentIndex + visibleReviews).map((review) => (
            <article
              key={review.id}
              className="bg-card rounded-xl border border-border p-6 shadow-card animate-fade-in"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-semibold text-primary">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold">{review.name}</h4>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
