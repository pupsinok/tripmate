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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        {/* ---- FIXED TEXT BLOCK ---- */}
        <div className="max-w-4xl mx-auto text-white drop-shadow-lg">
          
          {/* Line 1 */}
          <h1 className="font-extrabold text-5xl md:text-7xl whitespace-nowrap leading-tight">
            НАХОДИ И СОЗДАВАЙ
          </h1>

          {/* Line 2 */}
          <h2 className="font-extrabold text-4xl md:text-6xl text-primary mt-3 whitespace-nowrap leading-tight">
            идеальные путешествия
          </h2>

          {/* Line 3 */}
          <p className="mt-4 text-lg md:text-xl text-neutral-200 whitespace-nowrap leading-normal">
            персональные маршруты, групповые поездки и авторские туры — всё в одном месте
          </p>

        </div>

        {/* ---- Search Box ---- */}
        <div className="bg-card rounded-xl shadow-card-hover p-4 md:p-6 max-w-2xl mx-auto mt-10">
          
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
    </section>
  );
};
