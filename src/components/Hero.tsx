import { Button } from "@/components/ui/button";
import { Code2, ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4 animate-glow-pulse">
          <Code2 className="w-16 h-16 text-primary" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent leading-tight">
          Арсений Печенкин
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Создание современных веб-сайтов и веб-приложений
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
          >
            Оставить заявку
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Узнать больше
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary mx-auto" />
        </div>
      </div>
    </section>
  );
};
