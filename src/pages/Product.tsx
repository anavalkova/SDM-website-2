import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/site/SectionHeading";
import ModuleCard from "@/components/site/ModuleCard";
import CtaBand from "@/components/site/CtaBand";
import TrustBar from "@/components/site/TrustBar";
import { useT } from "@/i18n/LanguageProvider";

const copy = {
  bg: {
    eyebrow: "Продукт",
    title: "Продукт и решения",
    lead: "Пълна функционалност за счетоводство, фактуриране и финансово управление, в едно работно пространство.",
    activeEyebrow: "● Налични сега",
    activeTitle: "Активни модули",
    activeDesc: "Готови за употреба от първия ден. Изградени по Националните счетоводни стандарти на България.",
    soonEyebrow: "⚙ В активна разработка",
    soonTitle: "Предстоящи модули",
    soonDesc: "Достъпни автоматично при публикуване, без допълнителна настройка или миграция.",
    ctaTitle: "Заинтересовани? Свържете се с нас.",
    ctaDesc:
      "Ще ви покажем платформата, ще отговорим на въпросите ви и ще предложим пакета, подходящ за вашия случай. 90 дни безплатен пробен период, без кредитна карта.",
    ctaPrimary: "Свържете се с нас",
    ctaSecondary: "Вижте пакетите",
    active: [
      {
        title: "Търговски документи и фактуриране",
        description:
          "Издавайте фактури, проформи и кредитни известия за секунди, с автоматична номерация, правилен ДДС и директна връзка към счетоводния дневник. Поддържа номенклатура на артикули/услуги, ценови листи и шаблони за документи. Проформата се превръща в окончателна фактура с един клик. BGN, EUR и всяка друга валута.",
        tags: ["Автоматична номерация", "ДДС", "Проформи", "Многовалутно"],
        benefit: "Без двойно въвеждане. Всяка фактура постъпва директно в дневника за продажби.",
      },
      {
        title: "Вземания от клиенти (AR)",
        description:
          "Дневник на продажбите, неплатени фактури, падежи и просрочия. Управление на аванси, частични плащания, кредитни известия и приспадания, с 360-градусово проследяване на всеки клиент. Автоматично маркиране на просрочени задължения.",
        tags: ["Aging report", "Автоматично маркиране", "Пълна история"],
        benefit: "Виждате кой дължи и кога. Пълна история по клиент, аванси, фактури, плащания, приспадания.",
      },
      {
        title: "Задължения към доставчици (AP)",
        description:
          "Въвеждане на покупки, управление на аванси, неплатени задължения и падежи. Разпределение на плащания и доставки по документи, с пълна проследимост към дневника за покупки.",
        tags: ["Покупки", "Аванси", "Падежи"],
        benefit: "Пълен контрол върху това какво дължите и кога изтича срокът.",
      },
      {
        title: "Сметкоплан",
        description:
          "Конфигурируем сметкоплан по НСС или МСФО, предварително структуриран по групи 1–9. Аналитичности, начални салда, импорт от съществуваща система или конфигурация от нулата.",
        tags: ["НСС", "МСФО", "Аналитичности", "Импорт"],
        benefit: "Сметкопланът идва предварително структуриран по НСС, готов за работа веднага след настройката.",
      },
      {
        title: "Главна книга и оборотна ведомост",
        description:
          "Пълно двойно счетоводство, всяка операция постъпва автоматично в съответните сметки. Оборотна ведомост, хронологичен журнал, аналитични регистри и всички стандартни счетоводни справки.",
        tags: ["Двойно счетоводство", "Оборотна ведомост"],
        benefit: "Оборотната ведомост е на едно кликване. Всяка операция, проследима до изходния документ.",
      },
      {
        title: "Банка и каса",
        description:
          "Качете банково извлечение в CSV или XML формат и системата съпоставя транзакциите. Множество банкови сметки и каси в едно работно пространство. Генериране на платежни нареждания в XML.",
        tags: ["Банков импорт", "Съпоставяне", "XML платежни"],
        benefit: "Множество сметки и каси, едно работно пространство.",
      },
      {
        title: "ДДС и данъчна отчетност",
        description:
          "Автоматични дневници за продажби и покупки, Справка-декларация ЗДДС и VIES декларация, готови за НАП. Генерират се от данните на фактурите, без ръчно попълване. Поддържа Годишната данъчна декларация (ГДД).",
        tags: ["Справка-декларация ЗДДС", "VIES декларация", "НАП формат"],
        benefit: "ДДС, VIES и Годишна данъчна декларация, всичко от едно място, без смяна на инструменти.",
      },
      {
        title: "SAF-T отчетност",
        description:
          "Генериране на стандартния одиторски файл за данъчни цели (SAF-T) директно от счетоводните данни, в структурата, изисквана от НАП. Проверка на файла преди подаване и пълна проследимост до изходните документи.",
        tags: ["SAF-T", "НАП формат", "Валидация"],
        benefit: "SAF-T файлът се генерира от вече въведените данни, без отделна подготовка и ръчни справки.",
      },
      {
        title: "OCR разпознаване на документи",
        description:
          "Качвате PDF или снимка на фактура за покупка и системата разчита доставчик, номер, дата, суми и ДДС, след което предлага готов счетоводен запис за потвърждение. Работи с пакетно качване на много документи наведнъж.",
        tags: ["OCR", "Пакетно качване", "Автоматични записи"],
        benefit: "Купчината фактури става осчетоводени документи, вие само преглеждате и потвърждавате.",
      },
      {
        title: "Административна конзола",
        description:
          "Управление на множество фирми с роли, права и конфигурация на финансова година. Добавяте нов клиент за минути. Превключвате без изход.",
        tags: ["Мулти-фирмена", "Роли и права", "Одитен след"],
        benefit: "Превключвате между клиенти без изход. Всяко действие записано.",
      },
    ],
    upcoming: [
      {
        title: "Автоматично банково съпоставяне",
        description: "Директна банкова връзка чрез open banking. Транзакциите се съпоставят автоматично по правила.",
      },
      {
        title: "Дълготрайни активи и амортизации",
        description: "Регистър на активите с автоматично начисляване на амортизации. Линеен, регресивен, производствен метод.",
      },
      {
        title: "Заплати и ТРЗ",
        description: "Заплати, фишове, Декларации Образец 1 и 6, групов превод към НАП.",
      },
      {
        title: "Управление на склад",
        description:
          "Наличности, стокови разписки и оценка на запаси, интегрирани с главната книга. FIFO или среднопретеглена цена.",
      },
      {
        title: "API и интеграции",
        description: "REST API за свързване с ERP, онлайн магазини, банкови системи и вътрешни инструменти.",
      },
    ],
  },
  en: {
    eyebrow: "Product",
    title: "Product and solutions",
    lead: "Complete accounting, invoicing and financial management functionality, in a single workspace.",
    activeEyebrow: "● Available now",
    activeTitle: "Active modules",
    activeDesc: "Ready to use from day one. Built around the Bulgarian National Accounting Standards.",
    soonEyebrow: "⚙ In active development",
    soonTitle: "Upcoming modules",
    soonDesc: "Available automatically on release, no extra setup, no migration.",
    ctaTitle: "Interested? Get in touch.",
    ctaDesc:
      "We will walk you through the platform, answer your questions and recommend the right plan for your case. 90-day free trial, no credit card required.",
    ctaPrimary: "Contact us",
    ctaSecondary: "See pricing",
    active: [
      {
        title: "Commercial documents and invoicing",
        description:
          "Issue invoices, proformas and credit notes in seconds, with automatic numbering, correct VAT and a direct link to the accounting journal. Supports item and service catalogues, price lists and document templates. A proforma becomes a final invoice in one click. BGN, EUR and any other currency.",
        tags: ["Automatic numbering", "VAT", "Proformas", "Multi-currency"],
        benefit: "No double entry. Every invoice lands directly in the sales journal.",
      },
      {
        title: "Accounts receivable (AR)",
        description:
          "Sales journal, unpaid invoices, due dates and overdue items. Manage advances, partial payments, credit notes and offsets, with a 360-degree view of every customer. Overdue balances are flagged automatically.",
        tags: ["Aging report", "Automatic flagging", "Full history"],
        benefit: "See who owes what and when. Full history per customer, advances, invoices, payments, offsets.",
      },
      {
        title: "Accounts payable (AP)",
        description:
          "Record purchases and manage advances, open liabilities and due dates. Allocate payments and deliveries across documents, with full traceability to the purchase journal.",
        tags: ["Purchases", "Advances", "Due dates"],
        benefit: "Full control over what you owe and when it falls due.",
      },
      {
        title: "Chart of accounts",
        description:
          "A configurable chart of accounts under National Accounting Standards or IFRS, pre-structured into groups 1–9. Analytical accounts, opening balances, import from an existing system or setup from scratch.",
        tags: ["NAS", "IFRS", "Analytical accounts", "Import"],
        benefit: "The chart of accounts arrives pre-structured, ready to use as soon as your account is set up.",
      },
      {
        title: "General ledger and trial balance",
        description:
          "Full double-entry accounting, every transaction posts automatically to the right accounts. Trial balance, chronological journal, analytical registers and all standard accounting reports.",
        tags: ["Double-entry", "Trial balance"],
        benefit: "The trial balance is one click away. Every entry traces back to its source document.",
      },
      {
        title: "Bank and cash",
        description:
          "Upload a bank statement in CSV or XML and the system matches the transactions. Multiple bank and cash accounts in one workspace. Generate payment orders in XML.",
        tags: ["Bank import", "Matching", "XML payments"],
        benefit: "Multiple accounts and cash desks, one workspace.",
      },
      {
        title: "VAT and tax reporting",
        description:
          "Automatic sales and purchase journals, the VAT return and the VIES declaration, ready for the NRA. Generated from your invoice data, no manual entry. Supports the annual corporate tax return.",
        tags: ["VAT return", "VIES declaration", "NRA format"],
        benefit: "VAT, VIES and the annual tax return, all in one place, without switching tools.",
      },
      {
        title: "SAF-T reporting",
        description:
          "Generate the Standard Audit File for Tax (SAF-T) straight from your accounting data, in the structure required by the NRA. Validate the file before submission with full traceability to the source documents.",
        tags: ["SAF-T", "NRA format", "Validation"],
        benefit: "The SAF-T file is generated from data you already entered, no separate preparation or manual reports.",
      },
      {
        title: "OCR document recognition",
        description:
          "Upload a PDF or a photo of a purchase invoice and the system reads the supplier, number, date, amounts and VAT, then proposes a ready accounting entry for approval. Works with batch uploads of many documents at once.",
        tags: ["OCR", "Batch upload", "Automatic entries"],
        benefit: "A pile of invoices turns into posted documents, you simply review and confirm.",
      },
      {
        title: "Administration console",
        description:
          "Manage multiple companies with roles, permissions and financial-year configuration. Add a new client in minutes. Switch without signing out.",
        tags: ["Multi-company", "Roles and permissions", "Audit trail"],
        benefit: "Switch between clients without signing out. Every action logged.",
      },
    ],
    upcoming: [
      {
        title: "Automatic bank reconciliation",
        description: "Direct bank connectivity via open banking. Transactions are matched automatically by rules.",
      },
      {
        title: "Fixed assets and depreciation",
        description: "An asset register with automatic depreciation. Straight-line, reducing balance and units-of-production methods.",
      },
      {
        title: "Payroll and HR",
        description: "Salaries, payslips, Declarations 1 and 6, and bulk transfers to the NRA.",
      },
      {
        title: "Inventory management",
        description:
          "Stock levels, goods receipts and inventory valuation, integrated with the general ledger. FIFO or weighted average cost.",
      },
      {
        title: "API and integrations",
        description: "A REST API for connecting ERPs, online stores, banking systems and internal tools.",
      },
    ],
  },
};

