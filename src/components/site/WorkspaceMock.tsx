import {
  LayoutDashboard,
  Users,
  IdCard,
  FileBarChart2,
  FileText,
  Settings2,
  BookOpen,
  Search,
  Upload,
  Pencil,
  ChevronDown,
  ChevronRight,
  MoreVertical,
} from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

const copy = {
  bg: {
    app: "СЧЕТОВОДСТВО",
    company: "Роудли 2 ООД : 29857347598",
    month: "Месец 08",
    year: "Година 2026",
    nav: ["Табло", "Контрагенти", "Служители", "Справки", "Отчети", "Настройки", "Журнали"],
    subnav: ["Сметкоплан", "Аналитичности", "Начални салда", "Банкови сметки"],
    title: "Фирмен сметкоплан",
    importLabel: "ИМПОРТ",
    search: "номер / име на сметка",
    editLabel: "РЕДАКТИРАЙ",
    groups: [
      { code: "1", name: "Сметки за капитал и заеми" },
      { code: "2", name: "Сметки за дълготрайни активи" },
      { code: "3", name: "Сметки за стоково материални запаси" },
      { code: "4", name: "Сметки за разчети" },
    ],
    parent: { code: "40", name: "Доставчици и свързани с тях сметки" },
    children: [
      { code: "401", name: "Задължения към доставчици" },
      { code: "402", name: "Вземания от доставчици по аванси" },
      { code: "403", name: "Задължения към доставчици по търговски кредити" },
      { code: "405", name: "Задължения към доставчици – свързани лица" },
      { code: "409", name: "Други задължения към доставчици" },
    ],
    rest: [
      { code: "41", name: "Клиенти" },
      { code: "42", name: "Персонал и съдружници" },
      { code: "43", name: "Разчети по преводи и вътрешни разчети" },
      { code: "45", name: "Разчети с бюджета" },
      { code: "5", name: "Сметки за финансови средства" },
      { code: "6", name: "Сметки за разходи" },
      { code: "7", name: "Сметки за приходи" },
    ],
  },
  en: {
    app: "ACCOUNTING",
    company: "Roudli 2 OOD : 29857347598",
    month: "Month 08",
    year: "Year 2026",
    nav: ["Dashboard", "Partners", "Employees", "Reports", "Statements", "Settings", "Journals"],
    subnav: ["Chart of accounts", "Analytics", "Opening balances", "Bank accounts"],
    title: "Company chart of accounts",
    importLabel: "IMPORT",
    search: "account number / name",
    editLabel: "EDIT",
    groups: [
      { code: "1", name: "Capital and loan accounts" },
      { code: "2", name: "Non-current asset accounts" },
      { code: "3", name: "Inventory accounts" },
      { code: "4", name: "Settlement accounts" },
    ],
    parent: { code: "40", name: "Suppliers and related accounts" },
    children: [
      { code: "401", name: "Payables to suppliers" },
      { code: "402", name: "Receivables from suppliers on advances" },
      { code: "403", name: "Payables to suppliers on trade credits" },
      { code: "405", name: "Payables to suppliers – related parties" },
      { code: "409", name: "Other payables to suppliers" },
    ],
    rest: [
      { code: "41", name: "Customers" },
      { code: "42", name: "Personnel and partners" },
      { code: "43", name: "Transfers and internal settlements" },
      { code: "45", name: "Settlements with the budget" },
      { code: "5", name: "Financial asset accounts" },
      { code: "6", name: "Expense accounts" },
      { code: "7", name: "Revenue accounts" },
    ],
  },
};

const navIcons = [LayoutDashboard, Users, IdCard, FileBarChart2, FileText, Settings2, BookOpen];

const CodeBadge = ({ code, muted = false }: { code: string; muted?: boolean }) => (
  <span
    className={`inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[2px] px-1 text-[10px] font-bold tabular-nums ${
      muted
        ? "border border-primary/25 bg-card text-primary"
        : "bg-primary text-primary-foreground"
    }`}
  >
    {code}
  </span>
);

