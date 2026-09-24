import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import CtaBand from "@/components/site/CtaBand";
import { Check } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

const copy = {
  bg: {
    eyebrow: "Ценови пакети",
    heading: "Ясни пакети. Предвидими цени.",
    subheading:
      "Четири пакета около нивото на автоматизация, което вашият бизнес реално изисква. Включват 90-дневен безплатен пробен период. Без кредитна карта.",
    popular: "Най-популярен",
    getStarted: "Започнете",
    plans: [
      {
        eyebrow: "Стартер / Демо",
        name: "Стартер",
        meta: "1 фирма · 2 потребители · 30 фактури/мес.",
        features: ["Фактуриране до 30/мес.", "Основен сметкоплан НСС", "Справка-декларация ЗДДС", "1 банкова сметка"],
      },
      {
        eyebrow: "Стандарт",
        name: "Стандарт",
        meta: "1 фирма · 5 потребители · 100 фактури/мес.",
        features: [
          "Всичко в Стартер",
          "Конфигурируем сметкоплан",
          "Банково съпоставяне (CSV)",
          "Неограничени банкови сметки",
          "Персонализирани шаблони",
        ],
        popular: true,
      },
      {
        eyebrow: "Бизнес",
        name: "Бизнес",
        meta: "До 5 фирми · 5 потр./фирма · Неограничени фактури",
        features: [
          "Всичко в Стандарт",
          "До 5 фирми, изолирани данни",
          "Централизирано табло",
          "Превключване без изход",
          "Посветена сесия за въвеждане",
        ],
      },
      {
        eyebrow: "Корпоративен",
        name: "Корпоративен",
        meta: "Неограничени фирми · Персонализирана конфигурация",
        features: [
          "Всичко в Бизнес",
          "Неограничени фирми",
          "Сметкоплан по МСФО",
          "Миграция на данни",
          "Приоритетна поддръжка",
          "API интеграции",
        ],
      },
    ],
    includedTitle: "Всички пакети включват",
    includedDescription:
      "Независимо от избрания пакет, платформата остава една и съща, облачна, съответстваща и без скрити условия.",
    includedItems: [
      ["90 дни безплатно", "Пълен достъп по време на пробния период, без кредитна карта."],
      ["Данни в ЕС · GDPR", "Европейска инфраструктура и съхранение на данните в ЕС."],
      ["НСС и НАП формати", "Сметкоплан, ДДС дневници и декларации в правилния формат."],
    ],
    ctaTitle: "Не сте сигурни кой пакет е подходящ?",
    ctaDescription: "Свържете се с нас, ще ви покажем платформата и ще препоръчаме пакета за вашия случай.",
    ctaPrimary: "Свържете се с нас",
  },
  en: {
    eyebrow: "Pricing plans",
    heading: "Clear plans. Predictable pricing.",
    subheading:
      "Four plans built around the level of automation your business actually needs. All plans include a 90-day free trial. No credit card required.",
    popular: "Most popular",
    getStarted: "Get started",
    plans: [
      {
        eyebrow: "Starter / Demo",
        name: "Starter",
        meta: "1 company · 2 users · 30 invoices/mo.",
        features: [
          "Invoicing up to 30/mo.",
          "Basic National Accounting Standards chart of accounts",
          "VAT return declaration",
          "1 bank account",
        ],
      },
      {
        eyebrow: "Standard",
        name: "Standard",
        meta: "1 company · 5 users · 100 invoices/mo.",
        features: [
          "Everything in Starter",
          "Configurable chart of accounts",
          "Bank reconciliation (CSV)",
          "Unlimited bank accounts",
          "Custom templates",
        ],
        popular: true,
      },
      {
        eyebrow: "Business",
        name: "Business",
        meta: "Up to 5 companies · 5 users/company · Unlimited invoices",
        features: [
          "Everything in Standard",
          "Up to 5 companies, isolated data",
          "Centralized dashboard",
          "Switch without logging out",
          "Dedicated onboarding session",
        ],
      },
      {
        eyebrow: "Enterprise",
        name: "Enterprise",
        meta: "Unlimited companies · Custom configuration",
        features: [
          "Everything in Business",
          "Unlimited companies",
          "IFRS chart of accounts",
          "Data migration",
          "Priority support",
          "API integrations",
        ],
      },
    ],
    includedTitle: "All plans include",
    includedDescription:
      "No matter which plan you choose, the platform stays the same, cloud-based, compliant, and free of hidden terms.",
    includedItems: [
      ["90 days free", "Full access throughout the trial, no credit card required."],
      ["Data in the EU · GDPR", "European infrastructure with all data stored in the EU."],
      ["National Accounting Standards & NRA formats", "Chart of accounts, VAT ledgers, and declarations in the correct format."],
    ],
    ctaTitle: "Not sure which plan is right for you?",
    ctaDescription: "Get in touch, we'll walk you through the platform and recommend the right plan for your case.",
    ctaPrimary: "Contact us",
  },
};

const Pricing = () => {
  const t = useT(copy);
  return (
    <Layout>
      <section className="bg-primary-dark">
        <div className="container py-10 lg:py-12">
          <span className="eyebrow text-primary-foreground/55">{t.eyebrow}</span>
          <h1 className="mt-2 font-display text-3xl leading-tight text-primary-foreground">
            {t.heading}
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/75">
            {t.subheading}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-4">
            {t.plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col bg-card p-7 shadow-panel ${
                  plan.popular ? "border-t-[3px] border-green ring-1 ring-green/30" : "border-t-[3px] border-brand"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-5 top-5 rounded-[3px] bg-green px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-green-foreground">
                    {t.popular}
                  </span>
                )}
                <div className="eyebrow mb-3">{plan.eyebrow}</div>
                <h3 className="font-display text-2xl">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.meta}</p>
                <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={plan.popular ? "default" : "heroOutline"} className="mt-8 w-full">
                  <Link to="/early-access">{t.getStarted}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section py-16">
        <div className="container">
          <SectionHeading
            align="center"
            title={t.includedTitle}
            description={t.includedDescription}
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
            {t.includedItems.map(([title, d]) => (
              <div key={title} className="border-t border-border pt-5">
                <h4 className="mb-2 font-semibold">{title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={t.ctaTitle}
        description={t.ctaDescription}
        primaryLabel={t.ctaPrimary}
        primaryTo="/contact"
      />
    </Layout>
  );
};

export default Pricing;
