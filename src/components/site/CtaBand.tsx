import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/LanguageProvider";

const fallback = {
  bg: {
    title: "Готови да започнете?",
    description: "90 дни безплатно. Без кредитна карта. Помагаме ви с настройката.",
    primary: "Започнете безплатно",
  },
  en: {
    title: "Ready to get started?",
    description: "90 days free. No credit card. We help you set up.",
    primary: "Start free",
  },
};

interface Props {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

const CtaBand = ({
  title,
  description,
  primaryLabel,
  primaryTo = "/early-access",
  secondaryLabel,
  secondaryTo,
}: Props) => {
  const f = useT(fallback);

  return (
  <section className="bg-primary-dark">
    <div className="container py-16 text-center">
      <h2 className="font-display text-3xl text-primary-foreground">{title ?? f.title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-primary-foreground/75">{description ?? f.description}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="onDark" size="lg">
          <Link to={primaryTo}>{primaryLabel ?? f.primary}</Link>
        </Button>
        {secondaryLabel && secondaryTo && (
          <Button asChild variant="onDarkOutline" size="lg">
            <Link to={secondaryTo}>{secondaryLabel}</Link>
          </Button>
        )}
      </div>
      </div>
    </section>
  );
};

export default CtaBand;
