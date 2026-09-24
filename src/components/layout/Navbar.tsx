import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";
import LanguageSwitch from "./LanguageSwitch";
import sdmLogo from "@/assets/sdm-logo.png";

const copy = {
  bg: {
    links: [
      { label: "Начало", to: "/" },
      { label: "Решения", to: "/product" },
      { label: "Ценови пакети", to: "/pricing" },
      { label: "За нас", to: "/about" },
      { label: "Контакт", to: "/contact" },
    ],
    login: "Вход",
    cta: "Безплатен период",
    menu: "Меню",
  },
  en: {
    links: [
      { label: "Home", to: "/" },
      { label: "Solutions", to: "/product" },
      { label: "Pricing", to: "/pricing" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
    login: "Sign in",
    cta: "Free trial",
    menu: "Menu",
  },
};

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5">
    <img src={sdmLogo} alt="Smart Data Management" className="h-7 w-auto" />
    <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground sm:block">
      Smart Data Management
    </span>
  </Link>
);


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const t = useT(copy);

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  if (isAuthPage) {
    return (
      <header className="sticky top-0 z-50 border-b border-panel-border bg-card">
        <div className="container flex h-16 items-center justify-between">
          <span className="w-16" />
          <Logo />
          <LanguageSwitch className="w-auto" />
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-panel-border bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {t.links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`border-b-2 py-1 text-sm transition-colors ${
                  active
                    ? "border-brand font-semibold text-primary"
                    : "border-transparent text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitch />
          <Button asChild variant="default" size="sm">
            <Link to="/early-access">{t.cta}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitch />
          <button
            className="p-2 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.menu}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-panel-border bg-card px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {t.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-2 text-sm text-foreground/80"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" size="sm" className="mt-2">
              <Link to="/early-access" onClick={() => setMobileOpen(false)}>
                {t.cta}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
