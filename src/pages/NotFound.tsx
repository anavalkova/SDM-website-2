import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useT } from "@/i18n/LanguageProvider";

const copy = {
  bg: {
    message: "Опа! Страницата не е намерена",
    home: "Обратно към началната страница",
  },
  en: {
    message: "Oops! Page not found",
    home: "Return to Home",
  },
};

const NotFound = () => {
  const t = useT(copy);
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t.message}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {t.home}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
