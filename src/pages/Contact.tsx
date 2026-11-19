import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

// TODO: replace with the real SDM contact address before launch.
const CONTACT_EMAIL = "info@example.com";

const copy = {
  bg: {
    eyebrow: "Контакт",
    heading: "Свържете се с нас",
    subheading: "Имате въпроси? Искате да заявите демо? Готови сме да помогнем.",
    writeTitle: "Пишете ни",
    writeText: "Изпратете ни имейл с вашия въпрос или заявка за демо и ще отговорим в рамките на един работен ден.",
    writeButton: "Изпратете имейл",
    contactInfoTitle: "Информация за контакт",
    contactItems: [
      { icon: Mail, label: "Имейл", value: CONTACT_EMAIL },
      { icon: MapPin, label: "Адрес", value: "София, България" },
      { icon: Clock, label: "Работно време", value: "Пон–Пет, 9:00–18:00 ч." },
    ],
    demoTitle: "Искате демо на платформата?",
    demoDescription: "Пишете ни и ще се свържем с вас, за да ви покажем системата и да отговорим на въпросите ви.",
    demoBadges: ["Без ангажимент", "Отговор до един работен ден"],
  },
  en: {
    eyebrow: "Contact",
    heading: "Get in touch",
    subheading: "Have questions? Want to request a demo? We're ready to help.",
    writeTitle: "Write to us",
    writeText: "Send us an email with your question or demo request and we'll reply within one business day.",
    writeButton: "Send an email",
    contactInfoTitle: "Contact information",
    contactItems: [
      { icon: Mail, label: "Email", value: CONTACT_EMAIL },
      { icon: MapPin, label: "Address", value: "Sofia, Bulgaria" },
      { icon: Clock, label: "Business hours", value: "Mon–Fri, 9:00 AM–6:00 PM" },
    ],
    demoTitle: "Want a platform demo?",
    demoDescription: "Write to us and we will get in touch to show you the system and answer your questions.",
    demoBadges: ["No commitment", "Reply within one business day"],
  },
};

const Contact = () => {
  const t = useT(copy);

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
              <Mail className="mb-4 h-6 w-6 text-green" />
              <h2 className="mb-3 text-lg font-semibold">{t.writeTitle}</h2>
              <p className="mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">{t.writeText}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mb-6 block break-all font-display text-2xl text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              <Button asChild size="lg">
                <a href={`mailto:${CONTACT_EMAIL}`}>{t.writeButton}</a>
              </Button>
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