const WorkspaceMock = () => {
  const t = useT(copy);

  return (
    <div className="rounded-md bg-primary-foreground/5 p-2.5 ring-1 ring-primary-foreground/15">
      <div className="overflow-hidden rounded-[4px] bg-card shadow-raised">
        {/* App top bar */}
        <div className="flex items-center gap-3 bg-primary-dark px-3 py-2 text-primary-foreground">
          <span className="text-[13px] font-extrabold tracking-tight">
            SD<span className="text-sky-300">M</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.12em] text-primary-foreground/70">{t.app}</span>
          <span className="h-3.5 w-px bg-primary-foreground/25" />
          <span className="truncate text-[10px] font-semibold text-primary-foreground/90">{t.company}</span>
          <span className="ml-auto hidden gap-3 text-[10px] text-primary-foreground/70 sm:flex">
            <span>{t.month}</span>
            <span className="inline-flex items-center gap-0.5">
              {t.year} <ChevronDown className="h-3 w-3" />
            </span>
          </span>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-[132px] flex-shrink-0 border-r border-panel-border bg-card py-2 sm:block">
            {t.nav.map((label, i) => {
              const Icon = navIcons[i];
              const isSettings = i === 5;
              return (
                <div key={label}>
                  <div className="flex items-center gap-2 px-2.5 py-[5px] text-[10.5px] font-semibold text-primary">
                    <Icon className="h-3.5 w-3.5 text-primary/70" />
                    {label}
                  </div>
                  {isSettings &&
                    t.subnav.map((s, j) => (
                      <div
                        key={s}
                        className={`flex items-center gap-1.5 py-[3px] pl-7 pr-2 text-[10px] ${
                          j === 0
                            ? "border-l-2 border-green bg-panel font-semibold text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        <span className="truncate">{s}</span>
                      </div>
                    ))}
                </div>
              );
            })}
          </aside>

          {/* Main work area */}
          <div className="min-w-0 flex-1 bg-card p-3">
            <div className="mb-2 text-[12px] font-semibold text-primary">{t.title}</div>

            <div className="rounded-[4px] border border-panel-border bg-panel p-2.5">
              <button className="mb-2 inline-flex items-center gap-1 rounded-[3px] border border-green/50 bg-card px-2 py-1 text-[9.5px] font-bold uppercase tracking-wide text-green">
                <Upload className="h-3 w-3" /> {t.importLabel}
              </button>

              <div className="mb-2 flex items-center gap-1.5 rounded-[3px] border border-panel-border bg-card px-2 py-1.5">
                <Search className="h-3 w-3 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">{t.search}</span>
              </div>

              <div className="rounded-[3px] border border-panel-border bg-card">
                {t.groups.map((g, i) => {
                  const open = i === 3;
                  return (
                    <div key={g.code}>
                      <Row open={open} code={g.code} name={g.name} bold />
                      {open && (
                        <>
                          <Row open code={t.parent.code} name={t.parent.name} bold indent={1} />
                          {t.children.map((c) => (
                            <Row key={c.code} code={c.code} name={c.name} indent={2} muted />
                          ))}
                        </>
                      )}
                    </div>
                  );
                })}
                {t.rest.map((g) => (
                  <Row key={g.code} code={g.code} name={g.name} bold />
                ))}
              </div>

              <button className="mt-2 inline-flex items-center gap-1 rounded-[3px] border border-green/50 bg-card px-2 py-1 text-[9.5px] font-bold uppercase tracking-wide text-green">
                <Pencil className="h-3 w-3" /> {t.editLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Row = ({
  code,
  name,
  bold = false,
  muted = false,
  indent = 0,
  open,
}: {
  code: string;
  name: string;
  bold?: boolean;
  muted?: boolean;
  indent?: number;
  open?: boolean;
}) => (
  <div className="flex items-center gap-1.5 border-b border-border/60 px-1.5 py-[4.5px] last:border-b-0">
    <span style={{ width: indent * 12 }} />
    {open === undefined ? (
      <span className="h-3 w-3" />
    ) : open ? (
      <ChevronDown className="h-3 w-3 text-muted-foreground" />
    ) : (
      <ChevronRight className="h-3 w-3 text-muted-foreground" />
    )}
    <CodeBadge code={code} muted={muted} />
    <span
      className={`min-w-0 flex-1 truncate text-[10.5px] ${
        bold ? "font-semibold text-primary" : "text-foreground/80"
      }`}
    >
      {name}
    </span>
    <MoreVertical className="h-3 w-3 flex-shrink-0 text-muted-foreground/60" />
  </div>
);

export default WorkspaceMock;
