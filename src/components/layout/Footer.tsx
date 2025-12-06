import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">T</span>
              </div>
              <span className="font-heading font-bold text-xl">TripMate</span>
            </div>
            <p className="text-card/70 text-sm">
              Ваш надёжный спутник в мире путешествий
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-card/70">
              <li>
                <Link to="/tours" className="hover:text-card transition-colors">
                  Туры
                </Link>
              </li>
              <li>
                <Link to="/create-route" className="hover:text-card transition-colors">
                  Маршруты
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-card transition-colors">
                  Бронирование
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-card/70">
              <li>
                <Link to="/about" className="hover:text-card transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-card transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-card transition-colors">
                  Поддержка
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-card/70">info@tripmate.com</p>
            <p className="text-sm text-card/70">+7 (495) 123-45-67</p>
          </div>
        </div>

        <div className="border-t border-card/10 pt-8 text-center text-sm text-card/50">
          © 2025 TripMate. Все права защищены.
        </div>
      </div>
    </footer>
  );
};