const Product = () => {
  const t = useT(copy);

  return (
    <Layout>
      <section className="bg-primary-dark">
        <div className="container py-10 lg:py-12">
          <span className="eyebrow text-primary-foreground/55">{t.eyebrow}</span>
          <h1 className="mt-2 max-w-3xl font-display text-3xl leading-tight text-primary-foreground">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/75">{t.lead}</p>
        </div>
      </section>

      <TrustBar />

      <section id="modules" className="py-20">
        <div className="container">
          <SectionHeading eyebrow={t.activeEyebrow} title={t.activeTitle} description={t.activeDesc} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.active.map((m, i) => (
              <ModuleCard
                key={m.title}
                index={i + 1}
                title={m.title}
                description={m.description}
                tags={m.tags}
                benefit={m.benefit}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section py-20">
        <div className="container">
          <SectionHeading eyebrow={t.soonEyebrow} title={t.soonTitle} description={t.soonDesc} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.upcoming.map((m) => (
              <ModuleCard key={m.title} title={m.title} description={m.description} soon />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={t.ctaTitle}
        description={t.ctaDesc}
        primaryLabel={t.ctaPrimary}
        primaryTo="/contact"
        secondaryLabel={t.ctaSecondary}
        secondaryTo="/pricing"
      />
    </Layout>
  );
};

export default Product;
