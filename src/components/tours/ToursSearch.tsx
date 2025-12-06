import { Search, Calendar, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ToursSearch = () => {
  return (
    <div className="bg-card border-b border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Поиск туров..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-input bg-background text-muted-foreground hover:border-primary/50 transition-colors">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Город / Страна</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-input bg-background text-muted-foreground hover:border-primary/50 transition-colors">
            <span className="text-sm">Бюджет</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-input bg-background text-muted-foreground hover:border-primary/50 transition-colors">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Даты поездки</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-input bg-background text-muted-foreground hover:border-primary/50 transition-colors">
            <span className="text-sm">Формат тура</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <Button variant="hero">Найти тур</Button>
        </div>
      </div>
    </div>
  );
};
