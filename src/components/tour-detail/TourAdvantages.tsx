import { Check } from "lucide-react";

const advantages = [
  "Проживание в отелях 4* с видом на кальдеру",
  "Трансфер из/в аэропорт на комфортабельном транспорте",
  "Экскурсия по Ие и Фире с профессиональным гидом",
  "Дегустация местных вин в винодельне",
  "Круиз по кальдере с посещением вулкана",
];

export const TourAdvantages = () => {
  return (
    <section className="bg-card rounded-xl border border-border p-6 mb-8">
      <h3 className="font-heading font-semibold text-lg mb-4">
        Преимущества тура
      </h3>
      <ul className="space-y-3">
        {advantages.map((advantage, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-muted-foreground text-sm">{advantage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
