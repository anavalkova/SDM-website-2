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
    badge: "Работи в евро · Сметкоплан по НСС · ДДС отчетност",
    titleA: "Всичко започва с",
    titleB: "правилните данни.",
    lead: "Издавате фактура и системата сама съставя статията, попълва дневника за продажбите и подготвя данните за справка-декларацията. Работите в браузъра, по българските счетоводни стандарти.",
    ctaPrimary: "Започнете безплатно, 90 дни",
    ctaSecondary: "Разгледайте функциите",
    note: "Без кредитна карта · Без инсталация · Помагаме ви с настройката",
    flowEyebrow: "Стъпка по стъпка",
    flowTitle: "Как протича работата",
    flow: [
      ["Настройвате фирмата", "Създавате фискалната година и получавате готов сметкоплан по НСС, журнали и аналитичности. Остава само да ги прегледате и допълните."],
      ["Въвеждате документите", "Издавате фактури, въвеждате покупки, банкови и касови операции. За всеки документ системата предлага статия, която можете да промените."],
      ["Осчетоводявате", "Когато документът е готов, го осчетоводявате и той веднага се отразява в главната книга, справките и дневника за ДДС."],
      ["Подготвяте декларациите", "Справката-декларация по ЗДДС и VIES декларацията се изготвят от въведените документи, без да пренабирате данни."],
    ],
    modulesEyebrow: "Модули",
    modulesTitle: "Какво включва системата",
    modulesDesc: "Фактурите, журналите, справките и ДДС отчетността ползват едни и същи записи, затова всеки документ се въвежда само веднъж.",
    whyEyebrow: "Защо SDM",
    whyTitle: "С какво SDM улеснява работата",
    whyDesc:
      "Много фирми работят с настолни програми, които трябва да се инсталират и поддържат, или с чуждестранни системи, които не са съобразени с НСС и НАП. SDM е облачна система, създадена за българската счетоводна практика.",
    audienceEyebrow: "За кого",
    audienceTitle: "За кого е SDM",
    audienceDesc: "За собственици и финансови екипи, които искат да знаят състоянието на фирмата във всеки момент, а не чак след месечното приключване.",
    ctaBandSecondary: "Вижте пакетите",
    reasons: [
      {
        title: "Не започвате от нулата",
        desc: "При създаването на годината сметкопланът по НСС, журналите и системните аналитичности вече са налични. Контрагентите и началните салда можете да заредите от файл.",
      },
      {
        title: "Въвеждате веднъж",
        desc: "Издадената фактура се записва и като статия в главната книга, и като ред в дневника за продажбите. Не е нужно да я експортирате или да я въвеждате отново.",
      },
      {
        title: "Работи в евро",
        desc: "При създаване на нова година основната валута е евро. Документите в друга валута въвеждате с курс, а сумите се пазят и в двете валути.",
      },
      {
        title: "Всяка сума се проследява",
        desc: "От оборотната ведомост и хронологията стигате до документа, от който идва всяка сума. Осчетоводен документ не се изтрива, а се коригира, като се върне в чернова.",
      },
      {
        title: "Отделни фирми и права за достъп",
        desc: "Данните на всяка фирма и всяка година се пазят отделно. С роли и права определяте кой въвежда, кой осчетоводява и кой само преглежда.",
      },
      {
        title: "Без инсталация, с данни в ЕС",
        desc: "Работите в браузъра и не се грижите за инсталации и архиви. Данните се съхраняват в Европейския съюз, в съответствие с GDPR.",
      },
    ],
    audiences: [
      {
        title: "Малки и микро фирми",
        desc: "Издавате фактури, следите кой ви дължи и подготвяте ДДС отчетността на едно място. Сметкопланът по НСС е вграден, а ние ви помагаме с настройката.",
      },
      {
        title: "Растящи фирми",
        desc: "Когато документите, потребителите и банковите сметки се увеличат, продължавате в същата система. Повтарящите се операции записвате като шаблони, а с правата определяте кой какво прави.",
      },
      {
        title: "По-големи компании",
        desc: "За групи с няколко фирми и по-сложна отчетност. Корпоративният пакет включва неограничен брой фирми, персонализиран сметкоплан и аналитичности, сметкоплан по МСФО и приоритетна поддръжка.",
      },
    ],
  },
  en: {
    badge: "Works in euro · Local chart of accounts · VAT reporting",
    titleA: "It all starts with",
    titleB: "the right data.",
    lead: "Issue an invoice and the system writes the entry, fills in the sales VAT journal and prepares the data for your VAT return. It runs in the browser and follows the Bulgarian accounting standards.",
    ctaPrimary: "Start free, 90 days",
    ctaSecondary: "Explore the features",
    note: "No credit card · No installation · We help you set up",
    flowEyebrow: "Step by step",
    flowTitle: "How the work goes",
    flow: [
      ["Set up the company", "Create the financial year and you get a ready chart of accounts, journals and analytics. All that is left is to review and extend them."],
      ["Enter your documents", "Issue invoices and record purchases, bank and cash operations. For each document the system suggests an entry you can change."],
      ["Post", "When a document is ready, you post it and it shows up straight away in the general ledger, the reports and the VAT journal."],
      ["Prepare the returns", "The VAT return and the VIES declaration are prepared from the documents you entered, with no retyping."],
    ],
    modulesEyebrow: "Modules",
    modulesTitle: "What the system covers",
    modulesDesc: "Invoicing, journals, reports and VAT reporting all use the same records, so each document is entered only once.",
    whyEyebrow: "Why SDM",
    whyTitle: "How SDM makes the work easier",
    whyDesc:
      "Many companies use desktop programs that have to be installed and maintained, or foreign systems that don't follow the local standards or the NRA. SDM is a cloud system made for Bulgarian accounting practice.",
    audienceEyebrow: "Who it's for",
    audienceTitle: "Who SDM is for",
    audienceDesc: "For owners and finance teams who want to know where the company stands at any moment, not only after the month is closed.",
    ctaBandSecondary: "See pricing",
    reasons: [
      {
        title: "You don't start from zero",
        desc: "When the year is created, the chart of accounts, journals and system analytics are already there. Counterparties and opening balances load from a file.",
      },
      {
        title: "Enter it once",
        desc: "An issued invoice is recorded both as a general-ledger entry and as a line in the sales VAT journal. You don't export it or type it in again.",
      },
      {
        title: "Works in euro",
        desc: "Euro is the base currency from the moment the year is created. Documents in other currencies are entered at a rate and kept in both currencies.",
      },
      {
        title: "Every amount can be traced",
        desc: "From the trial balance and the chronology you can get to the document behind every amount. A posted document is never deleted; you correct it by returning it to draft.",
      },
      {
        title: "Separate companies and access rights",
        desc: "Each company's and each year's data is kept separately. Roles and permissions decide who enters, who posts and who only views.",
      },
      {
        title: "No installation, data in the EU",
        desc: "You work in the browser and don't deal with installations or backups. Data is stored on European infrastructure, GDPR compliant.",
      },
    ],
    audiences: [
      {
        title: "Small and micro companies",
        desc: "Issue invoices, see who owes you and prepare your VAT reporting from one place. The chart of accounts is built in, and we help you set up.",
      },
      {
        title: "Growing companies",
        desc: "When documents, users and bank accounts grow, you carry on in the same system. Repeat operations become templates, and permissions decide who does what.",
      },
      {
        title: "Larger companies",
        desc: "For groups with several companies and more complex reporting. The Enterprise plan includes unlimited companies, a custom chart of accounts and analytics, an IFRS chart of accounts and priority support.",
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
