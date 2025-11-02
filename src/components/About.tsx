import { Card } from "@/components/ui/card";
import { Code, Palette, Zap, Globe } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Разработка",
    description: "Создание функциональных веб-приложений с использованием современных технологий"
  },
  {
    icon: Palette,
    title: "Дизайн",
    description: "Красивые и интуитивные интерфейсы, которые радуют пользователей"
  },
  {
    icon: Zap,
    title: "Производительность",
    description: "Быстрая загрузка и отзывчивость на всех устройствах"
  },
  {
    icon: Globe,
    title: "Адаптивность",
    description: "Идеальный вид на смартфонах, планшетах и компьютерах"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">О программировании</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современные веб-технологии открывают безграничные возможности для создания уникальных проектов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
