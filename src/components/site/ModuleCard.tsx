import { Check, LucideIcon } from "lucide-react";

interface Props {
  icon?: LucideIcon;
  title: string;
  /** One-line promise under the title. */
  value: string;
  /** Optional list of concrete capabilities. */
  points?: string[];
}

const ModuleCard = ({ icon: Icon, title, value, points }: Props) => (
  <div className="flex h-full flex-col rounded-md border border-panel-border bg-card p-6 shadow-panel">
    <div className="flex items-center gap-3">
      {Icon && (
        <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[3px] bg-brand-soft text-brand">
          <Icon className="h-[18px] w-[18px]" />
        </span>
      )}
      <h3 className="text-base font-semibold leading-snug">{title}</h3>
    </div>
    {/* Reserve two lines on wide grids so the point lists line up across a row. */}
    <p className={`mt-3 text-[15px] leading-relaxed text-foreground/80 ${points?.length ? "md:min-h-[3.25em]" : ""}`}>
      {value}
    </p>
    {points && points.length > 0 && (
      <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
        {points.map((p) => (
          <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green" />
            {p}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ModuleCard;
