import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Лендинги",
    description: "Одностраничные сайты для представления продукта или услуги",
    features: ["Современный дизайн", "Быстрая загрузка", "Форма обратной связи", "Адаптивная верстка"]
  },
  {
    title: "Корпоративные сайты",
    description: "Многостраничные сайты для компаний и организаций",
    features: ["Удобная навигация", "Система управления", "Интеграции", "SEO оптимизация"]
  },
  {
    title: "Веб-приложения",
    description: "Интерактивные приложения с богатым функционалом",
    features: ["База данных", "Аутентификация", "API интеграция", "Реал-тайм обновления"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Создаю веб-проекты любой сложности под ключ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
