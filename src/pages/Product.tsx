import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/site/SectionHeading";
import ModuleCard from "@/components/site/ModuleCard";
import CtaBand from "@/components/site/CtaBand";
import { useLang, useT } from "@/i18n/LanguageProvider";
import { getModules } from "@/content/modules";

const copy = {
  bg: {
    eyebrow: "Решения",
    title: "Едно място за документите, счетоводството и ДДС.",
    lead: "Шест модула, които работят върху едни и същи данни. Въвеждате веднъж — фактурата, статията, дневникът и справката се попълват от същия запис.",
    activeEyebrow: "Налично сега",
    activeTitle: "Какво можете да правите в SDM",
    packageNote: "Обхватът на някои функции зависи от пакета.",
    packageLink: "Сравнете пакетите",
    soonEyebrow: "В разработка",
    soonTitle: "Какво предстои",
    soonDesc: "Новите модули се включват в работното ви пространство при пускането им — без миграция и без нова настройка.",
    upcoming: [
      ["Разпознаване на фактури", "Качвате PDF или снимка на фактура за покупка и получавате чернова за преглед."],
      ["Автоматична връзка с банката", "Транзакциите идват директно от банката и се съпоставят по правила."],
      ["Дълготрайни активи", "Регистър на активите и автоматично начисляване на амортизации."],
      ["Заплати и ТРЗ", "Заплати, фишове и декларации към НАП."],
      ["Склад", "Наличности, стокови разписки и оценка на запасите."],
      ["API и интеграции", "Връзка с онлайн магазини, ERP и вътрешни системи."],
    ],
    ctaTitle: "Вижте SDM с вашите данни",
    ctaDesc:
      "Ще ви покажем системата, ще ви помогнем да прехвърлите контрагентите и началните салда и ще предложим подходящия пакет. 90 дни безплатно, без кредитна карта.",
    ctaPrimary: "Свържете се с нас",
    ctaSecondary: "Вижте пакетите",
  },
  en: {
    eyebrow: "Solutions",
    title: "One place for your documents, your books and VAT.",
    lead: "Six modules working on the same data. Enter something once — the invoice, the entry, the VAT journal and the report all come from the same record.",
    activeEyebrow: "Available now",
    activeTitle: "What you can do in SDM",
    packageNote: "The scope of some features depends on your plan.",
    packageLink: "Compare plans",
    soonEyebrow: "In development",
    soonTitle: "What's next",
    soonDesc: "New modules appear in your workspace when they are released — no migration and no new setup.",
    upcoming: [
      ["Invoice recognition", "Upload a PDF or a photo of a purchase invoice and get a draft to review."],
      ["Direct bank connection", "Transactions arrive straight from the bank and are matched by rules."],
      ["Fixed assets", "An asset register with automatic depreciation."],
      ["Payroll", "Salaries, payslips and declarations to the NRA."],
      ["Inventory", "Stock levels, goods receipts and inventory valuation."],
      ["API and integrations", "Connections to online stores, ERPs and internal systems."],
    ],
    ctaTitle: "See SDM with your own data",
    ctaDesc:
      "We will walk you through the system, help you move your counterparties and opening balances across, and recommend the right plan. 90 days free, no credit card.",
    ctaPrimary: "Contact us",
    ctaSecondary: "See pricing",
  },
};

const Product = () => {
  const t = useT(copy);
  const { lang } = useLang();
  const modules = getModules(lang);

  return (
    <Layout>
      <section className="bg-primary-dark">
        <div className="container py-10 lg:py-12">
          <span className="eyebrow text-primary-foreground/55">{t.eyebrow}</span>
          <h1 className="mt-2 max-w-3xl font-display text-3xl leading-tight text-primary-foreground">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/75">{t.lead}</p>
        </div>
      </section>

      <section id="modules" className="py-20">
        <div className="container">
          <SectionHeading eyebrow={t.activeEyebrow} title={t.activeTitle} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <ModuleCard key={m.title} icon={m.icon} title={m.title} value={m.value} points={m.points} />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            {t.packageNote}{" "}
            <Link to="/pricing" className="font-medium text-primary underline-offset-4 hover:underline">
              {t.packageLink}
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-section py-20">
        <div className="container">
          <SectionHeading eyebrow={t.soonEyebrow} title={t.soonTitle} description={t.soonDesc} />
          <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.upcoming.map(([title, desc]) => (
              <div key={title}>
                <dt className="font-semibold">{title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand
        title={t.ctaTitle}
        description={t.ctaDesc}
        primaryLabel={t.ctaPrimary}
        primaryTo="/contact"
        secondaryLabel={t.ctaSecondary}
        secondaryTo="/pricing"
      />
    </Layout>
  );
};

export default Product;
