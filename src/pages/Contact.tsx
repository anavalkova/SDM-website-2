import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock, Check } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

const copy = {
  bg: {
    eyebrow: "Контакт",
    heading: "Свържете се с нас",
    subheading: "Имате въпроси? Искате да заявите демо? Готови сме да помогнем.",
    formTitle: "Изпратете ни съобщение",
    sentText: "Благодарим! Получихме съобщението ви и ще отговорим в рамките на един работен ден.",
    nameLabel: "Вашето име",
    emailLabel: "Имейл адрес",
    companyLabel: "Фирма (незадължително)",
    messageLabel: "Съобщение",
    submit: "Изпратете съобщение",
    toastTitle: "Съобщението е изпратено",
    toastDescription: "Ще се свържем с вас в рамките на един работен ден.",
    contactInfoTitle: "Информация за контакт",
    contactItems: [
      { icon: Mail, label: "Имейл", value: "info@smartdatamanagement.bg" },
      { icon: MapPin, label: "Адрес", value: "София, България" },
      { icon: Clock, label: "Работно време", value: "Пон – Пет, 9:00 – 18:00 ч." },
    ],
    demoTitle: "Искате демо на платформата?",
    demoDescription: "90 дни безплатно, без кредитна карта, без ангажимент. Свързваме се с вас и настройваме профила заедно.",
    demoBadges: ["90 дни безплатно", "Без кредитна карта", "Пълен достъп"],
  },
  en: {
    eyebrow: "Contact",
    heading: "Get in touch",
    subheading: "Have questions? Want to request a demo? We're ready to help.",
    formTitle: "Send us a message",
    sentText: "Thank you! We've received your message and will reply within one business day.",
    nameLabel: "Your name",
    emailLabel: "Email address",
    companyLabel: "Company (optional)",
    messageLabel: "Message",
    submit: "Send message",
    toastTitle: "Message sent",
    toastDescription: "We'll get back to you within one business day.",
    contactInfoTitle: "Contact information",
    contactItems: [
      { icon: Mail, label: "Email", value: "info@smartdatamanagement.bg" },
      { icon: MapPin, label: "Address", value: "Sofia, Bulgaria" },
      { icon: Clock, label: "Business hours", value: "Mon – Fri, 9:00 AM – 6:00 PM" },
    ],
    demoTitle: "Want a platform demo?",
    demoDescription: "90 days free, no credit card, no commitment. We get in touch and set the account up with you.",
    demoBadges: ["90 days free", "No credit card", "Full access"],
  },
};

const Contact = () => {
  const t = useT(copy);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast({ title: t.toastTitle, description: t.toastDescription });
  };

  return (
    <Layout>
      <section className="bg-primary-dark">
        <div className="container py-10 lg:py-12">
          <span className="eyebrow text-primary-foreground/55">{t.eyebrow}</span>
          <h1 className="mt-2 font-display text-3xl leading-tight text-primary-foreground">{t.heading}</h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-primary-foreground/75">
            {t.subheading}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="panel p-3 shadow-panel">
            <div className="panel-inner p-7">
              <h2 className="mb-6 text-lg font-semibold">{t.formTitle}</h2>
              {sent ? (
                <div className="border-l-[3px] border-green bg-green-soft/60 px-5 py-6">
                  <Check className="mb-2 h-5 w-5 text-green" />
                  <p className="text-sm text-foreground/80">
                    {t.sentText}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">{t.nameLabel}</Label>
                    <Input id="name" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.emailLabel}</Label>
                    <Input id="email" type="email" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="company">{t.companyLabel}</Label>
                    <Input id="company" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="message">{t.messageLabel}</Label>
                    <Textarea id="message" rows={5} required className="mt-1.5" />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    {t.submit}
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-lg font-semibold">{t.contactInfoTitle}</h2>
              <div className="divide-y divide-border border-y border-border">
                {t.contactItems.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4 py-5">
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green" />
                    <div>
                      <div className="eyebrow mb-1">{label}</div>
                      <div className="text-sm text-foreground/85">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t-[3px] border-primary bg-card p-7 shadow-panel">
              <h3 className="mb-3 font-semibold">{t.demoTitle}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t.demoDescription}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.demoBadges.map((b) => (
                  <span
                    key={b}
                    className="rounded-[3px] border border-panel-border bg-panel px-2.5 py-1 text-[11px] font-medium text-primary"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
