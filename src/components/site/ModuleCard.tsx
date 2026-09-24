import { LucideIcon } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

const labels = {
  bg: { soon: "Скоро", benefit: "Ползата за вас" },
  en: { soon: "Soon", benefit: "What you get" },
};

interface Props {
  index?: number;
  icon?: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  benefit?: string;
  soon?: boolean;
}

const ModuleCard = ({ index, icon: Icon, title, description, tags, benefit, soon }: Props) => {
  const l = useT(labels);

  return (
    <div className="panel shadow-panel">
      <div className="panel-inner h-full p-6">
        <div className="mb-4 flex items-center gap-3">
          {index !== undefined ? (
            <span className="num-badge">{index}</span>
          ) : Icon ? (
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-[3px] bg-brand-soft text-brand">
              <Icon className="h-[18px] w-[18px]" />
            </span>
          ) : null}
          <h3 className="text-base font-semibold leading-snug">{title}</h3>
          {soon && (
            <span className="ml-auto rounded-[3px] bg-sand px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-sand-foreground">
              {l.soon}
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-[3px] border border-panel-border bg-panel px-2 py-1 text-[11px] font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        {benefit && (
          <div className="mt-5 border-l-[3px] border-brand bg-brand-soft/60 px-4 py-3">
            <div className="eyebrow mb-1 text-primary">{l.benefit}</div>
            <p className="text-sm text-foreground/80">{benefit}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleCard;
