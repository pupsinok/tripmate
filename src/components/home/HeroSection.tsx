import { Search, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Путешествие в горы"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white leading-tight">
            НАХОДИ И СОЗДАВАЙ
          </h1>

          <h2 className="text-4xl md:text-6xl font-extrabold text-center text-primary whitespace-nowrap">
            идеальные путешествия
          </h2>

          <p className="text-card/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            персональные маршруты, групповые поездки и авторские туры — всё в одном месте
          </p>

          {/* Search Box */}
          <div className="bg-card rounded-xl shadow-card-hover p-4 md:p-6 max-w-2xl mx-auto">
            {/* Search input */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Поиск мест и направлений"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <button className="flex items-center justify-between px-4 py-2.5 rounded-lg border border-input bg-background text-muted-foreground hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Даты</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between px-4 py-2.5 rounded-lg border border-input bg-background text-muted-foreground hover:border-primary/50 transition-colors">
                <span className="text-sm">Формат</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between px-4 py-2.5 rounded-lg border border-input bg-background text-muted-foreground hover:border-primary/50 transition-colors">
                <span className="text-sm">Бюджет</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <Button variant="hero" className="w-full">
                Найти тур
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
