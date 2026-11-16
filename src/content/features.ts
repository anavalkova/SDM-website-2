import {
  ScanText,
  Workflow,
  Database,
  Gauge,
  Building2,
  Users,
  Tags,
  ListTree,
  Scale,
  Landmark,
  Receipt,
  BookOpenCheck,
  BarChart3,
  LucideIcon,
} from "lucide-react";
import type { Lang } from "@/i18n/LanguageProvider";

/* ---------- Competitive advantages ---------- */

export type Advantage = { icon: LucideIcon; title: string; desc: string };

const advantageIcons = [ScanText, Workflow, Database, Gauge];

const advantageText: Record<Lang, Omit<Advantage, "icon">[]> = {
  bg: [
    {
      title: "Разпознаване на документи",
      desc: "Качвате фактура като PDF и системата сама изважда цялата информация от нея, след което я разпределя по сметките от вашия сметкоплан. Във всяка сметка можете да оставите инструкция, например „Ако основанието е наем, осчетоводявай тук“, и разпознаването я следва.",
    },
    {
      title: "Автоматизации",
      desc: "При добавяне на банкова сметка системата създава съответната сметка в сметкоплана и банков журнал за нея. Контрагентите, началните салда и банковите извлечения зареждате от файл, вместо да ги въвеждате ред по ред.",
    },
    {
      title: "Архитектура и сигурност",
      desc: "Данните на всеки клиент се пазят в отделна база данни, а не заедно с данните на други фирми. Достъпът е защитен, данните се архивират и се съхраняват в Европейския съюз.",
    },
    {
      title: "Интуитивна и стабилна",
      desc: "Екраните следват реда, в който работи счетоводителят, затова започвате без дълго обучение. Всички справки се изготвят от едни и същи осчетоводени записи, така че числата съвпадат навсякъде.",
    },
  ],
  en: [
    {
      title: "Document recognition",
      desc: "Upload an invoice as a PDF and the system extracts all of its information, then assigns it to the accounts in your chart of accounts. You can leave an instruction on any account, such as “If the description is rent, post it here”, and the recognition follows it.",
    },
    {
      title: "Automation",
      desc: "When you add a bank account, the system creates the matching account in the chart of accounts and a bank journal for it. Counterparties, opening balances and bank statements load from a file instead of being typed in line by line.",
    },
    {
      title: "Architecture and security",
      desc: "Each customer's data is kept in its own separate database, never mixed with other companies' data. Access is protected, and data is backed up and stored in the European Union.",
    },
    {
      title: "Intuitive and stable",
      desc: "The screens follow the order an accountant works in, so you can start without long training. Every report is built from the same posted records, so the numbers match everywhere.",
    },
  ],
};

export const getAdvantages = (lang: Lang): Advantage[] =>
  advantageText[lang].map((a, i) => ({ ...a, icon: advantageIcons[i] }));

/* ---------- Features by module ---------- */

export type FeatureGroup = {
  id: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  points: string[];
};

const groupMeta: { id: string; icon: LucideIcon }[] = [
  { id: "organization", icon: Building2 },
  { id: "counterparties", icon: Users },
  { id: "analytics", icon: Tags },
  { id: "chart-of-accounts", icon: ListTree },
  { id: "opening-balances", icon: Scale },
  { id: "bank", icon: Landmark },
  { id: "invoicing", icon: Receipt },
  { id: "journals", icon: BookOpenCheck },
  { id: "vat-reports", icon: BarChart3 },
];

