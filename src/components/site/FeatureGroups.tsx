import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import type { FeatureGroup } from "@/content/features";

interface Props {
  groups: FeatureGroup[];
  navLabel: string;
}

/** Module-by-module feature list with a sticky side index on wide screens. */
const FeatureGroups = ({ groups, navLabel }: Props) => {
  const [active, setActive] = useState(groups[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      // Treat a group as current while it crosses the upper third of the viewport.
      { rootMargin: "-20% 0px -65% 0px" },
    );
    groups.forEach((g) => {
      const el = document.getElementById(g.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [groups]);

  const jump = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr]">
      <nav aria-label={navLabel} className="hidden lg:block">
        <ol className="sticky top-24 space-y-0.5 border-l border-border">
          {groups.map((g, i) => (
            <li key={g.id}>
              <a
                href={`#${g.id}`}
                onClick={(e) => jump(e, g.id)}
                className={`-ml-px flex gap-2.5 border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                  active === g.id
                    ? "border-brand font-semibold text-primary"
                    : "border-transparent text-muted-foreground hover:text-primary"
                }`}
              >
                <span className="w-4 tabular-nums">{i + 1}</span>
                {g.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-6">
        {groups.map(({ id, icon: Icon, title, intro, points }, i) => (
          <article
            key={id}
            id={id}
            className="scroll-mt-24 rounded-md border border-panel-border bg-card p-6 shadow-panel sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="num-badge flex-shrink-0">{i + 1}</span>
              <h3 className="text-lg font-semibold leading-snug">{title}</h3>
              <Icon className="ml-auto hidden h-5 w-5 flex-shrink-0 text-brand sm:block" aria-hidden="true" />
            </div>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-foreground/80">{intro}</p>
            <ul className="mt-5 grid gap-x-8 gap-y-2.5 border-t border-border pt-5 md:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FeatureGroups;
