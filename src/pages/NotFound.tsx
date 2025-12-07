import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* Цифры 404 */}
        <h1 className="text-7xl md:text-[150px] font-extrabold text-primary drop-shadow-md mb-6 animate-fade-in">
          404
        </h1>

        {/* Заголовок */}
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
          Страница не найдена
        </h2>

        {/* Описание */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto animate-fade-in">
          Похоже, вы забрели не туда. Давайте вернёмся на главную и продолжим
          путешествие ✈️
        </p>

        {/* 🔥 ТВОЯ АНИМИРОВАННАЯ КНОПКА */}
        <div className="text-center mt-6 mb-16 md:mb-24 animate-fade-in">
          <Link
            to="/"
            className="
              inline-block px-8 py-4
              bg-primary text-white font-semibold text-lg rounded-xl shadow-lg
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-xl hover:bg-primary/90
              active:scale-95
              animate-bounce-soft
            "
          >
            🏠 Вернуться на главную
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;