const groupText: Record<Lang, Omit<FeatureGroup, "id" | "icon">[]> = {
  bg: [
    {
      title: "Организация и период",
      intro: "Създавате организацията и инициализирате фискалния период. След това влизате в счетоводния модул, където сметкопланът по НСС, журналите и системните аналитичности вече са заредени.",
      points: [
        "Създаване на организация и инициализиране на период",
        "Готов сметкоплан, журнали и аналитичности още от първия ден",
        "Потребители с роли и права за всяко действие",
        "Отделни данни за всяка фирма и всяка фискална година",
      ],
    },
    {
      title: "Контрагенти",
      intro: "Поддържате един общ списък с клиенти и доставчици, който се ползва във всички документи.",
      points: [
        "Ръчно създаване с търсене във VIES",
        "Задължителни полета, за да няма контрагенти с липсващи данни",
        "Списък с всички контрагенти и редакция по всяко време",
        "Импорт и експорт от файл",
      ],
    },
    {
      title: "Аналитични признаци",
      intro: "Освен системните аналитичности създавате и свои, според нуждите на фирмата.",
      points: [
        "Нови аналитични признаци, например „Съдружници“ като номенклатура",
        "Код и списък със стойности за всеки признак",
        "Редакция на всички ръчно създадени признаци",
      ],
    },
    {
      title: "Сметкоплан",
      intro: "Сметкопланът по НСС е готов, а вие го приспособявате към дейността на фирмата.",
      points: [
        "Добавяне, редакция и изтриване на сметки",
        "За всяка сметка задавате име, тип, валута и дали е материална, с мерни единици",
        "Аналитичности към всяка сметка",
        "Инструкция към сметката за автоматичното разпознаване на документи",
        "Настройка кои сметки да се виждат",
        "Импорт и експорт на целия сметкоплан",
      ],
    },
    {
      title: "Начални салда",
      intro: "Прехвърляте салдата от предишната система ръчно или от файл.",
      points: [
        "Импорт и експорт от файл",
        "Добавяне на отделна сметка или на цял клон от сметкоплана наведнъж",
        "Бързо въвеждане: контрагент, номер и сума, а с Tab редът се запазва и се отваря нов",
      ],
    },
    {
      title: "Банкови сметки и банков импорт",
      intro: "Добавяте банковите сметки на фирмата, а системата подготвя всичко нужно, за да работите с тях.",
      points: [
        "Ръчно добавяне на банкова сметка",
        "По избор системата създава сметката в сметкоплана и банков журнал за нея",
        "Сметките в основна валута и в друга валута се разграничават автоматично",
        "Импорт на банкови извлечения с автоматична обработка на файловете от над пет български банки",
      ],
    },
    {
      title: "Фактуриране",
      intro: "Настройвате артикулите и цените веднъж и ги ползвате във всяка фактура.",
      points: [
        "Номенклатура на артикули и услуги",
        "Ценови листи",
        "Фактури с отделни, предварително зададени номерации",
        "Издадената фактура се осчетоводява, без да я въвеждате втори път",
      ],
    },
    {
      title: "Журнали и документи",
      intro: "Всеки вид операция се въвежда в свой журнал, а настройките на журнала определят как се осчетоводява.",
      points: [
        "Създаване и редакция на журнали",
        "Автоматизации по журнал със сметки от сметкоплана и банкови сметки",
        "Документи за всеки журнал: Доставчици, Клиенти, Каса, Банка и Мемориален ордер",
        "Фактурите за покупка, качени като PDF, се разпознават и се разпределят по вашия сметкоплан",
      ],
    },
    {
      title: "ДДС и справки",
      intro: "От осчетоводените документи системата изготвя дневниците за ДДС, декларациите и справките.",
      points: [
        "Дневник на продажбите и дневник на покупките",
        "Справка-декларация по ЗДДС и VIES декларация",
        "Оборотна ведомост, хронология и главна книга",
        "От всяка операция стигате до нейния документ",
      ],
    },
  ],
  en: [
    {
      title: "Organisation and period",
      intro: "Create your organisation and initialise the financial period. Then you enter the accounting module, where the chart of accounts, journals and system analytics are already loaded.",
      points: [
        "Create an organisation and initialise a period",
        "A ready chart of accounts, journals and analytics from day one",
        "Users with roles and permissions for every action",
        "Separate data for every company and every financial year",
      ],
    },
    {
      title: "Counterparties",
      intro: "Keep one shared list of customers and suppliers that is used in every document.",
      points: [
        "Create counterparties by hand with a VIES lookup",
        "Required fields, so no counterparty is left with missing details",
        "A list of all counterparties, editable at any time",
        "Import and export from a file",
      ],
    },
    {
      title: "Analytical attributes",
      intro: "Besides the system analytics, you can create your own to fit the way your company works.",
      points: [
        "New analytical attributes, such as “Partners” as a catalogue",
        "A code and a list of values for each attribute",
        "Edit any attribute you created yourself",
      ],
    },
    {
      title: "Chart of accounts",
      intro: "The chart of accounts is ready to use, and you adapt it to your business.",
      points: [
        "Add, edit and delete accounts",
        "Set the name, type and currency for each account, and whether it tracks quantities, with units",
        "Analytics on any account",
        "An instruction on the account for automatic document recognition",
        "Choose which accounts are visible",
        "Import and export the whole chart of accounts",
      ],
    },
    {
      title: "Opening balances",
      intro: "Move your balances over from your previous system, by hand or from a file.",
      points: [
        "Import and export from a file",
        "Add a single account or a whole branch of the chart of accounts at once",
        "Fast entry: counterparty, number and amount, then Tab saves the row and opens a new one",
      ],
    },
    {
      title: "Bank accounts and bank import",
      intro: "Add your company's bank accounts and the system prepares everything you need to work with them.",
      points: [
        "Add a bank account by hand",
        "Optionally, the system creates the account in the chart of accounts and a bank journal for it",
        "Accounts in the base currency and in other currencies are told apart automatically",
        "Bank statement import with automatic file processing for more than five Bulgarian banks",
      ],
    },
    {
      title: "Invoicing",
      intro: "Set up your items and prices once and use them in every invoice.",
      points: [
        "Item and service catalogue",
        "Price lists",
        "Invoices with separate, predefined numbering series",
        "An issued invoice is posted without you entering it a second time",
      ],
    },
    {
      title: "Journals and documents",
      intro: "Each kind of operation goes into its own journal, and the journal's settings decide how it is posted.",
      points: [
        "Create and edit journals",
        "Per-journal automation with accounts from the chart of accounts and bank accounts",
        "Documents for every journal: Suppliers, Customers, Cash, Bank and Memorial order",
        "Purchase invoices uploaded as a PDF are recognised and assigned to your chart of accounts",
      ],
    },
    {
      title: "VAT and reports",
      intro: "From your posted documents the system prepares the VAT journals, the returns and the reports.",
      points: [
        "Sales and purchase VAT journals",
        "VAT return and VIES declaration",
        "Trial balance, chronology and general ledger",
        "From any entry you can open its document",
      ],
    },
  ],
};

export const getFeatureGroups = (lang: Lang): FeatureGroup[] =>
  groupText[lang].map((g, i) => ({ ...g, ...groupMeta[i] }));
