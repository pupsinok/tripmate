import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ToursPagination = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button variant="outline" size="sm" className="gap-1">
        <ChevronLeft className="w-4 h-4" />
        Назад
      </Button>
      
      <Button size="sm" className="min-w-[40px]">1</Button>
      <Button variant="outline" size="sm" className="min-w-[40px]">2</Button>
      <Button variant="outline" size="sm" className="min-w-[40px]">3</Button>
      <span className="text-muted-foreground px-2">...</span>
      <Button variant="outline" size="sm" className="min-w-[40px]">12</Button>
      
      <Button variant="outline" size="sm" className="gap-1">
        Вперёд
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};
