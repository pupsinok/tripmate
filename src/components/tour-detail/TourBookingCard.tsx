import { useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const TourBookingCard = () => {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [participants, setParticipants] = useState(2);

  const pricePerPerson = 85000;
  const total = pricePerPerson * participants;

  const incrementParticipants = () => {
    if (participants < 10) setParticipants(participants + 1);
  };

  const decrementParticipants = () => {
    if (participants > 1) setParticipants(participants - 1);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-card sticky top-24">
      {/* Price */}
      <div className="mb-6">
        <div className="font-heading font-bold text-3xl text-foreground">
          {pricePerPerson.toLocaleString("ru-RU")}₽
        </div>
        <p className="text-muted-foreground text-sm">за человека</p>
      </div>

      {/* Date picker */}
      <div className="mb-4">
        <label className="text-sm font-medium text-foreground block mb-2">
          Даты поездки
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !dateRange.from && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "dd.MM.yyyy", { locale: ru })} —{" "}
                    {format(dateRange.to, "dd.MM.yyyy", { locale: ru })}
                  </>
                ) : (
                  format(dateRange.from, "dd.MM.yyyy", { locale: ru })
                )
              ) : (
                <span>Выберите даты</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange.from}
              selected={dateRange}
              onSelect={(range) =>
                setDateRange({ from: range?.from, to: range?.to })
              }
              numberOfMonths={1}
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Participants counter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-foreground block mb-2">
          Количество участников
        </label>
        <div className="flex items-center gap-4">
          <button
            onClick={decrementParticipants}
            disabled={participants <= 1}
            className="w-10 h-10 rounded-lg border border-input flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="font-heading font-semibold text-lg min-w-[40px] text-center">
            {participants}
          </span>
          <button
            onClick={incrementParticipants}
            disabled={participants >= 10}
            className="w-10 h-10 rounded-lg border border-input flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Price calculation */}
      <div className="border-t border-border pt-4 mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>
            {pricePerPerson.toLocaleString("ru-RU")}₽ × {participants} участника
          </span>
          <span>{total.toLocaleString("ru-RU")}₽</span>
        </div>
        <div className="flex justify-between font-heading font-semibold text-lg">
          <span>Итого</span>
          <span>{total.toLocaleString("ru-RU")}₽</span>
        </div>
      </div>

      {/* CTA Button */}
      <Button variant="hero" className="w-full" size="lg">
        Забронировать тур
      </Button>
    </div>
  );
};
