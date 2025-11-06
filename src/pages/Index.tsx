import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Index = () => {
  const [demoReview] = useState({
    platform: "Ozon",
    rating: 4,
    text: "Товар хороший, но доставка задержалась на 2 дня",
    response: "Благодарим за отзыв! Рады, что товар вам понравился. Приносим извинения за задержку доставки — мы передали информацию логистической службе для улучшения сервиса. Будем рады видеть вас снова! 🎁"
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Запись на демо:", formData);
    setIsDialogOpen(false);
    setFormData({ name: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ReviewAI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Возможности</a>
            <a href="#integrations" className="text-sm hover:text-primary transition-colors">Интеграции</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Тарифы</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
              Начать бесплатно
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden tech-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                <Icon name="Zap" size={14} className="mr-1" />
                AI-автоответчик нового поколения
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Отвечайте на отзывы{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent glow-text">
                  в 10 раз быстрее
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Искусственный интеллект мгновенно генерирует персонализированные ответы на отзывы покупателей Ozon, Wildberries и Яндекс Маркет
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white glow-box hover:scale-105 transition-transform">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Попробовать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть демо
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span className="text-sm text-muted-foreground">Без кредитной карты</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span className="text-sm text-muted-foreground">Настройка за 5 минут</span>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 glow-box">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    {demoReview.platform}
                  </Badge>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < demoReview.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm text-foreground/80">{demoReview.text}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Icon name="Sparkles" size={16} className="animate-pulse" />
                  <span>AI генерирует ответ...</span>
                </div>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm">{demoReview.response}</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить ответ
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Icon name="Lightbulb" size={14} className="mr-1" />
              Возможности
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Все инструменты для работы с отзывами
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Автоматизируйте рутину и повышайте лояльность клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Brain",
                title: "Умный AI-ассистент",
                description: "Нейросеть анализирует тональность отзыва и генерирует персонализированный ответ с учётом вашего tone of voice"
              },
              {
                icon: "Gauge",
                title: "Мгновенная генерация",
                description: "Получайте готовые ответы за 2-3 секунды. Больше никаких часов на обработку отзывов"
              },
              {
                icon: "Languages",
                title: "Поддержка эмодзи",
                description: "AI автоматически добавляет релевантные эмодзи для более тёплого общения с клиентами"
              },
              {
                icon: "BarChart3",
                title: "Аналитика отзывов",
                description: "Отслеживайте динамику рейтинга, частые проблемы и настроение клиентов в реальном времени"
              },
              {
                icon: "Users",
                title: "Командная работа",
                description: "Распределяйте отзывы между менеджерами, настраивайте роли и отслеживайте производительность"
              },
              {
                icon: "Shield",
                title: "Безопасность данных",
                description: "Все данные шифруются и хранятся в соответствии с требованиями 152-ФЗ"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-primary/10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              <Icon name="Plug" size={14} className="mr-1" />
              Интеграции
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Подключайте все маркетплейсы в один клик
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Управляйте отзывами со всех площадок в едином интерфейсе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ozon",
                color: "from-blue-500 to-blue-600",
                features: ["API интеграция", "Автосинхронизация", "Push-уведомления"]
              },
              {
                name: "Wildberries",
                color: "from-purple-500 to-purple-600",
                features: ["Полный доступ к API", "Реал-тайм обновления", "Статистика продаж"]
              },
              {
                name: "Яндекс Маркет",
                color: "from-red-500 to-yellow-500",
                features: ["OAuth авторизация", "Webhook события", "История изменений"]
              }
            ].map((platform, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl hover:shadow-primary/20 transition-all hover:scale-105 bg-card/50 backdrop-blur-sm border-primary/10">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto mb-6 glow-box`}>
                  <Icon name="ShoppingBag" className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="CheckCircle2" className="text-primary" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary">
                  Подключить
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              <Icon name="CreditCard" size={14} className="mr-1" />
              Тарифы
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Прозрачные цены для любого бизнеса
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Начните бесплатно и масштабируйтесь по мере роста
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Старт",
                price: "Бесплатно",
                period: "",
                features: ["До 50 ответов/мес", "1 маркетплейс", "Базовая аналитика", "Email поддержка"],
                popular: false
              },
              {
                name: "Профи",
                price: "2 990 ₽",
                period: "/мес",
                features: ["До 500 ответов/мес", "Все маркетплейсы", "Расширенная аналитика", "Командная работа", "Приоритетная поддержка", "Свой tone of voice"],
                popular: true
              },
              {
                name: "Бизнес",
                price: "9 990 ₽",
                period: "/мес",
                features: ["Безлимитные ответы", "Все маркетплейсы", "Полная аналитика", "API доступ", "Персональный менеджер", "SLA 99.9%"],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`p-8 relative ${plan.popular ? 'border-primary shadow-xl shadow-primary/20 scale-105' : 'border-primary/10'} bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary">
                    Популярный
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-primary/20 hover:bg-primary/30'}`}>
                  {plan.price === "Бесплатно" ? "Начать бесплатно" : "Выбрать план"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Icon name="HelpCircle" size={14} className="mr-1" />
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Частые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о сервисе
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "Как быстро настроить интеграцию?",
                a: "Интеграция занимает 5-10 минут. Просто подключите API ключи от маркетплейсов в настройках — и всё готово к работе."
              },
              {
                q: "Можно ли редактировать ответы перед отправкой?",
                a: "Конечно! AI генерирует черновик ответа, который вы можете отредактировать перед публикацией. Также можно настроить автоматическую публикацию."
              },
              {
                q: "Безопасно ли передавать доступы к маркетплейсам?",
                a: "Да, мы используем только официальные API маркетплейсов с read/write правами только для отзывов. Все данные шифруются и хранятся по стандартам безопасности."
              },
              {
                q: "Можно ли настроить свой стиль ответов?",
                a: "В тарифе Профи и выше доступна настройка tone of voice: формальный/неформальный стиль, использование эмодзи, шаблонные фразы для вашего бренда."
              },
              {
                q: "Что если закончатся ответы в тарифе?",
                a: "Вы получите уведомление при достижении 80% лимита. Можно докупить пакет ответов или перейти на следующий тариф в любой момент."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-primary/10 rounded-lg px-6 bg-card/30 backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы автоматизировать ответы на отзывы?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к 500+ продавцам, которые уже экономят 10+ часов в неделю с ReviewAI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white glow-box hover:scale-105 transition-transform">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => setIsDialogOpen(true)}
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на демо
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={16} />
                </div>
                <span className="font-bold text-lg">ReviewAI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-сервис для автоматизации ответов на отзывы
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#integrations" className="hover:text-primary transition-colors">Интеграции</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Связаться с нами</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  support@reviewai.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 ReviewAI. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-sm border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl">Записаться на демо</DialogTitle>
            <DialogDescription>
              Оставьте свои контакты, и мы свяжемся с вами для демонстрации возможностей ReviewAI
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="border-primary/20 focus:border-primary"
                />
              </div>
            </div>
            <DialogFooter className="gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="border-primary/20"
              >
                Отменить
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary"
              >
                <Icon name="Calendar" size={16} className="mr-2" />
                Записаться
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;