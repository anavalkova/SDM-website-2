import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

const copy = {
  bg: {
    eyebrow: "Как работи",
    heading: "От регистрация до работа за един ден",
    intro: "Следвайте четири стъпки и ще имате напълно конфигурирано счетоводно работно пространство.",
    faqHeading: "Често задавани въпроси",
    steps: [
      {
        step: 1,
        title: "Създайте акаунт",
        desc: "Регистрирайте се с имейл, изберете пакет и потвърдете акаунта си. Отнема под три минути.",
      },
      {
        step: 2,
        title: "Настройте работното пространство",
        desc: "Въведете данните на фирмата, конфигурирайте сметкоплана и задайте финансовата година. При пакет Практика, добавете всички клиентски фирми.",
      },
      {
        step: 3,
        title: "Поканете екипа си",
        desc: "Добавете потребители, задайте роли и права по фирма и по модул.",
      },
      {
        step: 4,
        title: "Започнете работа",
        desc: "Издайте първата си фактура, осчетоводете първата операция и генерирайте първия си отчет.",
      },
    ],
    faqs: [
      {
        q: "Мога ли да сменя пакета по-късно?",
        a: "Да. Надграждате или понижавате пакета по всяко време от настройките на акаунта. Промяната влиза в сила от следващия платежен период.",
      },
      {
        q: "Мога ли да управлявам множество фирми?",
        a: "Да, при пакет Практика и Корпоративен. Всяка фирма е напълно изолирана в собствено работно пространство.",
      },
      {
        q: "Сигурни ли са данните ми?",
        a: "Всички данни се съхраняват в европейски дата центрове в пълно съответствие с GDPR. Достъпът е защитен с двуфакторно удостоверяване.",
      },
      {
        q: "Какво се случва след пробния период?",
        a: "Изберете пакет и въведете данни за плащане. Ако не го направите, акаунтът преминава в режим само за четене, данните се запазват.",
      },
      {
        q: "Как получавам поддръжка?",
        a: "Чрез имейл за всички пакети. Пакетите Практика и Корпоративен включват приоритетна поддръжка с гарантирано време за отговор.",
      },
    ],
  },
  en: {
    eyebrow: "How it works",
    heading: "From sign-up to fully operational in one day",
    intro: "Follow four steps and you'll have a fully configured accounting workspace.",
    faqHeading: "Frequently asked questions",
    steps: [
      {
        step: 1,
        title: "Create an account",
        desc: "Sign up with your email, choose a plan and confirm your account. Takes under three minutes.",
      },
      {
        step: 2,
        title: "Set up your workspace",
        desc: "Enter your company details, configure the chart of accounts and set the financial year. On the Practice plan, add all your client companies.",
      },
      {
        step: 3,
        title: "Invite your team",
        desc: "Add users, and assign roles and permissions per company and per module.",
      },
      {
        step: 4,
        title: "Start working",
        desc: "Issue your first invoice, post your first transaction and generate your first report.",
      },
    ],
    faqs: [
      {
        q: "Can I change my plan later?",
        a: "Yes. You can upgrade or downgrade your plan at any time from your account settings. The change takes effect from the next billing period.",
      },
      {
        q: "Can I manage multiple companies?",
        a: "Yes, on the Practice and Enterprise plans. Each company is fully isolated in its own workspace.",
      },
      {
        q: "Is my data secure?",
        a: "All data is stored in European data centers in full compliance with GDPR. Access is protected with two-factor authentication.",
      },
      {
        q: "What happens after the trial period?",
        a: "Choose a plan and enter payment details. If you don't, your account switches to read-only mode, your data is preserved.",
      },
      {
        q: "How do I get support?",
        a: "Via email on all plans. The Practice and Enterprise plans include priority support with a guaranteed response time.",
      },
    ],
  },
};

const GetStarted = () => {
  const t = useT(copy);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <section className="bg-primary-dark">
        <div className="container py-10">
          <span className="eyebrow text-primary-foreground/55">{t.eyebrow}</span>
          <h1 className="mt-2 font-display text-3xl leading-tight text-primary-foreground">
            {t.heading}
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/75">
            {t.intro}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="divide-y divide-border border-y border-border">
            {t.steps.map((item) => (
              <div key={item.step} className="flex gap-6 py-8">
                <span className="num-badge flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section py-16">
        <div className="container max-w-3xl">
          <h2 className="mb-8 font-display text-3xl">{t.faqHeading}</h2>
          <div className="space-y-3">
            {t.faqs.map((faq, i) => (
              <div key={i} className="border border-border bg-card shadow-panel">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[15px] font-medium">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-green transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="border-t border-border px-6 py-4">
                    <p className="text-[15px] leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;
