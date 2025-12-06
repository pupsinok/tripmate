import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const filterGroups = [
  {
    title: "Фильтр 1",
    options: ["Фильтр 1.1", "Фильтр 1.2", "Фильтр 1.3"],
  },
  {
    title: "Фильтр 2",
    options: ["Фильтр 2.1", "Фильтр 2.2", "Фильтр 2.3"],
  },
  {
    title: "Фильтр 3",
    options: ["Фильтр 3.1", "Фильтр 3.2", "Фильтр 3.3"],
  },
];

export const ToursFilters = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-5 sticky top-24">
      <h3 className="font-heading font-semibold text-lg mb-4">Фильтры</h3>
      
      {/* Search within filters */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <input
          type="text"
          placeholder="Поиск по фильтрам"
          className="w-full pl-9 pr-3 py-2 rounded-lg border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>

      {/* Filter groups */}
      <div className="space-y-6">
        {filterGroups.map((group) => (
          <div key={group.title}>
            <h4 className="font-heading font-medium text-sm mb-3">{group.title}</h4>
            <div className="space-y-2">
              {group.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-input text-primary focus:ring-primary/20 focus:ring-offset-0"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Button className="w-full mt-6">Применить фильтры</Button>
    </div>
  );
};
