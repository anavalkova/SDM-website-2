import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/site/SectionHeading";
import ModuleCard from "@/components/site/ModuleCard";
import TrustBar from "@/components/site/TrustBar";
import CtaBand from "@/components/site/CtaBand";
import { useLang, useT } from "@/i18n/LanguageProvider";
import { getModules } from "@/content/modules";
import heroBg from "@/assets/hero-bg-light.jpg";
import { ListTree, Workflow, Euro, SearchCheck, ShieldCheck, Cloud, Rocket, Building, Landmark } from "lucide-react";

const reasonIcons = [ListTree, Workflow, Euro, SearchCheck, ShieldCheck, Cloud];
const audienceIcons = [Building, Rocket, Landmark];

const copy = {
  bg: {
    badge: "В евро · По НСС · Готово за НАП",
    titleA: "Всичко започва с",
    titleB: "правилните данни.",
    lead: "Фактура, статия, дневник за ДДС и справка-декларация от един запис, в една облачна система, изградена за българските счетоводни стандарти.",
    ctaPrimary: "Започнете безплатно, 90 дни",
    ctaSecondary: "Разгледайте функциите",
    note: "Без кредитна карта · Без инсталация · Помагаме ви с настройката",
    flowEyebrow: "Как работи",
    flowTitle: "От документа до декларацията",
    flow: [
      ["Настройвате фирмата", "Създавате фискалната година. Сметкопланът по НСС, журналите и аналитичностите се зареждат автоматично."],
      ["Въвеждате документите", "Издавате фактури и въвеждате покупки, банка и каса. Системата предлага статията."],
      ["Осчетоводявате", "С един бутон документът влиза в главната книга, в справките и в дневника за ДДС."],
      ["Подавате", "Справката-декларация по ЗДДС и VIES декларацията се генерират от вече въведените данни."],
    ],
    modulesEyebrow: "Модули",
    modulesTitle: "Шест модула, едни и същи данни",
    modulesDesc: "Нищо не се въвежда два пъти. Всеки модул чете и допълва записите на останалите.",
    whyEyebrow: "Защо SDM",
    whyTitle: "Счетоводство, което започва подредено",
    whyDesc:
      "Старите десктоп системи искат инсталация и поддръжка. Международните инструменти не познават НСС и НАП. SDM е създаден точно за това между тях.",
    audienceEyebrow: "За кого",
    audienceTitle: "За кого е SDM",
    audienceDesc: "За фирми и счетоводители, които искат да виждат финансите в реално време, без да чакат справка в края на месеца.",
    ctaBandSecondary: "Вижте пакетите",
    reasons: [
      {
        title: "Не започвате от нулата",
        desc: "При създаване на годината сметкопланът по НСС, журналите и системните аналитичности вече са там. Контрагентите и началните салда се зареждат от файл.",
      },
      {
        title: "Един запис, всички регистри",
        desc: "Издадената фактура е едновременно документ, статия в главната книга и ред в дневника за продажбите. Без износ, внос и пренабиране.",
      },
      {
        title: "Готово за еврото",
        desc: "Евро е основната валута още при създаване на годината. Документи в друга валута се въвеждат по курс, а сумите се водят и в двете валути.",
      },
      {
        title: "Всяко число води до документ",
        desc: "От оборотната ведомост до хронологията, всяка сума се проследява до документа. Осчетоводеният документ не се изтрива; коригира се чрез връщане в чернова.",
      },
      {
        title: "Ясни права, отделни фирми",
        desc: "Данните на всяка фирма и всяка година се пазят отделно. Роли и права определят кой въвежда, кой осчетоводява и кой само преглежда.",
      },
      {
        title: "Облак с данни в ЕС",
        desc: "Работите от браузъра, без инсталация и без архиви. Данните се съхраняват в европейска инфраструктура, в съответствие с GDPR.",
      },
    ],
    audiences: [
      {
        title: "Малки и микро фирми",
        desc: "Издавате фактури, следите кой ви дължи и подготвяте ДДС отчетността от едно място. Сметкопланът по НСС е вграден, а ние ви помагаме с настройката.",
      },
      {
        title: "Растящи компании",
        desc: "Повече документи, повече потребители, повече банкови сметки, в същата система. Шаблоните поемат повтарящите се операции, а правата пазят реда в екипа.",
      },
      {
        title: "Счетоводни кантори и групи фирми",
        desc: "Няколко фирми в едно работно пространство, с отделни данни и смяна на фирмата без нов вход. За по-сложни структури има персонализиран сметкоплан и аналитичности.",
      },
    ],
  },
  en: {
    badge: "In euro · National Accounting Standards · NRA-ready",
    titleA: "It all starts with",
    titleB: "the right data.",
    lead: "Invoice, entry, VAT journal and VAT return from one record, in one cloud system built for the Bulgarian accounting standards.",
    ctaPrimary: "Start free, 90 days",
    ctaSecondary: "Explore the features",
    note: "No credit card · No installation · We help you set up",
    flowEyebrow: "How it works",
    flowTitle: "From document to declaration",
    flow: [
      ["Set up the company", "Create the financial year. The chart of accounts, journals and analytics are loaded automatically."],
      ["Enter your documents", "Issue invoices and record purchases, bank and cash. The system proposes the entry."],
      ["Post", "One button and the document is in the general ledger, the reports and the VAT journal."],
      ["File", "The VAT return and the VIES declaration are generated from the data you already entered."],
    ],
    modulesEyebrow: "Modules",
    modulesTitle: "Six modules, the same data",
    modulesDesc: "Nothing is entered twice. Every module reads and extends the records of the others.",
    whyEyebrow: "Why SDM",
    whyTitle: "Accounting that starts in order",
    whyDesc:
      "Old desktop systems need installing and maintaining. International tools don't know the local standards or the NRA. SDM is built for exactly the space in between.",
    audienceEyebrow: "Who it's for",
    audienceTitle: "Who SDM is for",
    audienceDesc: "For companies and accountants who want to see their finances in real time, without waiting for a month-end report.",
    ctaBandSecondary: "See pricing",
    reasons: [
      {
        title: "You don't start from zero",
        desc: "When the year is created, the chart of accounts, journals and system analytics are already there. Counterparties and opening balances load from a file.",
      },
      {
        title: "One record, every register",
        desc: "An issued invoice is at once a document, a general-ledger entry and a line in the sales VAT journal. No exports, imports or re-typing.",
      },
      {
        title: "Ready for the euro",
        desc: "Euro is the base currency from the moment the year is created. Documents in other currencies are entered at a rate and kept in both currencies.",
      },
      {
        title: "Every number leads to a document",
        desc: "From the trial balance to the chronology, every amount traces back to its document. A posted document is never deleted; it is corrected by returning it to draft.",
      },
      {
        title: "Clear permissions, separate companies",
        desc: "Each company's and each year's data is kept separately. Roles and permissions decide who enters, who posts and who only views.",
      },
      {
        title: "EU-hosted cloud",
        desc: "Work in the browser, with no installation and no backups to manage. Data is stored on European infrastructure, GDPR compliant.",
      },
    ],
    audiences: [
      {
        title: "Small and micro companies",
        desc: "Issue invoices, see who owes you and prepare your VAT reporting from one place. The chart of accounts is built in, and we help you set up.",
      },
      {
        title: "Growing companies",
        desc: "More documents, more users, more bank accounts, all in the same system. Templates take over repeat operations and permissions keep the team in order.",
      },
      {
        title: "Accounting firms and company groups",
        desc: "Several companies in one workspace, with separate data and switching without signing in again. Complex structures get a custom chart of accounts and analytics.",
      },
    ],
  },
};

