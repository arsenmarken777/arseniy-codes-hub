import { Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-primary/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">Арсений Печенкин</span>
        </div>
        
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Все права защищены
        </p>
      </div>
    </footer>
  );
};
