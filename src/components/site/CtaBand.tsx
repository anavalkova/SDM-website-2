import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/LanguageProvider";

const fallback = {
  bg: {
    title: "Опитайте SDM безплатно",
    description: "Първите 90 дни са безплатни и не е нужна кредитна карта. Помагаме ви с първоначалната настройка.",
    primary: "Започнете безплатно",
  },
  en: {
    title: "Try SDM for free",
    description: "The first 90 days are free and no credit card is needed. We help you with the initial setup.",
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
