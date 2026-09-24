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
      value: "Издадената фактура се осчетоводява, без да я въвеждате втори път.",
      points: [
        "Фактури, кредитни и дебитни известия с автоматична номерация",
        "Номенклатура на артикули и услуги, ценови листи, отстъпки по ред",
        "Фактури в евро или в друга валута по курс",
        "PDF на всеки издаден документ",
      ],
    },
    {
      title: "Покупки, продажби, банка и каса",
      value: "Всеки вид документ има свой журнал, а системата предлага статията.",
      points: [
        "Журнали за доставчици, клиенти, банка, каса и мемориални ордери",
        "Статии 1:1 или една сметка срещу много насрещни",
        "Шаблони за операциите, които се повтарят всеки месец",
        "Разпознаване на фактури за покупка от PDF или снимка, с готова чернова за преглед",
        "Импорт на банкови извлечения",
      ],
    },
    {
      title: "Сметкоплан и аналитичност",
      value: "Сметкопланът по НСС е готов още при създаването на годината.",
      points: [
        "Сметкоплан по групи 1–9, зареден при създаване на годината",
        "Аналитичности по контрагент, фактура, артикул, служител",
        "Начални салда, ръчно или от файл",
        "Контрагенти и салда от предишната система, заредени от CSV файл",
      ],
    },
    {
      title: "ДДС и НАП",
      value: "Дневниците за ДДС и SAF-T файлът се изготвят от въведените документи.",
      points: [
        "Дневник на продажбите и дневник на покупките",
        "Справка-декларация по ЗДДС и VIES декларация",
        "Подготовка за подаване към НАП от системата",
        "Месечен SAF-T файл за НАП",
        "Проверка на контрагент във VIES и в Търговския регистър",
      ],
    },
    {
      title: "Справки и табло",
      value: "Виждате вземанията и задълженията си към всяка дата.",
      points: [
        "Табло с вземания, задължения и основните контрагенти",
        "Оборотна ведомост, хронология и главна книга",
        "От всяка операция стигате до нейния документ",
        "Експорт на всяка таблица",
      ],
    },
    {
      title: "Фирми, потребители и права",
      value: "Определяте кой какво може да прави в системата.",
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
      value: "An issued invoice is posted without you entering it a second time.",
      points: [
        "Invoices, credit and debit notes with automatic numbering",
        "Item and service catalogue, price lists, line discounts",
        "Invoices in euro or in another currency at a set rate",
        "A PDF of every issued document",
      ],
    },
    {
      title: "Purchases, sales, bank and cash",
      value: "Each kind of document has its own journal, and the system suggests the entry.",
      points: [
        "Journals for suppliers, customers, bank, cash and memorial orders",
        "1:1 entries or one account against many",
        "Templates for the operations you repeat every month",
        "Purchase invoice recognition from a PDF or photo, with a draft ready to review",
        "Bank statement import",
      ],
    },
    {
      title: "Chart of accounts and analytics",
      value: "The chart of accounts is ready as soon as the year is created.",
      points: [
        "Chart of accounts in groups 1–9, loaded when the year is created",
        "Analytics by counterparty, invoice, item and employee",
        "Opening balances, entered by hand or from a file",
        "Counterparties and balances from your previous system, loaded from a CSV file",
      ],
    },
    {
      title: "VAT and the NRA",
      value: "The VAT journals and the SAF-T file are prepared from your documents.",
      points: [
        "Sales and purchase VAT journals",
        "VAT return and VIES declaration",
        "Preparation for submission to the NRA from inside the system",
        "Monthly SAF-T file for the NRA",
        "Counterparty checks in VIES and the Commercial Register",
      ],
    },
    {
      title: "Reports and dashboard",
      value: "See your receivables and payables as of any date.",
      points: [
        "Dashboard with receivables, payables and top counterparties",
        "Trial balance, chronology and general ledger",
        "From any entry you can open its document",
        "Export of any table",
      ],
    },
    {
      title: "Companies, users and permissions",
      value: "You decide who can do what in the system.",
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
