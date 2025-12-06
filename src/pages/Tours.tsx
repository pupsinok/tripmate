import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToursSearch } from "@/components/tours/ToursSearch";
import { ToursFilters } from "@/components/tours/ToursFilters";
import { ToursList } from "@/components/tours/ToursList";
import { ToursPagination } from "@/components/tours/ToursPagination";

const Tours = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <ToursSearch />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-72 flex-shrink-0">
              <ToursFilters />
            </aside>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-heading font-bold text-2xl md:text-3xl">
                  Каталог туров
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground text-sm hidden sm:block">
                    Найдено: 48 туров
                  </span>
                  <select className="px-4 py-2 rounded-lg border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>По популярности</option>
                    <option>По цене ↑</option>
                    <option>По цене ↓</option>
                    <option>По рейтингу</option>
                  </select>
                </div>
              </div>
              <ToursList />
              <ToursPagination />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tours;
