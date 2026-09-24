import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { useT } from "@/i18n/LanguageProvider";

const copy = {
  bg: {
    checkEmailHeading: "Проверете имейла си за потвърждение.",
    checkEmailText: "Изпратихме линк за потвърждение на",
    heading: "Създайте акаунт",
    subheading: "90-дневен безплатен пробен период",
    fields: [
      { label: "Три имена", field: "name", type: "text" },
      { label: "Наименование на фирмата", field: "company", type: "text" },
      { label: "Имейл адрес", field: "email", type: "email" },
      { label: "Парола", field: "password", type: "password" },
    ],
    choosePlan: "Изберете пакет",
    plans: [
      { value: "starter", label: "Стартер" },
      { value: "business", label: "Бизнес" },
      { value: "practice", label: "Практика" },
      { value: "enterprise", label: "Корпоративен" },
    ],
    submit: "Създайте акаунт",
    alreadyHave: "Вече имате акаунт?",
    loginHere: "Влезте тук.",
    nameRequired: "Моля, въведете три имена.",
    companyRequired: "Моля, въведете наименование на фирмата.",
    emailRequired: "Моля, въведете имейл адрес.",
    passwordRequired: "Паролата трябва да е поне 6 символа.",
  },
  en: {
    checkEmailHeading: "Check your email to confirm your account.",
    checkEmailText: "We sent a confirmation link to",
    heading: "Create an account",
    subheading: "90-day free trial",
    fields: [
      { label: "Full name", field: "name", type: "text" },
      { label: "Company name", field: "company", type: "text" },
      { label: "Email address", field: "email", type: "email" },
      { label: "Password", field: "password", type: "password" },
    ],
    choosePlan: "Choose a plan",
    plans: [
      { value: "starter", label: "Starter" },
      { value: "business", label: "Business" },
      { value: "practice", label: "Practice" },
      { value: "enterprise", label: "Enterprise" },
    ],
    submit: "Create account",
    alreadyHave: "Already have an account?",
    loginHere: "Sign in here.",
    nameRequired: "Please enter your full name.",
    companyRequired: "Please enter your company name.",
    emailRequired: "Please enter your email address.",
    passwordRequired: "Password must be at least 6 characters.",
  },
};

const Register = () => {
  const t = useT(copy);
  const [searchParams] = useSearchParams();
  const preselectedPlan = searchParams.get("plan") || "starter";

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
    plan: preselectedPlan,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = t.nameRequired;
    if (!form.company.trim()) newErrors.company = t.companyRequired;
    if (!form.email.trim()) newErrors.email = t.emailRequired;
    if (!form.password || form.password.length < 6) newErrors.password = t.passwordRequired;
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  const update = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  return (
    <div className="min-h-screen bg-section flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        {submitted ? (
          <div className="bg-card border border-border shadow-panel p-10 max-w-md w-full text-center">
            <h2 className="text-2xl font-display mb-3">{t.checkEmailHeading}</h2>
            <p className="text-muted-foreground">{t.checkEmailText} <span className="font-medium text-foreground">{form.email}</span>.</p>
          </div>
        ) : (
          <div className="bg-card border border-border shadow-panel p-10 max-w-md w-full">
            <h1 className="text-2xl font-display mb-1 text-center">{t.heading}</h1>
            <p className="text-sm text-muted-foreground text-center mb-8">{t.subheading}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {t.fields.map(({ label, field, type }) => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-1.5">{label}</label>
                  <input
                    type={type}
                    value={(form as any)[field]}
                    onChange={(e) => update(field, e.target.value)}
                    className="w-full h-10 rounded-[4px] border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {errors[field] && <p className="text-xs text-destructive mt-1">{errors[field]}</p>}
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-2">{t.choosePlan}</label>
                <div className="flex flex-wrap gap-3">
                  {t.plans.map((plan) => (
                    <label key={plan.value} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input
                        type="radio"
                        name="plan"
                        value={plan.value}
                        checked={form.plan === plan.value}
                        onChange={(e) => update("plan", e.target.value)}
                        className="accent-primary"
                      />
                      <span>{plan.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full mt-2">{t.submit}</Button>
            </form>
            <p className="text-sm text-muted-foreground text-center mt-6">
              {t.alreadyHave} <Link to="/login" className="text-primary hover:underline">{t.loginHere}</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
