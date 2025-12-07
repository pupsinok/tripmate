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

        {/* Animated Title Block */}
        <div className="text-center text-white mt-6 mb-6 animate-fade-in opacity-0 animation-delay-300">

          {/* FIRST LINE */}
          <h1
            className="
              font-extrabold 
              whitespace-nowrap 
              tracking-tight
              mx-auto
              animate-slide-up opacity-0
              text-[clamp(1.7rem,6vw,4.5rem)]   /* динамический размер */
              leading-[1.1]
            "
          >
            НАХОДИ И СОЗДАВАЙ
          </h1>

          {/* SECOND LINE */}
          <h2
            className="
              font-extrabold 
              text-primary 
              whitespace-nowrap 
              tracking-tight
              mx-auto mt-2
              animate-slide-up opacity-0 animation-delay-150
              text-[clamp(1.4rem,5vw,3.8rem)]
              leading-[1.1]
            "
          >
            идеальные путешествия
          </h2>

          {/* SUBTITLE */}
          <p
            className="
              mt-4 
              text-neutral-200 
              max-w-2xl mx-auto 
              leading-relaxed
              animate-fade-in opacity-0 animation-delay-300
              text-[clamp(0.9rem,2.5vw,1.3rem)]
            "
          >
            персональные маршруты, групповые поездки и авторские туры — всё в одном месте
          </p>
        </div>

        {/* Search Box */}
        <div className="
            bg-card rounded-xl shadow-card-hover 
            p-4 md:p-6 max-w-2xl mx-auto
            animate-fade-in opacity-0 animation-delay-500
          "
        >
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

            <Button variant="hero" className="w-full hover:scale-105 active:scale-95 transition-all">
              Найти тур
            </Button>
          </div>
        </div>
      </div>

      {/* ANIMATION CLASSES */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease forwards;
        }
        .animation-delay-150 { animation-delay: .15s; }
        .animation-delay-300 { animation-delay: .3s; }
        .animation-delay-500 { animation-delay: .5s; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </section>
  );
};
