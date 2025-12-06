import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Heart, User, Menu, X, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { User as SupabaseUser } from "@supabase/supabase-js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Туры", href: "/tours" },
  { label: "Создать маршрут", href: "/create-route" },
  { label: "О TripMate", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const userName = user?.user_metadata?.first_name || user?.email?.split("@")[0];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">T</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground hidden sm:block">
              TripMate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant={location.pathname === link.href ? "nav-active" : "nav"}
                  size="sm"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="w-5 h-5" />
            </Button>
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <User className="w-4 h-4" />
                      {userName}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={handleLogout} className="gap-2 cursor-pointer">
                      <LogOut className="w-4 h-4" />
                      Выйти
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link to="/auth?mode=login">
                    <Button variant="ghost" size="sm">
                      Вход
                    </Button>
                  </Link>
                  <Link to="/auth?mode=register">
                    <Button size="sm">Регистрация</Button>
                  </Link>
                </>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant={location.pathname === link.href ? "nav-active" : "nav"}
                    className="w-full justify-start"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <div className="flex gap-2 mt-4">
                {user ? (
                  <Button variant="outline" className="w-full gap-2" onClick={handleLogout}>
                    <LogOut className="w-4 h-4" />
                    Выйти
                  </Button>
                ) : (
                  <>
                    <Link to="/auth?mode=login" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Вход
                      </Button>
                    </Link>
                    <Link to="/auth?mode=register" className="flex-1">
                      <Button className="w-full">Регистрация</Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
