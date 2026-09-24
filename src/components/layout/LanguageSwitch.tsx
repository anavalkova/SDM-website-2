import { useLang, Lang } from "@/i18n/LanguageProvider";

const options: { value: Lang; label: string }[] = [
  { value: "bg", label: "BG" },
  { value: "en", label: "EN" },
];

const LanguageSwitch = ({ className = "" }: { className?: string }) => {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`flex items-center rounded-[4px] ring-1 ring-primary/20 ${className}`}
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => setLang(opt.value)}
          aria-pressed={lang === opt.value}
          className={`px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors ${
            lang === opt.value
              ? "bg-primary text-primary-foreground"
              : "text-foreground/60 hover:text-primary"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
