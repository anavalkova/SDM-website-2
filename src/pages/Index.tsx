import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/site/SectionHeading";
import ModuleCard from "@/components/site/ModuleCard";
import TrustBar from "@/components/site/TrustBar";
import CtaBand from "@/components/site/CtaBand";
import { useT } from "@/i18n/LanguageProvider";
import heroBg from "@/assets/hero-bg-light.jpg";
import {
  FileText,
  Wallet,
  ListTree,
  Landmark,
  Receipt,
  SlidersHorizontal,
  Building2,
  ShieldCheck,
  Coins,
  Globe,
  Zap,
  History,
  ArrowRight,
  Rocket,
  Building,
} from "lucide-react";

const moduleIcons = [FileText, Wallet, ListTree, Landmark, Receipt, SlidersHorizontal];
const reasonIcons = [Building2, ShieldCheck, Coins, Globe, Zap, History];
const audienceIcons = [Building, Rocket, Landmark];
const audienceLinks = ["/product", "/pricing", "/contact"];

const copy = {
  bg: {
    badge: "Готово за НАП от първия ден · Изградено по НСС",
    titleA: "Всичко започва с",
    titleB: "правилните данни.",
    lead: "Smart Data Management е цялостна облачна платформа за счетоводство, фактуриране, финансово управление и свързаните организационни, административни и търговски процеси, изградена специално за Националните счетоводни стандарти на България.",
    ctaPrimary: "Започнете безплатно, 90 дни",
    ctaSecondary: "Разгледайте функциите",
    note: "Без кредитна карта · Без инсталация · Персонално въвеждане от наш екип",
    modulesEyebrow: "Модули",
    modulesTitle: "Всичко необходимо за вашето счетоводство",
    modulesDesc:
      "Всеки модул работи заедно в единно работно пространство. По-малко ръчна работа, пълна прозрачност в реално време.",
    whyEyebrow: "Защо SDM",
    whyTitle: "Защо Smart Data Management?",
    whyDesc:
      "Пазарът е разделен между остарели десктоп системи и международни инструменти, непригодени за местното законодателство. SDM запълва точно тази празнина.",
    audienceEyebrow: "За кого",
    audienceTitle: "За кого е Smart Data Management?",
    audienceDesc:
      "SDM е за собственици и мениджъри, които искат пълен контрол върху финансите на своята фирма, в реално време, без да разчитат на трети страни за всяка справка.",
    ctaBandSecondary: "Вижте пакетите",
    modules: [
      {
        title: "Търговски документи и фактуриране",
        description:
          "Фактури, проформи и кредитни известия за секунди. Автоматична номерация, правилен ДДС, директна връзка към счетоводния дневник. Без двойно въвеждане.",
      },
      {
        title: "Вземания от клиенти",
        description:
          "Следете просрочените задължения, управлявайте падежите и авансите. Виждате кой дължи и кога, 360-градусова история по клиент.",
      },
      {
        title: "Сметкоплан",
        description:
          "Конфигурируем сметкоплан по НСС или МСФО. Предварително структуриран по групи 1–9. Аналитичности, начални салда, импорт или конфигурация от нулата.",
      },
      {
        title: "Банка и каса",
        description:
          "Качете банково извлечение и системата съпоставя транзакциите. Множество банкови сметки, в едно работно пространство.",
      },
      {
        title: "ДДС, SAF-T и данъчна отчетност",
        description:
          "Автоматични дневници. Справка-декларация ЗДДС, VIES, SAF-T и Годишна данъчна декларация, готови за НАП. Без ръчно попълване.",
      },
      {
        title: "Административна конзола",
        description:
          "Управление на множество фирми с роли, права и финансови години. Превключване без изход.",
      },
    ],
    reasons: [
      {
        title: "Изграден за реалните процеси в бизнеса",
        desc: "Сметкопланът следва НСС. ДДС дневниците са в правилния НАП формат. VIES декларацията е вградена. Разработван с мисъл за счетоводните, административни и търговски процеси, нищо от това не изисква конфигурация.",
      },
      {
        title: "Данните на всяка фирма са напълно изолирани",
        desc: "Всяка фирма в напълно отделено работно пространство, собствен сметкоплан, собствени дневници. Клиентът вижда само своята фирма.",
      },
      {
        title: "Мащабиране без нарастване на разходите",
        desc: "Конкурентите таксуват на потребител или на фирма. При SDM планът Бизнес е с фиксирана месечна такса за неограничен брой клиентски фирми.",
      },
      {
        title: "Многовалутна работа",
        desc: "Поддръжка на BGN, EUR и всяка друга валута. Конфигурируем сметкоплан по НСС, МСФО или персонализирана структура.",
      },
      {
        title: "От фактурата до главната книга, автоматично",
        desc: "Всяка издадена фактура постъпва директно в дневника за продажби и главната книга. Без износ, без внос, без загуба на данни.",
      },
      {
        title: "Облак с данни в ЕС",
        desc: "Без инсталация. Без архиви. Данни в европейска инфраструктура, GDPR съвместимост.",
      },
    ],
    audiences: [
      {
        title: "Малки и микро фирми",
        desc: "Издавате фактури, следите плащанията и подавате ДДС, всичко от едно място, без счетоводен софтуер от миналото. Сметкопланът по НСС е вграден, а ние ви помагаме с настройката.",
        linkLabel: "Научете повече",
      },
      {
        title: "Растящи компании",
        desc: "Когато обемът нараства, SDM расте с вас, повече фактури, повече служители, повече банкови сметки, без да сменяте инструмента. Автоматизирайте рутината и се фокусирайте върху бизнеса.",
        linkLabel: "Научете повече",
      },
      {
        title: "По-големи компании и корпорации",
        desc: "Сложни структури с множество звена, строги изисквания за съответствие и нужда от интеграция с ERP или държавни системи. Персонализирана конфигурация, миграция на данни и API свързване.",
        linkLabel: "Свържете се с нас",
      },
    ],
  },
  en: {
    badge: "NRA-ready from day one · Built on National Accounting Standards",
    titleA: "It all starts with",
    titleB: "the right data.",
    lead: "Smart Data Management is a complete cloud platform for accounting, invoicing, financial management and the organisational, administrative and commercial processes around them, built specifically for the Bulgarian National Accounting Standards.",
    ctaPrimary: "Start free, 90 days",
    ctaSecondary: "Explore the features",
    note: "No credit card · No installation · Personal onboarding by our team",
    modulesEyebrow: "Modules",
    modulesTitle: "Everything your accounting needs",
    modulesDesc:
      "Every module works together in a single workspace. Less manual work, full transparency in real time.",
    whyEyebrow: "Why SDM",
    whyTitle: "Why Smart Data Management?",
    whyDesc:
      "The market is split between ageing desktop systems and international tools that do not fit local legislation. SDM fills exactly that gap.",
    audienceEyebrow: "Who it's for",
    audienceTitle: "Who is Smart Data Management for?",
    audienceDesc:
      "SDM is for owners and managers who want full control over their company finances, in real time, without depending on third parties for every report.",
    ctaBandSecondary: "See pricing",
    modules: [
      {
        title: "Commercial documents and invoicing",
        description:
          "Invoices, proformas and credit notes in seconds. Automatic numbering, correct VAT, a direct link to the accounting journal. No double entry.",
      },
      {
        title: "Accounts receivable",
        description:
          "Track overdue balances, manage due dates and advances. See who owes what and when, a 360-degree history per customer.",
      },
      {
        title: "Chart of accounts",
        description:
          "A configurable chart of accounts under National Accounting Standards or IFRS. Pre-structured into groups 1–9. Analytical accounts, opening balances, import or setup from scratch.",
      },
      {
        title: "Bank and cash",
        description:
          "Upload a bank statement and the system matches the transactions. Multiple bank accounts, in one workspace.",
      },
      {
        title: "VAT, SAF-T and tax reporting",
        description:
          "Automatic journals. VAT return, VIES, SAF-T and the annual tax return, ready for the NRA. No manual entry.",
      },
      {
        title: "Administration console",
        description:
          "Manage multiple companies with roles, permissions and financial years. Switch without signing out.",
      },
    ],
    reasons: [
      {
        title: "Built around how businesses actually work",
        desc: "The chart of accounts follows the National Accounting Standards. VAT journals come in the correct NRA format. The VIES declaration is built in. Designed around real accounting, administrative and commercial processes, none of it needs configuring.",
      },
      {
        title: "Every company's data is fully isolated",
        desc: "Each company lives in a completely separate workspace, its own chart of accounts, its own journals. A client only ever sees their own company.",
      },
      {
        title: "Scale without scaling costs",
        desc: "Competitors charge per user or per company. With SDM the Business plan is a fixed monthly fee for an unlimited number of client companies.",
      },
      {
        title: "Multi-currency operations",
        desc: "Support for BGN, EUR and any other currency. A configurable chart of accounts under NAS, IFRS or a custom structure.",
      },
      {
        title: "From invoice to general ledger, automatically",
        desc: "Every invoice you issue posts straight into the sales journal and the general ledger. No exports, no imports, no lost data.",
      },
      {
        title: "EU-hosted cloud",
        desc: "No installation. No backups to manage. Data in European infrastructure, GDPR compliant.",
      },
    ],
    audiences: [
      {
        title: "Small and micro companies",
        desc: "Issue invoices, track payments and file VAT, all from one place, without accounting software from another era. The NAS chart of accounts is built in, and we help you set everything up.",
        linkLabel: "Learn more",
      },
      {
        title: "Growing companies",
        desc: "As volume grows, SDM grows with you, more invoices, more employees, more bank accounts, without switching tools. Automate the routine and focus on the business.",
        linkLabel: "Learn more",
      },
      {
        title: "Larger companies and corporations",
        desc: "Complex structures with multiple units, strict compliance requirements and the need to integrate with ERP or government systems. Custom configuration, data migration and API connectivity.",
        linkLabel: "Contact us",
      },
    ],
  },
};

const Index = () => {
  const t = useT(copy);

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

      {/* Modules */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow={t.modulesEyebrow}
            title={t.modulesTitle}
            description={t.modulesDesc}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.modules.map((m, i) => (
              <ModuleCard key={m.title} icon={moduleIcons[i]} title={m.title} description={m.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Why SDM */}
      <section className="bg-section py-20">
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
      <section className="py-20">
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
