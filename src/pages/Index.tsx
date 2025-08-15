import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 12, minutes: 35 });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Icon name="Home" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ShelsMebel</h1>
                <p className="text-sm text-gray-600">Стильные гардеробные под ваш интерьер</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+74951234567" className="text-lg font-semibold text-gray-900">
                +7 (495) 123-45-67
              </a>
              <Button 
                variant="outline" 
                onClick={() => setIsFormOpen(true)}
                className="animate-pulse-glow"
              >
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-primary text-white py-3">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-lg font-semibold">🎉 Гардеробные в рассрочку 0%! Успейте оформить!</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Индивидуальные 
                <span className="text-primary"> гардеробные системы</span> с рассрочкой 
                <span className="text-secondary"> 0% на 12 месяцев!</span>
              </h1>
              <p className="text-xl text-gray-600">
                Создайте идеальное место для хранения без переплат!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 animate-pulse-glow"
                  onClick={() => setIsFormOpen(true)}
                >
                  Оставить заявку
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4"
                >
                  Смотреть примеры
                  <Icon name="Eye" size={20} className="ml-2" />
                </Button>
              </div>
              
              {/* Timer */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-semibold mb-2">⏰ Акция действует ограниченное время:</p>
                <div className="flex space-x-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600">{timeLeft.days}</div>
                    <div className="text-sm text-red-500">дней</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">{timeLeft.hours}</div>
                    <div className="text-sm text-red-500">часов</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">{timeLeft.minutes}</div>
                    <div className="text-sm text-red-500">минут</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="/img/2f46f356-98df-4ebd-9780-4bfe44ddd278.jpg" 
                alt="Современная гардеробная система" 
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">Рассрочка 0%</p>
                <p className="text-sm">на 12 месяцев</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Почему выбирают нас?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Percent",
                title: "Рассрочка 0%",
                description: "Платите частями без переплат и скрытых комиссий"
              },
              {
                icon: "Ruler",
                title: "Бесплатный замер",
                description: "Приедем, измерим, предложим лучшие варианты"
              },
              {
                icon: "Shield",
                title: "Гарантия 5 лет",
                description: "Надёжные материалы и качественная фурнитура"
              },
              {
                icon: "Clock",
                title: "Срок от 7 дней",
                description: "Быстрое изготовление и профессиональная установка"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="space-y-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={benefit.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Примеры работ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Примеры наших работ
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Мы создаём гардеробные под любой интерьер!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/img/2f46f356-98df-4ebd-9780-4bfe44ddd278.jpg",
                title: "Угловая гардеробная с зеркалами",
                description: "Максимальное использование пространства"
              },
              {
                image: "/img/5057310f-a0ba-490a-a2b8-86d00e64569f.jpg",
                title: "Встроенная система хранения в спальню",
                description: "Идеальное решение для небольших комнат"
              },
              {
                image: "/img/09d2530d-20bd-4ad2-a9cc-1c0d9b32c533.jpg",
                title: "Гардеробная в стиле лофт",
                description: "Современный промышленный дизайн"
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Как оформить рассрочку */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Как оформить рассрочку 0%?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Оставьте заявку",
                description: "На сайте или по телефону — это займёт всего минуту"
              },
              {
                step: "2", 
                title: "Бесплатный замер",
                description: "Наш специалист приедет в удобное для вас время"
              },
              {
                step: "3",
                title: "Подписание договора", 
                description: "Оформление рассрочки 0% на 12 месяцев без переплат"
              },
              {
                step: "4",
                title: "Изготовление и установка",
                description: "Готовая гардеробная от 7 дней с гарантией 5 лет"
              }
            ].map((step, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Отзывы наших клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна",
                location: "Москва",
                rating: 5,
                text: "Заказали гардеробную в рассрочку — очень удобно! Качество на высоте, сделали быстро и аккуратно."
              },
              {
                name: "Дмитрий",
                location: "Подольск", 
                rating: 5,
                text: "Быстро сделали, установили аккуратно. Рассрочка 0% — настоящее спасение для семейного бюджета!"
              },
              {
                name: "Елена",
                location: "Люберцы",
                rating: 5, 
                text: "Отличное качество материалов и фурнитуры. Гардеробная служит уже 3 года — всё как новое!"
              }
            ].map((review, index) => (
              <Card key={index} className="p-6 animate-scale-in">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{review.text}"</p>
                  <div className="text-sm text-gray-600">
                    <strong>{review.name}</strong>, {review.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Оставьте заявку сейчас и получите бесплатный замер + рассрочку 0%!
            </h2>
            <p className="text-xl opacity-90">
              Мы перезвоним в течение 15 минут
            </p>
          </div>
          
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input id="name" placeholder="Введите ваше имя" className="text-gray-900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" className="text-gray-900" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="comment">Комментарий</Label>
                <Textarea 
                  id="comment" 
                  placeholder="Например: Нужна гардеробная 2,5 м"
                  className="text-gray-900"
                />
              </div>
              <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                Оставить заявку
                <Icon name="Send" size={20} className="ml-2" />
              </Button>
              <p className="text-sm text-gray-600 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Home" size={32} className="text-primary" />
                <h3 className="text-2xl font-bold">ShelsMebel</h3>
              </div>
              <p className="text-gray-400">
                Создаём стильные гардеробные системы с 2015 года
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@shelsmebel.ru</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва, ул. Производственная, 1</span>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Соцсети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 ShelsMebel. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Заказать звонок</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsFormOpen(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="modal-name">Ваше имя</Label>
                  <Input id="modal-name" placeholder="Введите ваше имя" />
                </div>
                <div>
                  <Label htmlFor="modal-phone">Телефон</Label>
                  <Input id="modal-phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <Button className="w-full">
                  Заказать звонок
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;