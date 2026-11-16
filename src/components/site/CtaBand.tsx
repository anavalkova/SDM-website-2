import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/LanguageProvider";

const fallback = {
  bg: {
    title: "Искате да научите повече?",
    description: "Свържете се с нас и ще ви покажем как SDM работи за вашата фирма.",
    primary: "Свържете се с нас",
  },
  en: {
    title: "Want to know more?",
    description: "Get in touch and we will show you how SDM works for your company.",
    primary: "Contact us",
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
  primaryTo = "/contact",
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
