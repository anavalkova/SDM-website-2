import { FileText, BookOpenCheck, ListTree, Receipt, BarChart3, Building2, LucideIcon } from "lucide-react";
import type { Lang } from "@/i18n/LanguageProvider";

export type Module = {
  icon: LucideIcon;
  title: string;
  /** One-line promise, shown on every card. */
  value: string;
  /** Concrete capabilities, shown on the Solutions page. */
  points: string[];
};

const icons = [FileText, BookOpenCheck, ListTree, Receipt, BarChart3, Building2];

const text: Record<Lang, Omit<Module, "icon">[]> = {
  bg: [
    {
      title: "Фактуриране",
      value: "Издавате фактурата и тя вече е в счетоводството.",
      points: [
        "Фактури, кредитни и дебитни известия с автоматична номерация",
        "Номенклатура на артикули и услуги, ценови листи, отстъпки по ред",
        "Фактури в евро или в друга валута по курс",
        "Готов PDF на всеки издаден документ",
      ],
    },
    {
      title: "Покупки, продажби, банка и каса",
      value: "Всеки документ отива в своя журнал, със статия, която се предлага сама.",
      points: [
        "Журнали за доставчици, клиенти, банка, каса и мемориални ордери",
        "Статии 1:1 или една сметка срещу много насрещни",
        "Шаблони за операциите, които се повтарят всеки месец",
        "Импорт на банкови извлечения",
      ],
    },
    {
      title: "Сметкоплан и аналитичност",
      value: "Започвате със сметкоплан по НСС, не с празна таблица.",
      points: [
        "Сметкоплан по групи 1–9, зареден при създаване на годината",
        "Аналитичности по контрагент, фактура, артикул, служител",
        "Начални салда, ръчно или от файл",
        "Прехвърляне на контрагенти и салда от стара система чрез CSV",
      ],
    },
    {
      title: "ДДС и НАП",
      value: "Дневниците се попълват сами от документите.",
      points: [
        "Дневник на продажбите и дневник на покупките",
        "Справка-декларация по ЗДДС и VIES декларация",
        "Подготовка за подаване към НАП от системата",
        "Проверка на контрагент във VIES и в Търговския регистър",
      ],
    },
    {
      title: "Справки и табло",
      value: "Кой ви дължи и на кого дължите към днешна дата, а не към края на месеца.",
      points: [
        "Табло с вземания, задължения и основните контрагенти",
        "Оборотна ведомост, хронология и главна книга",
        "Всяка операция води до документа, от който идва",
        "Експорт на всяка таблица",
      ],
    },
    {
      title: "Фирми, екип и права",
      value: "Няколко фирми, един екип, ясно кой какво може.",
      points: [
        "Потребители, групи и роли",
        "Права за всяко действие: въвеждане, осчетоводяване, справки",
        "Отделни данни за всяка фирма и всяка фискална година",
        "Смяна на фирмата без повторен вход",
      ],
    },
  ],
  en: [
    {
      title: "Invoicing",
      value: "Issue the invoice and it is already in your books.",
      points: [
        "Invoices, credit and debit notes with automatic numbering",
        "Item and service catalogue, price lists, line discounts",
        "Invoices in euro or in another currency at a set rate",
        "A ready PDF for every issued document",
      ],
    },
    {
      title: "Purchases, sales, bank and cash",
      value: "Every document goes to its own journal, with the entry proposed for you.",
      points: [
        "Journals for suppliers, customers, bank, cash and memorial orders",
        "1:1 entries or one account against many",
        "Templates for the operations you repeat every month",
        "Bank statement import",
      ],
    },
    {
      title: "Chart of accounts and analytics",
      value: "Start with a National Accounting Standards chart of accounts, not a blank sheet.",
      points: [
        "Chart of accounts in groups 1–9, loaded when the year is created",
        "Analytics by counterparty, invoice, item and employee",
        "Opening balances, entered by hand or from a file",
        "Move counterparties and balances from your old system via CSV",
      ],
    },
    {
      title: "VAT and the NRA",
      value: "The VAT journals fill themselves from your documents.",
      points: [
        "Sales and purchase VAT journals",
        "VAT return and VIES declaration",
        "Preparation for submission to the NRA from inside the system",
        "Counterparty checks in VIES and the Commercial Register",
      ],
    },
    {
      title: "Reports and dashboard",
      value: "Who owes you and whom you owe, as of today rather than month-end.",
      points: [
        "Dashboard with receivables, payables and top counterparties",
        "Trial balance, chronology and general ledger",
        "Every entry leads back to the document it came from",
        "Export of any table",
      ],
    },
    {
      title: "Companies, team and permissions",
      value: "Several companies, one team, clear rules on who can do what.",
      points: [
        "Users, groups and roles",
        "Permissions per action: entry, posting, reports",
        "Separate data for every company and every financial year",
        "Switch company without signing in again",
      ],
    },
  ],
};

export const getModules = (lang: Lang): Module[] =>
  text[lang].map((m, i) => ({ ...m, icon: icons[i] }));
