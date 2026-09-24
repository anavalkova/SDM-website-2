import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { Tag, Users, Headphones, Clock, Check } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

const selectClass =
  "mt-1.5 flex h-10 w-full rounded-[4px] border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const copy = {
  bg: {
    eyebrow: "Ограничен ранен достъп",
    heroTitle: "Бъдете сред първите да работят с SDM.",
    heroText: "Работим с ограничен брой кантори и фирми преди официалния старт. Преференциална цена, директна връзка с екипа и лично въвеждане.",
    benefits: [
      { title: "Преференциална цена", desc: "Цена, фиксирана за първите 12 месеца." },
      { title: "Директна връзка с екипа", desc: "Личен контакт в екипа и реално влияние върху развитието." },
      { title: "Посветено въвеждане", desc: "Настройваме работното пространство и прехвърляме данните ви заедно." },
      { title: "90-дневен безплатен пробен период", desc: "Всички пакети започват с 90 дни безплатно, без кредитна карта." },
    ],
    formHeading: "Заявете ранен достъп",
    inquiryLabel: "Как бихте се описали?",
    inquiryPlaceholder: "Изберете...",
    inquiryTypes: [
      "Ранен достъп, Счетоводна кантора",
      "Ранен достъп, Малка или средна фирма",
      "Ранен достъп, Корпорация или публична администрация",
      "Заявка за демонстрация",
      "Партньорство",
      "Друго",
    ],
    nameLabel: "Три имена",
    companyLabel: "Наименование на фирмата",
    emailLabel: "Работен имейл",
    phoneLabel: "Телефон (по желание)",
    employeeLabel: "Брой служители",
    employeePlaceholder: "Изберете...",
    employeeCounts: ["До 2 души", "2–5 души", "6–20 души", "Над 20 души"],
    clientsLabel: "Колко клиентски фирми управлявате?",
    extraLabel: "Допълнителна информация (по желание)",
    extraPlaceholder: "Текущ софтуер, специфични изисквания, желан срок за старт...",
    submit: "Заявете ранен достъп",
    formFooter: "Отговаряме в рамките на един работен ден. Без автоматизирани последователности, реален разговор с екипа.",
    submittedHeading: "Заявката е получена.",
    submittedText: "Ще се свържем с вас в рамките на един работен ден. За спешни въпроси: support@smartdatamanagement.com",
  },
  en: {
    eyebrow: "Limited early access",
    heroTitle: "Be among the first to work with SDM.",
    heroText: "We work with a limited number of firms ahead of the official launch. Preferential pricing, a direct line to the team and personal onboarding.",
    benefits: [
      { title: "Preferential pricing", desc: "A price fixed for your first 12 months." },
      { title: "Direct line to the team", desc: "A named contact on the team and real influence on the roadmap." },
      { title: "Dedicated onboarding", desc: "We set up your workspace and move your data together with you." },
      { title: "90-day free trial", desc: "Every plan starts with 90 days free, no credit card." },
    ],
    formHeading: "Request early access",
    inquiryLabel: "How would you describe yourself?",
    inquiryPlaceholder: "Select...",
    inquiryTypes: [
      "Early access, Accounting firm",
      "Early access, Small or medium business",
      "Early access, Corporation or public institution",
      "Demo request",
      "Partnership",
      "Other",
    ],
    nameLabel: "Full name",
    companyLabel: "Company name",
    emailLabel: "Work email",
    phoneLabel: "Phone (optional)",
    employeeLabel: "Number of employees",
    employeePlaceholder: "Select...",
    employeeCounts: ["Up to 2 people", "2–5 people", "6–20 people", "Over 20 people"],
    clientsLabel: "How many client companies do you manage?",
    extraLabel: "Additional information (optional)",
    extraPlaceholder: "Current software, specific requirements, desired start date...",
    submit: "Request early access",
    formFooter: "We respond within one business day. No automated sequences, a real conversation with the team.",
    submittedHeading: "Your request has been received.",
    submittedText: "We'll be in touch within one business day. For urgent matters: support@smartdatamanagement.com",
  },
};

const EarlyAccess = () => {
  const t = useT(copy);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("");

  const isAccountingFirm = inquiryType === t.inquiryTypes[0];

  if (submitted) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container max-w-xl">
            <div className="panel p-3 shadow-panel">
              <div className="panel-inner p-7">
                <div className="border-l-[3px] border-green bg-green-soft/60 px-5 py-6">
                  <Check className="mb-2 h-5 w-5 text-green" />
                  <h2 className="mb-2 text-lg font-semibold">{t.submittedHeading}</h2>
                  <p className="text-sm text-foreground/80">{t.submittedText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary-dark">
        <div className="container py-10 lg:py-12">
          <span className="eyebrow text-primary-foreground/55">{t.eyebrow}</span>
          <h1 className="mt-2 font-display text-3xl leading-tight text-primary-foreground">
            {t.heroTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/75">
            {t.heroText}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-section">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {t.benefits.map((b, i) => {
              const Icon = [Tag, Users, Headphones, Clock][i];
              return (
                <div key={b.title} className="bg-background border border-border p-6 shadow-panel">
                  <Icon className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">{b.title}</h4>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="container max-w-xl">
          <div className="panel p-3 shadow-panel">
            <div className="panel-inner p-7">
              <h2 className="mb-6 text-lg font-semibold">{t.formHeading}</h2>
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-5"
              >
                <div>
                  <Label htmlFor="inquiry">{t.inquiryLabel}</Label>
                  <select
                    id="inquiry"
                    required
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className={selectClass}
                  >
                    <option value="">{t.inquiryPlaceholder}</option>
                    {t.inquiryTypes.map((ty) => (
                      <option key={ty} value={ty}>{ty}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="ea-name">{t.nameLabel}</Label>
                  <Input id="ea-name" required className="mt-1.5" />
                </div>

                <div>
                  <Label htmlFor="ea-company">{t.companyLabel}</Label>
                  <Input id="ea-company" required className="mt-1.5" />
                </div>

                <div>
                  <Label htmlFor="ea-email">{t.emailLabel}</Label>
                  <Input id="ea-email" type="email" required className="mt-1.5" />
                </div>

                <div>
                  <Label htmlFor="ea-phone">{t.phoneLabel}</Label>
                  <Input id="ea-phone" className="mt-1.5" />
                </div>

                <div>
                  <Label htmlFor="ea-employees">{t.employeeLabel}</Label>
                  <select id="ea-employees" required className={selectClass}>
                    <option value="">{t.employeePlaceholder}</option>
                    {t.employeeCounts.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {isAccountingFirm && (
                  <div>
                    <Label htmlFor="ea-clients">{t.clientsLabel}</Label>
                    <Input id="ea-clients" className="mt-1.5" />
                  </div>
                )}

                <div>
                  <Label htmlFor="ea-extra">{t.extraLabel}</Label>
                  <Textarea
                    id="ea-extra"
                    rows={5}
                    placeholder={t.extraPlaceholder}
                    className="mt-1.5"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">{t.submit}</Button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground">
                {t.formFooter}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EarlyAccess;
