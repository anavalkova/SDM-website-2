import { Cloud, Lock, ClipboardCheck, Rocket } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

const icons = [Cloud, Lock, ClipboardCheck, Rocket];

const copy = {
  bg: ["Изцяло облачно", "Данни в ЕС · GDPR", "НСС и НАП формати", "90-дневен безплатен период"],
  en: ["Fully cloud-based", "EU data · GDPR", "NAS & NRA formats", "90-day free trial"],
};

const TrustBar = () => {
  const labels = useT(copy);

  return (
    <div className="border-y border-border bg-section">
      <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4">
        {labels.map((label, i) => {
          const Icon = icons[i];
          return (
            <div key={label} className="flex items-center gap-2 text-[13px] text-muted-foreground">
              <Icon className="h-4 w-4 text-brand" />
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustBar;
