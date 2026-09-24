import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/LanguageProvider";

const copy = {
  bg: {
    text: "Този сайт използва бисквитки, за да работи правилно и да подобри вашето изживяване. Продължавайки, вие се съгласявате с използването им.",
    more: "Научете повече",
    accept: "Приемам",
  },
  en: {
    text: "This site uses cookies to work properly and improve your experience. By continuing you agree to their use.",
    more: "Learn more",
    accept: "Accept",
  },
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const t = useT(copy);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-4 shadow-lg">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {t.text}{" "}
          <a href="/privacy" className="text-primary hover:underline">{t.more}</a>.
        </p>
        <Button size="sm" onClick={accept}>{t.accept}</Button>
      </div>
    </div>
  );
};

export default CookieConsent;
