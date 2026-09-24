import { Link } from "react-router-dom";
import { useT } from "@/i18n/LanguageProvider";
import sdmLogo from "@/assets/sdm-logo-light.png";

const copy = {
  bg: {
    tagline: "Облачна счетоводна платформа, изградена специално за България.",
    product: "Продукт",
    company: "Фирма",
    legal: "Правно",
    links: {
      overview: "Преглед",
      pricing: "Ценови пакети",
      modules: "Модули",
      how: "Как работи",
      about: "За нас",
      contact: "Контакти",
      privacy: "Политика за поверителност",
      terms: "Общи условия",
    },
    rights: "© 2026 Smart Data Management. Всички права запазени.",
  },
  en: {
    tagline: "A cloud accounting platform built specifically for Bulgaria.",
    product: "Product",
    company: "Company",
    legal: "Legal",
    links: {
      overview: "Overview",
      pricing: "Pricing",
      modules: "Modules",
      how: "How it works",
      about: "About us",
      contact: "Contact",
      privacy: "Privacy policy",
      terms: "Terms of service",
    },
    rights: "© 2026 Smart Data Management. All rights reserved.",
  },
};

const Footer = () => {
  const t = useT(copy);

  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container py-7">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={sdmLogo} alt="Smart Data Management" className="h-6 w-auto" />
              <span className="text-sm font-semibold">Smart Data Management</span>
            </div>
            <p className="mt-2 max-w-xs text-[13px] leading-snug text-primary-foreground/65">{t.tagline}</p>
          </div>
          <div>
            <h4 className="eyebrow mb-2 text-primary-foreground/50">{t.product}</h4>
            <ul className="space-y-1 text-[13px] text-primary-foreground/75">
              <li><Link to="/product" className="hover:text-brand">{t.links.overview}</Link></li>
              <li><Link to="/pricing" className="hover:text-brand">{t.links.pricing}</Link></li>
              <li><Link to="/product#modules" className="hover:text-brand">{t.links.modules}</Link></li>
              <li><Link to="/get-started" className="hover:text-brand">{t.links.how}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-2 text-primary-foreground/50">{t.company}</h4>
            <ul className="space-y-1 text-[13px] text-primary-foreground/75">
              <li><Link to="/about" className="hover:text-brand">{t.links.about}</Link></li>
              <li><Link to="/contact" className="hover:text-brand">{t.links.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-2 text-primary-foreground/50">{t.legal}</h4>
            <ul className="space-y-1 text-[13px] text-primary-foreground/75">
              <li><Link to="/privacy" className="hover:text-brand">{t.links.privacy}</Link></li>
              <li><Link to="/terms" className="hover:text-brand">{t.links.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-primary-foreground/15 pt-4 text-xs text-primary-foreground/55">
          {t.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
