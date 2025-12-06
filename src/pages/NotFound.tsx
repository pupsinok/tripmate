import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        {/* Wrapper with fade animation */}
        <div className="animate-fade-in">
          <h1 className="text-[120px] md:text-[160px] font-extrabold text-primary drop-shadow-lg">
            404
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-foreground mt-2">
            Страница не найдена
          </p>

          <p className="text-muted-foreground max-w-md mx-auto mt-3 text-lg">
            Похоже, вы забрели не туда.  
            Давайте вернёмся на главную и продолжим путешествие ✈️
          </p>

          <Link to="/" className="inline-block mt-8">
            <Button size="lg" variant="hero" className="px-10 py-6 text-lg">
              🏠 Вернуться на главную
            </Button>
          </Link>

          {/* Optional illustration */}
          <img
            className="mx-auto mt-10 w-full max-w-md opacity-90 animate-fade-in-slow"
            src="https://illustrations.popsy.co/amber/astronaut-1.svg"
            alt="Lost astronaut"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
