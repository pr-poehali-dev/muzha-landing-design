import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/03c54071-7a1d-42c3-a636-6021cbd5a6f8.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Муза в Феодосии</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Гостевой дом с душой в сердце старого города</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Забронировать
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Атмосфера вдохновения</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              В самом центре старого города, где творили поэты и художники, расположился уютный гостевой дом. 
              Здесь тишина сада сочетается с богемным духом Феодосии, создавая идеальное место для романтического отдыха и творческого вдохновения.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="mb-4 flex justify-center">
                  <Icon name="Trees" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Тихий сад</h3>
                <p className="text-muted-foreground">
                  Утопающий в зелени уютный двор — ваш личный оазис спокойствия в центре города
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="mb-4 flex justify-center">
                  <Icon name="Palette" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Богемная атмосфера</h3>
                <p className="text-muted-foreground">
                  Творческая энергетика места, где жили и творили великие художники и поэты
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="mb-4 flex justify-center">
                  <Icon name="Waves" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Близость моря</h3>
                <p className="text-muted-foreground">
                  Набережная и галерея Айвазовского в шаговой доступности от дома
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши номера</h2>
            <p className="text-lg text-muted-foreground">
              Комфортабельные номера со всеми удобствами для вашего отдыха
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: "url('/img/ceffeb44-1c25-493a-86d6-0ada4afd0748.jpg')" }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Уютные номера</h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Все удобства в номере
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Современный ремонт
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Кондиционер
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Wi-Fi
                  </li>
                </ul>
                <Button className="w-full">Забронировать</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: "url('/img/03c54071-7a1d-42c3-a636-6021cbd5a6f8.jpg')" }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Отдых в саду</h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Зона отдыха в саду
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Беседка для чаепития
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Зеленая территория
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Тишина и уют
                  </li>
                </ul>
                <Button className="w-full">Узнать больше</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Сердце старого города</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Гостевой дом расположен в историческом центре Феодосии — районе, где каждая улица хранит память о великих художниках и поэтах.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Галерея Айвазовского</h4>
                    <p className="text-muted-foreground">5 минут пешком до легендарной галереи</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Набережная</h4>
                    <p className="text-muted-foreground">7 минут до моря и прогулочной набережной</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Старый город</h4>
                    <p className="text-muted-foreground">В центре исторического квартала поэтов и художников</p>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="h-96 md:h-full rounded-lg bg-cover bg-center shadow-xl min-h-[400px]"
              style={{ backgroundImage: "url('/img/c4cca9c5-0c80-4497-b99e-23853b53fd1b.jpg')" }}
            ></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Забронируйте свой отдых</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Окунитесь в атмосферу творчества и романтики старой Феодосии
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
                <p className="font-semibold mb-1">Телефон</p>
                <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
                <p className="font-semibold mb-1">Email</p>
                <p className="text-muted-foreground">info@muza-feodosia.ru</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-3" />
                <p className="font-semibold mb-1">WhatsApp</p>
                <p className="text-muted-foreground">Быстрая связь</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="text-lg px-12">
            Связаться с нами
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Гостевой дом "Муза в Феодосии". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
