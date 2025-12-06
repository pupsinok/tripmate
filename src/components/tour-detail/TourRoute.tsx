import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const routeDays = [
  {
    day: 1,
    title: "Прибытие в Санторини",
    description:
      "Встреча в аэропорту, трансфер в отель. Размещение и отдых. Вечером — знакомство с группой и прогулка по набережной Фиры. Ужин в традиционной таверне с видом на кальдеру.",
  },
  {
    day: 2,
    title: "Ия и закат",
    description:
      "Завтрак в отеле. Экскурсия в Ию — самую живописную деревню острова. Прогулка по узким улочкам, посещение смотровых площадок, время для фотографий. Свободное время для обеда. Вечером — наблюдение за знаменитым закатом в Ие.",
  },
  {
    day: 3,
    title: "Круиз по кальдере",
    description:
      "Морская прогулка на катамаране вокруг кальдеры. Посещение действующего вулкана Неа Камени, купание в горячих источниках. Обед на борту. Возвращение в отель, свободный вечер.",
  },
  {
    day: 4,
    title: "Пляжи и виноделие",
    description:
      "Посещение уникальных пляжей — Красного и Чёрного. Свободное время для купания. После обеда — экскурсия на винодельню, дегустация местных вин. Прощальный ужин в ресторане с греческой музыкой.",
  },
];

export const TourRoute = () => {
  return (
    <section className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
          Маршрут тура
        </h2>

        <Accordion type="single" collapsible defaultValue="day-1" className="space-y-3">
          {routeDays.map((day) => (
            <AccordionItem
              key={day.day}
              value={`day-${day.day}`}
              className="bg-card rounded-xl border border-border px-6 py-0 data-[state=open]:shadow-card transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-heading font-semibold">
                  День {day.day}: {day.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {day.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
