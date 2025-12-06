import { UserPlus, Route, Plane } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: UserPlus,
    title: "Создай профиль",
    description: "Расскажи о своих предпочтениях и интересах в путешествиях",
  },
  {
    id: 2,
    icon: Route,
    title: "Выбери маршрут",
    description: "Найди готовый тур или создай персональный маршрут",
  },
  {
    id: 3,
    icon: Plane,
    title: "Отправляйся",
    description: "Наслаждайся незабываемым путешествием с нашей поддержкой",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
          Как работает TripMate
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 rounded-2xl bg-card shadow-card flex items-center justify-center mb-6 group-hover:shadow-card-hover transition-shadow">
                <step.icon className="w-9 h-9 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
