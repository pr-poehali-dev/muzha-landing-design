import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">Муза</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#rooms" className="text-foreground hover:text-primary transition-colors">Номера</a>
            <a href="#location" className="text-foreground hover:text-primary transition-colors">Расположение</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/img/a337efe4-0703-4c25-9c93-ee4f3b07c9e2.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white px-6 fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Муза в Феодосии</h2>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Богемная атмосфера старого города поэтов и художников
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Забронировать
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Романтика старого города</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Гостевой дом "Муза" расположен в самом сердце исторической Феодосии. 
                Здесь, где когда-то творили великие поэты и художники, вы найдёте уютное убежище 
                с неповторимой атмосферой творческого вдохновения.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наш тихий сад, элегантные номера с современными удобствами и близость к главным 
                достопримечательностям создают идеальные условия для романтического отдыха.
              </p>
            </div>
            <div className="fade-in">
              <img 
                src="/img/79546987-fbcf-4b21-b9b6-71972e6b5009.jpg" 
                alt="Сад гостевого дома"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Наши преимущества</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow fade-in border-none bg-card">
              <div className="flex justify-center mb-4">
                <Icon name="Key" size={48} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Уютные номера</h4>
              <p className="text-muted-foreground">Комфортабельные номера со всеми удобствами</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow fade-in border-none bg-card">
              <div className="flex justify-center mb-4">
                <Icon name="Palette" size={48} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Богемная атмосфера</h4>
              <p className="text-muted-foreground">Дух творчества и вдохновения</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow fade-in border-none bg-card">
              <div className="flex justify-center mb-4">
                <Icon name="Waves" size={48} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Близость к морю</h4>
              <p className="text-muted-foreground">Набережная в 5 минутах ходьбы</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow fade-in border-none bg-card">
              <div className="flex justify-center mb-4">
                <Icon name="Lightbulb" size={48} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Центр города</h4>
              <p className="text-muted-foreground">Рядом с галереей Айвазовского</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Наши номера</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow fade-in border-none">
              <img 
                src="/img/ce6f750b-3de9-4338-98d5-e22348a3a084.jpg" 
                alt="Стандартный номер"
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h4 className="text-2xl font-semibold mb-4">Стандартный номер</h4>
                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-primary" />
                    Двуспальная кровать
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-primary" />
                    Собственная ванная комната
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-primary" />
                    Кондиционер и Wi-Fi
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-primary" />
                    Вид на сад
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Узнать цену
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow fade-in border-none">
              <img 
                src="/img/ce6f750b-3de9-4338-98d5-e22348a3a084.jpg" 
                alt="Улучшенный номер"
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h4 className="text-2xl font-semibold mb-4">Улучшенный номер</h4>
                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-primary" />
                    Просторная двуспальная кровать
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-primary" />
                    Улучшенная ванная комната
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-primary" />
                    Кондиционер, Wi-Fi, мини-бар
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-primary" />
                    Панорамный вид на старый город
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Узнать цену
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Расположение</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="fade-in">
              <div className="flex justify-center mb-4">
                <Icon name="MapPin" size={40} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Галерея Айвазовского</h4>
              <p className="text-muted-foreground">7 минут пешком</p>
            </div>
            <div className="fade-in">
              <div className="flex justify-center mb-4">
                <Icon name="Waves" size={40} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Набережная</h4>
              <p className="text-muted-foreground">5 минут пешком</p>
            </div>
            <div className="fade-in">
              <div className="flex justify-center mb-4">
                <Icon name="Building" size={40} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Старый город</h4>
              <p className="text-muted-foreground">В самом центре</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Забронируйте ваш отдых</h3>
          <p className="text-xl text-muted-foreground mb-12">
            Окунитесь в атмосферу творческого вдохновения и романтики старой Феодосии
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (XXX) XXX-XX-XX
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Icon name="Mail" size={20} className="mr-2" />
              info@muza-feodosia.ru
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-accent-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-2xl font-bold mb-4">Муза</h4>
              <p className="text-accent-foreground/80">Гостевой дом в центре старой Феодосии</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <p className="text-accent-foreground/80 mb-2">г. Феодосия, ул. Старого Города</p>
              <p className="text-accent-foreground/80">info@muza-feodosia.ru</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Следите за нами</h5>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="ghost" size="icon" className="text-accent-foreground hover:text-primary">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-accent-foreground hover:text-primary">
                  <Icon name="Facebook" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-accent-foreground hover:text-primary">
                  <Icon name="Mail" size={24} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-accent-foreground/20 text-center text-accent-foreground/60">
            <p>© 2024 Гостевой дом "Муза". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
