import { Search, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel.jpg";
import { motion } from "framer-motion";

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
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Заголовок */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            font-extrabold 
            text-[clamp(2.2rem,8vw,5rem)] 
            leading-[1.1] 
            max-w-[900px] 
            mx-auto 
            text-white
          "
        >
          НАХОДИ И СОЗДАВАЙ
        </motion.h1>

        {/* Подзаголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            font-extrabold 
            text-[clamp(1.8rem,6.5vw,3.5rem)] 
            leading-[1.1]
            max-w-[900px] 
            mx-auto 
            mt-2 
            text-primary
          "
        >
          идеальные путешествия
        </motion.h2>

        {/* Маленький текст */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="
            mt-4 
            text-[clamp(0.9rem,2.2vw,1.3rem)] 
            text-neutral-200 
            max-w-[700px] 
            mx-auto 
            leading-relaxed
          "
        >
          персональные маршруты, групповые поездки и авторские туры — всё в одном месте
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-card rounded-xl shadow-card-hover p-4 md:p-6 max-w-3xl w-full mx-auto mt-8"
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
