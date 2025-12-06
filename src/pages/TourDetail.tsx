import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TourHero } from "@/components/tour-detail/TourHero";
import { TourDescription } from "@/components/tour-detail/TourDescription";
import { TourBookingCard } from "@/components/tour-detail/TourBookingCard";
import { TourAdvantages } from "@/components/tour-detail/TourAdvantages";
import { TourRoute } from "@/components/tour-detail/TourRoute";
import { TourReviews } from "@/components/tour-detail/TourReviews";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const TourDetail = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Back button */}
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/tours"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm">Назад</span>
          </Link>
        </div>

        <TourHero />

        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left content */}
            <div className="flex-1">
              <TourDescription />
              <TourAdvantages />
            </div>

            {/* Right sidebar - Booking card */}
            <aside className="lg:w-80 flex-shrink-0">
              <TourBookingCard />
            </aside>
          </div>
        </div>

        <TourRoute />
        <TourReviews />
      </main>
      <Footer />
    </div>
  );
};

export default TourDetail;
