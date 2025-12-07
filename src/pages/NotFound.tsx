import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">

      <Header />

      {/* MAIN CONTENT */}
      <main className="
        flex-1 flex flex-col items-center justify-center 
        text-center px-4 
        mt-10 md:mt-16 
        mb-20 md:mb-32
      ">
        <h1 className="text-7xl md:text-8xl font-extrabold text-primary mb-6 animate-fade-in">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 animate-slide-up">
          Страница не найдена
        </h2>

        <p className="
          text-lg md:text-xl text-muted-foreground 
          max-w-xl mx-auto leading-relaxed mb-10 animate-fade-in animation-delay-200
        ">
          Похоже, вы забрели не туда. Давайте вернёмся на главную и продолжим путешествие ✈️
        </p>

        {/* BUTTON WITH ANIMATION */}
        <div className="text-center mb-20 md:mb-28 animate-fade-in animation-delay-300">
          <Link
            to="/"
            className="
              inline-block px-8 py-4 
              bg-primary text-white font-semibold text-lg rounded-xl shadow-lg 
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-xl hover:bg-primary/90
              active:scale-95
            "
          >
            🏠 Вернуться на главную
          </Link>
        </div>
      </main>

      <Footer />

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn .7s ease forwards;
        }
        .animate-slide-up {
          animation: slideUp .7s ease forwards;
        }
        .animation-delay-200 { animation-delay: .2s; }
        .animation-delay-300 { animation-delay: .3s; }
      `}</style>
    </div>
  );
};

export default NotFound;
