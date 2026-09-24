import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/site/SectionHeading";
import ModuleCard from "@/components/site/ModuleCard";
import CtaBand from "@/components/site/CtaBand";
import { useLang, useT } from "@/i18n/LanguageProvider";
import { getModules } from "@/content/modules";

const copy = {
  bg: {
    eyebrow: "Решения",
    title: "Фактуриране, счетоводство и ДДС в една система",
    lead: "Всеки документ въвеждате веднъж. От него системата съставя статията и попълва дневниците за ДДС и справките.",
    activeEyebrow: "Налично сега",
    activeTitle: "Какво можете да правите в SDM",
    packageNote: "Обхватът на някои функции зависи от пакета.",
    packageLink: "Сравнете пакетите",
    saftEyebrow: "SAF-T",
    saftTitle: "SAF-T идва и за малките фирми",
    saftLead:
      "От 2026 г. НАП въвежда стандартния одитен файл за данъчни цели (SAF-T). Фирмите го подават всеки месец в XML формат, с данни от счетоводството им: записите в главната книга, сметкоплана, контрагентите, фактурите и плащанията.",
    saftWavesTitle: "Кога става задължително",
    saftWaves: [
      ["2026–2027", "Големите предприятия"],
      ["2028", "Фирмите с годишни приходи над 7,67 млн. евро"],
      ["2029", "Всички малки и средни предприятия"],
      ["2030", "Микропредприятията, регистрирани по ЗДДС"],
    ],
    saftHaveTitle: "Какво SDM вече води в нужния вид",
    saftHave: [
      "Всеки счетоводен запис, свързан с документа, от който идва",
      "Сметкоплан с начални салда, обороти и крайни салда",
      "Контрагенти с ЕИК, ДДС номер и държава",
      "Фактури по редове: артикул, количество, мерна единица, цена и ДДС",
      "Суми в евро, с оригиналната валута и курса",
    ],
    saftNext:
      "Генерирането на месечния SAF-T файл е в разработка. Така, когато задължението стигне до вашата фирма, файлът ще се изготвя от данните, които вече въвеждате.",
    saftSource: "Сроковете са по ДОПК и указанията на НАП. Проверете кога е вашият ред при своя счетоводител.",
    soonEyebrow: "В разработка",
    soonTitle: "Какво предстои",
    soonDesc: "Когато нов модул е готов, той се появява във вашата система. Не е нужно да прехвърляте данни или да настройвате нещо отначало.",
    upcoming: [
      ["SAF-T файл", "Месечният файл за НАП, изготвен от вече въведените записи."],
      ["Разпознаване на фактури", "Качвате PDF или снимка на фактура за покупка и получавате чернова за преглед."],
      ["Автоматична връзка с банката", "Транзакциите идват директно от банката и се съпоставят по правила."],
      ["Дълготрайни активи", "Регистър на активите и автоматично начисляване на амортизации."],
      ["Заплати и ТРЗ", "Заплати, фишове и декларации към НАП."],
      ["Склад", "Наличности, стокови разписки и оценка на запасите."],
      ["API и интеграции", "Връзка с онлайн магазини, ERP и вътрешни системи."],
    ],
    ctaTitle: "Искате ли да видите как работи?",
    ctaDesc:
      "Ще ви покажем системата, ще ви помогнем да прехвърлите контрагентите и началните салда и ще ви препоръчаме подходящ пакет. Първите 90 дни са безплатни, без кредитна карта.",
    ctaPrimary: "Свържете се с нас",
    ctaSecondary: "Вижте пакетите",
  },
  en: {
    eyebrow: "Solutions",
    title: "Invoicing, accounting and VAT in one system",
    lead: "You enter each document once. From it the system writes the entry and fills in the VAT journals and the reports.",
    activeEyebrow: "Available now",
    activeTitle: "What you can do in SDM",
    packageNote: "The scope of some features depends on your plan.",
    packageLink: "Compare plans",
    saftEyebrow: "SAF-T",
    saftTitle: "SAF-T is coming for small companies too",
    saftLead:
      "From 2026 the Bulgarian NRA is introducing the Standard Audit File for Tax (SAF-T). Companies submit it every month in XML, with data from their accounting: general-ledger entries, the chart of accounts, counterparties, invoices and payments.",
    saftWavesTitle: "When it becomes mandatory",
    saftWaves: [
      ["2026–2027", "Large enterprises"],
      ["2028", "Companies with annual revenue above EUR 7.67 million"],
      ["2029", "All small and medium-sized enterprises"],
      ["2030", "VAT-registered micro-enterprises"],
    ],
    saftHaveTitle: "What SDM already keeps in the right shape",
    saftHave: [
      "Every accounting entry, linked to the document it came from",
      "A chart of accounts with opening balances, turnover and closing balances",
      "Counterparties with company ID, VAT number and country",
      "Invoices line by line: item, quantity, unit, price and VAT",
      "Amounts in euro, with the original currency and rate",
    ],
    saftNext:
      "Generating the monthly SAF-T file is in development, so when the obligation reaches your company, the file will be produced from the data you already enter.",
    saftSource: "Deadlines follow the Tax and Social Insurance Procedure Code and NRA guidance. Check with your accountant when your turn comes.",
    soonEyebrow: "In development",
    soonTitle: "What's next",
    soonDesc: "When a new module is ready, it appears in your system. You don't need to move data or set anything up again.",
    upcoming: [
      ["SAF-T file", "The monthly file for the NRA, produced from the records you already entered."],
      ["Invoice recognition", "Upload a PDF or a photo of a purchase invoice and get a draft to review."],
      ["Direct bank connection", "Transactions arrive straight from the bank and are matched by rules."],
      ["Fixed assets", "An asset register with automatic depreciation."],
      ["Payroll", "Salaries, payslips and declarations to the NRA."],
      ["Inventory", "Stock levels, goods receipts and inventory valuation."],
      ["API and integrations", "Connections to online stores, ERPs and internal systems."],
    ],
    ctaTitle: "Want to see how it works?",
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

      <section className="border-t border-border py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading eyebrow={t.saftEyebrow} title={t.saftTitle} description={t.saftLead} />
            <h3 className="mt-10 font-semibold">{t.saftWavesTitle}</h3>
            <dl className="mt-4 divide-y divide-border border-y border-border">
              {t.saftWaves.map(([year, who]) => (
                <div key={year} className="flex gap-6 py-3 text-sm">
                  <dt className="w-24 flex-shrink-0 font-semibold text-primary">{year}</dt>
                  <dd className="text-muted-foreground">{who}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.saftSource}</p>
          </div>
          <div className="self-start rounded-md border border-panel-border bg-card p-7 shadow-panel">
            <h3 className="font-semibold">{t.saftHaveTitle}</h3>
            <ul className="mt-5 space-y-2.5">
              {t.saftHave.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-foreground/80">{t.saftNext}</p>
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
        secondaryLabel={t.ctaSecondary}
        secondaryTo="/pricing"
      />
    </Layout>
  );
};

export default Product;
