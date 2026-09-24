import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/site/SectionHeading";
import CtaBand from "@/components/site/CtaBand";
import { Target, Flag, TrendingUp } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

const copy = {
  bg: {
    eyebrow: "За нас",
    heading: "За Smart Data Management",
    intro:
      "Изградихме инструмента, който искахме да съществува, модерна облачна платформа за счетоводство, фактуриране и бизнес управление, разработена с практиков опит в счетоводни, административни и търговски процеси.",
    storyEyebrow: "История",
    storyTitle: "Нашата история",
    storyParagraphs: [
      "Smart Data Management се роди от реален проблем: счетоводните кантори в България разчитат на остарели десктоп системи, изискващи локална инсталация и ИТ поддръжка, или на международни облачни инструменти, непригодени за НСС и НАП форматите.",
      "Решихме да изградим нещо по-добро, облачна платформа, в която сметкопланът следва НСС, ДДС дневниците са в правилния НАП формат, а VIES декларацията е вградена. Без конфигурация. Работи правилно от самото начало.",
      "Днес работим с първите кантори и фирми, които ползват SDM преди официалния старт. Данните им се съхраняват в европейска инфраструктура, в съответствие с GDPR.",
    ],
    stats: [
      ["2024", "Година на основаване"],
      ["100%", "Облачно · Без инсталация · Без архиви"],
      ["EU", "Данни в европейска инфраструктура · GDPR"],
    ],
    missionEyebrow: "Мисия",
    missionTitle: "Нашата мисия",
    missionDescription:
      "Да направим модерното, съответстващо счетоводство достъпно за всяка фирма в България, независимо от размера й, чрез платформа, изградена от практикуващи счетоводители.",
    values: [
      {
        icon: Target,
        title: "Точност преди всичко",
        desc: "Счетоводството изисква прецизност. Всеки модул е изграден да работи правилно от самото начало, не приблизително, а точно.",
      },
      {
        icon: Flag,
        title: "Местна съответственост",
        desc: "Изградени сме специално за България. НСС, ЗДДС, НАП, не като добавка, а като основа на платформата.",
      },
      {
        icon: TrendingUp,
        title: "Мащаб без сложност",
        desc: "Нашите клиенти трябва да могат да растат без да нарастват разходите или сложността на инструментите им.",
      },
    ],
    teamTitle: "Екипът",
    teamDescription:
      "Екипът на SDM се състои от разработчици, счетоводители и консултанти с дългогодишен опит във финансовия сектор на България.",
    teamComingSoon: "Профили на екипа, скоро",
  },
  en: {
    eyebrow: "About us",
    heading: "About Smart Data Management",
    intro:
      "We built the tool we wished existed, a modern cloud platform for accounting, invoicing, and business management, developed with hands-on experience in accounting, administrative, and business processes.",
    storyEyebrow: "History",
    storyTitle: "Our story",
    storyParagraphs: [
      "Smart Data Management was born out of a real problem: accounting firms in Bulgaria rely on outdated desktop systems that require local installation and IT support, or on international cloud tools that aren't built for National Accounting Standards and NRA formats.",
      "We decided to build something better, a cloud platform where the chart of accounts follows National Accounting Standards, VAT ledgers are in the correct NRA format, and VIES declarations are built in. No configuration needed. It works correctly from day one.",
      "Today we work with the first accounting firms and companies using SDM ahead of the official launch. Their data is stored on European infrastructure, GDPR compliant.",
    ],
    stats: [
      ["2024", "Year founded"],
      ["100%", "Cloud-based · No installation · No local backups"],
      ["EU", "Data on European infrastructure · GDPR"],
    ],
    missionEyebrow: "Mission",
    missionTitle: "Our mission",
    missionDescription:
      "To make modern, compliant accounting accessible to every business in Bulgaria, regardless of size, through a platform built by practicing accountants.",
    values: [
      {
        icon: Target,
        title: "Accuracy above all",
        desc: "Accounting demands precision. Every module is built to work correctly from the start, not approximately, but exactly.",
      },
      {
        icon: Flag,
        title: "Local compliance",
        desc: "We're built specifically for Bulgaria. National Accounting Standards, VAT, NRA, not as an add-on, but as the foundation of the platform.",
      },
      {
        icon: TrendingUp,
        title: "Scale without complexity",
        desc: "Our customers should be able to grow without growing the cost or complexity of their tools.",
      },
    ],
    teamTitle: "The team",
    teamDescription:
      "The SDM team consists of developers, accountants, and consultants with years of experience in Bulgaria's financial sector.",
    teamComingSoon: "Team profiles, coming soon",
  },
};

const About = () => {
  const t = useT(copy);
  return (
    <Layout>
      <section className="bg-primary-dark">
        <div className="container py-10 lg:py-12">
          <span className="eyebrow text-primary-foreground/55">{t.eyebrow}</span>
          <h1 className="mt-2 max-w-3xl font-display text-3xl leading-tight text-primary-foreground">
            {t.heading}
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/75">
            {t.intro}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading eyebrow={t.storyEyebrow} title={t.storyTitle} />
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              {t.storyParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="panel h-fit p-3 shadow-panel">
            <div className="divide-y divide-border rounded-[4px] bg-card">
              {t.stats.map(([value, label]) => (
                <div key={label} className="px-6 py-6">
                  <div className="font-display text-3xl text-primary">{value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section py-20">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow={t.missionEyebrow}
            title={t.missionTitle}
            description={t.missionDescription}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border-t-[3px] border-primary bg-card p-7 shadow-panel">
                <Icon className="mb-4 h-6 w-6 text-brand" />
                <h4 className="mb-2 font-semibold">{title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl">{t.teamTitle}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            {t.teamDescription}
          </p>
          <p className="mt-6 inline-block border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
            {t.teamComingSoon}
          </p>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
};

export default About;
