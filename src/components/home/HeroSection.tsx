import { Search, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel.jpg";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[650px] md:min-h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Путешествие в горы"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        
        {/* === АНИМИРОВАННЫЕ ЗАГОЛОВКИ === */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-extrabold leading-tight
                     text-[8vw] md:text-6xl lg:text-7xl 
                     text-white"
        >
          НАХОДИ И СОЗДАВАЙ
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="font-extrabold leading-tight text-primary 
                     text-[7vw] md:text-5xl lg:text-6xl mt-2 
                     whitespace-nowrap"
        >
          идеальные путешествия
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-4 text-neutral-200 
                     text-[3.6vw] md:text-lg lg:text-xl 
                     max-w-2xl mx-auto"
        >
          персональные маршруты, групповые поездки и авторские туры — всё в одном месте
        </motion.p>

        {/* === Search Box === */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          className="bg-card rounded-xl shadow-card-hover p-4 md:p-6 max-w-2xl mx-auto mt-6"
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

            <Button variant="hero" className="w-full">
              Найти тур
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
