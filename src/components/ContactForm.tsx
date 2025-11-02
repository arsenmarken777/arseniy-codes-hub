import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !contact || !message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('send-telegram', {
        body: { name, contact, message }
      });

      if (error) throw error;

      toast({
        title: "Успешно!",
        description: "Ваша заявка отправлена. Я свяжусь с вами в ближайшее время!",
      });

      setName("");
      setContact("");
      setMessage("");
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Оставить заявку</h2>
          <p className="text-xl text-muted-foreground">
            Напишите мне, и я отвечу вам в Telegram
          </p>
        </div>

        <Card className="p-8 bg-gradient-card border-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Ваше имя
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван Иванов"
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact" className="text-sm font-medium">
                Telegram или email
              </label>
              <Input
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="@username или email@example.com"
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Сообщение
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Расскажите о вашем проекте..."
                className="bg-background/50 border-primary/20 focus:border-primary min-h-[150px]"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 shadow-glow transition-all duration-300 hover:scale-105"
              size="lg"
            >
              {isLoading ? (
                "Отправка..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Отправить заявку
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