const Index = () => {
  const t = useT(copy);
  const { lang } = useLang();
  const modules = getModules(lang);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-panel-border bg-background">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1088}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background/75"
        />
        <div className="container relative py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-[3px] border border-brand/40 bg-card/80 px-3 py-1.5 text-[12px] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {t.badge}
            </span>
            <h1 className="mt-5 font-display text-3xl leading-[1.14] text-primary lg:text-[2.75rem]">
              {t.titleA} <span className="text-brand">{t.titleB}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/75">{t.lead}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild variant="default" size="lg">
                <Link to="/early-access">{t.ctaPrimary}</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/product">{t.ctaSecondary}</Link>
              </Button>
            </div>
            <p className="mt-4 text-[13px] text-muted-foreground">{t.note}</p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* From document to declaration */}
      <section className="py-20">
        <div className="container">
          <SectionHeading align="center" eyebrow={t.flowEyebrow} title={t.flowTitle} />
          <ol className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.flow.map(([title, desc], i) => (
              <li key={title}>
                <span className="num-badge">{i + 1}</span>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-section py-20">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow={t.modulesEyebrow}
            title={t.modulesTitle}
            description={t.modulesDesc}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <ModuleCard key={m.title} icon={m.icon} title={m.title} value={m.value} />
            ))}
          </div>
        </div>
      </section>

      {/* Why SDM */}
      <section className="py-20">
        <div className="container">
          <SectionHeading align="center" eyebrow={t.whyEyebrow} title={t.whyTitle} description={t.whyDesc} />
          <div className="mx-auto mt-12 grid max-w-5xl gap-x-10 gap-y-8 sm:grid-cols-2">
            {t.reasons.map(({ title, desc }, i) => {
              const Icon = reasonIcons[i];
              return (
                <div key={title} className="flex gap-4 border-t border-border pt-6">
                  <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                  <div>
                    <h4 className="mb-2 font-semibold">{title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="bg-section py-20">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow={t.audienceEyebrow}
            title={t.audienceTitle}
            description={t.audienceDesc}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.audiences.map(({ title, desc }, i) => {
              const Icon = audienceIcons[i];
              return (
                <div key={title} className="flex flex-col border-t-[3px] border-brand bg-card p-7 shadow-panel">
                  <Icon className="mb-4 h-6 w-6 text-brand" />
                  <h3 className="mb-3 text-lg font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand secondaryLabel={t.ctaBandSecondary} secondaryTo="/pricing" />
    </Layout>
  );
};

export default Index;
