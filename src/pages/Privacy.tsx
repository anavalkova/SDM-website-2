import Layout from "@/components/layout/Layout";
import { useT } from "@/i18n/LanguageProvider";

const copy = {
  bg: {
    eyebrow: "Правно",
    heading: "Политика за поверителност",
    updated: "Последна актуализация: февруари 2026 г.",
    sections: [
      {
        t: "1. Администратор на лични данни",
        d: "Smart Data Management („ние“) управлява уебсайта и облачното приложение Smart Data Management. Тази политика описва как събираме, използваме и защитаваме вашите лични данни.",
      },
      {
        t: "2. Какви данни събираме",
        d: "Събираме данните, които ни предоставяте: име, имейл адрес, наименование на фирмата и данни за фактуриране. Събираме и данни за използването, посетени страници, използвани функции и продължителност на сесията.",
      },
      {
        t: "3. Как използваме данните",
        d: "Използваме данните, за да предоставяме и подобряваме услугата, да обработваме плащания, да изпращаме съобщения, свързани с акаунта, и да спазваме законовите си задължения. Не продаваме лични данни на трети страни.",
      },
      {
        t: "4. Съхранение и сигурност",
        d: "Всички данни се съхраняват в дата центрове в Европейския съюз, с криптиране при съхранение и при пренос. Прилагаме контрол на достъпа, редовни одити на сигурността и автоматични резервни копия.",
      },
      {
        t: "5. Вашите права",
        d: "Съгласно GDPR имате право на достъп, коригиране, изтриване и преносимост на вашите лични данни. За да упражните тези права, пишете ни на privacy@smartdatamanagement.bg.",
      },
      {
        t: "6. Бисквитки",
        d: "Използваме задължителни бисквитки за поддържане на сесията и предпочитанията ви. Аналитичните бисквитки ни помагат да разберем как се използва сайтът. Можете да управлявате бисквитките от настройките на браузъра си.",
      },
      {
        t: "7. Контакт",
        d: "За въпроси относно тази политика: privacy@smartdatamanagement.bg.",
      },
    ],
  },
  en: {
    eyebrow: "Legal",
    heading: "Privacy Policy",
    updated: "Last updated: February 2026",
    sections: [
      {
        t: "1. Data Controller",
        d: "Smart Data Management (\"we\") operates the Smart Data Management website and cloud application. This policy describes how we collect, use and protect your personal data.",
      },
      {
        t: "2. What data we collect",
        d: "We collect the data you provide to us: name, email address, company name and billing details. We also collect usage data, pages visited, features used and session duration.",
      },
      {
        t: "3. How we use the data",
        d: "We use the data to provide and improve the service, process payments, send account-related communications and comply with our legal obligations. We do not sell personal data to third parties.",
      },
      {
        t: "4. Storage and security",
        d: "All data is stored in data centers in the European Union, with encryption at rest and in transit. We apply access controls, regular security audits and automatic backups.",
      },
      {
        t: "5. Your rights",
        d: "Under GDPR you have the right to access, correct, delete and transfer your personal data. To exercise these rights, write to us at privacy@smartdatamanagement.bg.",
      },
      {
        t: "6. Cookies",
        d: "We use essential cookies to maintain your session and preferences. Analytics cookies help us understand how the site is used. You can manage cookies from your browser settings.",
      },
      {
        t: "7. Contact",
        d: "For questions about this policy: privacy@smartdatamanagement.bg.",
      },
    ],
  },
};

const Privacy = () => {
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

export default Privacy;
