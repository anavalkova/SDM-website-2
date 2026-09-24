import Layout from "@/components/layout/Layout";
import { useT } from "@/i18n/LanguageProvider";

const copy = {
  bg: {
    eyebrow: "Правно",
    heading: "Общи условия",
    updated: "Последна актуализация: февруари 2026 г.",
    sections: [
      {
        t: "1. Приемане на условията",
        d: "С достъпа до или използването на платформата Smart Data Management вие се съгласявате с настоящите Общи условия. Ако не сте съгласни, не използвайте услугата.",
      },
      {
        t: "2. Описание на услугата",
        d: "Smart Data Management предоставя облачен софтуер за счетоводство, фактуриране и административно управление на абонаментен принцип. Наличните функции зависят от избрания пакет.",
      },
      {
        t: "3. Потребителски акаунти",
        d: "Вие отговаряте за опазването на данните си за достъп и за всички действия, извършени чрез вашия акаунт. Длъжни сте да предоставите точна и пълна информация при регистрация.",
      },
      {
        t: "4. Фактуриране и плащания",
        d: "Абонаментните такси се фактурират месечно или годишно според избора при регистрация. Цените могат да бъдат променяни с 30-дневно предизвестие. Възстановяване на суми при годишни абонаменти се разглежда индивидуално.",
      },
      {
        t: "5. Собственост върху данните",
        d: "Вие запазвате собствеността върху всички данни, които въвеждате в платформата. Ние обработваме данните ви единствено за предоставяне на услугата и съгласно Политиката за поверителност.",
      },
      {
        t: "6. Ограничаване на отговорността",
        d: "Smart Data Management не носи отговорност за непреки или последващи вреди, произтичащи от използването на услугата. Общата ни отговорност е ограничена до таксите, платени през последните дванадесет месеца.",
      },
      {
        t: "7. Прекратяване",
        d: "Можете да прекратите акаунта си по всяко време. След прекратяване данните остават достъпни в режим само за четене за 90 дни, след което се изтриват окончателно.",
      },
      {
        t: "8. Приложимо право",
        d: "Настоящите условия се уреждат от правото на Европейския съюз и приложимото законодателство на държавата членка по седалището ни.",
      },
    ],
  },
  en: {
    eyebrow: "Legal",
    heading: "Terms of Service",
    updated: "Last updated: February 2026",
    sections: [
      {
        t: "1. Acceptance of terms",
        d: "By accessing or using the Smart Data Management platform you agree to these Terms of Service. If you do not agree, do not use the service.",
      },
      {
        t: "2. Description of service",
        d: "Smart Data Management provides cloud software for accounting, invoicing and administrative management on a subscription basis. Available features depend on the plan selected.",
      },
      {
        t: "3. User accounts",
        d: "You are responsible for safeguarding your login credentials and for all actions performed through your account. You must provide accurate and complete information upon registration.",
      },
      {
        t: "4. Billing and payments",
        d: "Subscription fees are billed monthly or annually depending on the choice made at registration. Prices may be changed with 30 days' notice. Refunds for annual subscriptions are considered on a case-by-case basis.",
      },
      {
        t: "5. Data ownership",
        d: "You retain ownership of all data you enter into the platform. We process your data solely to provide the service and in accordance with the Privacy Policy.",
      },
      {
        t: "6. Limitation of liability",
        d: "Smart Data Management is not liable for indirect or consequential damages arising from the use of the service. Our total liability is limited to the fees paid in the preceding twelve months.",
      },
      {
        t: "7. Termination",
        d: "You may terminate your account at any time. After termination, data remains accessible in read-only mode for 90 days, after which it is permanently deleted.",
      },
      {
        t: "8. Governing law",
        d: "These terms are governed by the law of the European Union and the applicable legislation of the member state of our registered office.",
      },
    ],
  },
};

const Terms = () => {
  const t = useT(copy);
  return (
    <Layout>
      <section className="bg-primary-dark">
        <div className="container py-10">
          <span className="eyebrow text-primary-foreground/55">{t.eyebrow}</span>
          <h1 className="mt-2 font-display text-3xl text-primary-foreground">{t.heading}</h1>
          <p className="mt-4 text-sm text-primary-foreground/65">{t.updated}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container max-w-3xl divide-y divide-border">
          {t.sections.map((s) => (
            <div key={s.t} className="py-7">
              <h2 className="mb-3 text-lg font-semibold">{s.t}</h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
