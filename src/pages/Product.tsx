import { useMemo } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGroups from "@/components/site/FeatureGroups";
import CtaBand from "@/components/site/CtaBand";
import { useLang, useT } from "@/i18n/LanguageProvider";
import { getAdvantages, getFeatureGroups } from "@/content/features";

const copy = {
  bg: {
    eyebrow: "Решения",
    title: "Фактуриране, счетоводство и ДДС в една система",
    lead: "Всеки документ въвеждате веднъж. От него системата съставя статията и попълва дневниците за ДДС и справките.",
    advEyebrow: "Предимства",
    advTitle: "Какво отличава SDM",
    advDesc:
      "SDM е облачна счетоводна система за малки, растящи и по-големи фирми и за счетоводните кантори, които ги обслужват. В нея водите цялото текущо счетоводство на едно място и по българските стандарти: контрагенти, сметкоплан, фактури, банка, каса, ДДС и справки.",
    activeEyebrow: "Налично сега",
    activeTitle: "Какво можете да правите в SDM",
    activeDesc:
      "Модулите са подредени в реда, в който обикновено започва работата: от създаването на организацията до първите документи и справки.",
    navLabel: "Модули",
    saftTitle: "SAF-T директно от системата",
    saftText:
      "SAF-T е новият месечен одитен файл, който фирмите подават към НАП. SDM го изготвя от въведените документи и записи, без отделна подготовка.",
    soonEyebrow: "В разработка",
    soonTitle: "Какво предстои",
    soonDesc: "Когато нов модул е готов, той се появява във вашата система. Не е нужно да прехвърляте данни или да настройвате нещо отначало.",
    upcoming: [
      ["Автоматична връзка с банката", "Транзакциите идват директно от банката и се съпоставят по правила."],
      ["Дълготрайни активи", "Регистър на активите и автоматично начисляване на амортизации."],
      ["Заплати и ТРЗ", "Заплати, фишове и декларации към НАП."],
      ["Склад", "Наличности, стокови разписки и оценка на запасите."],
      ["API и интеграции", "Връзка с онлайн магазини, ERP и вътрешни системи."],
    ],
    ctaTitle: "Искате ли да видите как работи?",
    ctaDesc:
      "Ще ви покажем системата и ще ви помогнем да прехвърлите контрагентите и началните салда.",
    ctaPrimary: "Свържете се с нас",
  },
  en: {
    eyebrow: "Solutions",
    title: "Invoicing, accounting and VAT in one system",
    lead: "You enter each document once. From it the system writes the entry and fills in the VAT journals and the reports.",
    advEyebrow: "Advantages",
    advTitle: "What sets SDM apart",
    advDesc:
      "SDM is a cloud accounting system for small, growing and larger companies and for the accounting firms that serve them. It covers all day-to-day bookkeeping in one place, following Bulgarian standards: counterparties, chart of accounts, invoices, bank, cash, VAT and reports.",
    activeEyebrow: "Available now",
    activeTitle: "What you can do in SDM",
    activeDesc:
      "The modules are listed in the order work usually starts: from creating the organisation to the first documents and reports.",
    navLabel: "Modules",
    saftTitle: "SAF-T straight from the system",
    saftText:
      "SAF-T is the new monthly audit file that companies submit to the NRA. SDM produces it from the documents and entries you have entered, with no separate preparation.",
    soonEyebrow: "In development",
    soonTitle: "What's next",
    soonDesc: "When a new module is ready, it appears in your system. You don't need to move data or set anything up again.",
    upcoming: [
      ["Direct bank connection", "Transactions arrive straight from the bank and are matched by rules."],
      ["Fixed assets", "An asset register with automatic depreciation."],
      ["Payroll", "Salaries, payslips and declarations to the NRA."],
      ["Inventory", "Stock levels, goods receipts and inventory valuation."],
      ["API and integrations", "Connections to online stores, ERPs and internal systems."],
    ],
    ctaTitle: "Want to see how it works?",
    ctaDesc:
      "We will walk you through the system and help you move your counterparties and opening balances across.",
    ctaPrimary: "Contact us",
  },
};

const Product = () => {
  const t = useT(copy);
  const { lang } = useLang();
  const advantages = getAdvantages(lang);
  const groups = useMemo(() => getFeatureGroups(lang), [lang]);

  return (
    <Layout>
      <section className="bg-primary-dark">
        <div className="container py-10 lg:py-12">
          <span className="eyebrow text-primary-foreground/55">{t.eyebrow}</span>
          <h1 className="mt-2 max-w-3xl font-display text-3xl leading-tight text-primary-foreground">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/75">{t.lead}</p>
        </div>
      </section>

      {/* Competitive advantages */}
      <section className="py-20">
        <div className="container">
          <SectionHeading eyebrow={t.advEyebrow} title={t.advTitle} description={t.advDesc} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 border-t-[3px] border-brand bg-card p-7 shadow-panel">
                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[3px] bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features by module */}
      <section id="modules" className="scroll-mt-16 bg-section py-20">
        <div className="container">
          <SectionHeading eyebrow={t.activeEyebrow} title={t.activeTitle} description={t.activeDesc} />
          <FeatureGroups groups={groups} navLabel={t.navLabel} />
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container">
          <div className="max-w-3xl border-l-[3px] border-brand pl-6">
            <h2 className="font-display text-2xl">{t.saftTitle}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{t.saftText}</p>
          </div>
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
      />
    </Layout>
  );
};

export default Product;
