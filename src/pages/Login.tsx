import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { useT } from "@/i18n/LanguageProvider";

const copy = {
  bg: {
    welcome: "Добре дошли",
    brand: "Smart Data Management",
    emailLabel: "Имейл адрес",
    passwordLabel: "Парола",
    submit: "Вход",
    forgot: "Забравена парола?",
    requestAccess: "Заявете достъп безплатно",
    emailRequired: "Моля, въведете имейл адрес.",
    passwordRequired: "Моля, въведете парола.",
    invalid: "Невалиден имейл или парола.",
  },
  en: {
    welcome: "Welcome back",
    brand: "Smart Data Management",
    emailLabel: "Email address",
    passwordLabel: "Password",
    submit: "Sign in",
    forgot: "Forgot your password?",
    requestAccess: "Request free access",
    emailRequired: "Please enter your email address.",
    passwordRequired: "Please enter your password.",
    invalid: "Invalid email or password.",
  },
};

const Login = () => {
  const t = useT(copy);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!email.trim()) newErrors.email = t.emailRequired;
    if (!password.trim()) newErrors.password = t.passwordRequired;
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setErrors({ email: t.invalid });
  };

  return (
    <div className="min-h-screen bg-section flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="bg-card border border-border shadow-panel p-10 max-w-md w-full">
          <h1 className="text-2xl font-display mb-1 text-center">{t.welcome}</h1>
          <p className="text-sm text-muted-foreground text-center mb-8">{t.brand}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">{t.emailLabel}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors({}); }}
                className="w-full h-10 rounded-[4px] border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">{t.passwordLabel}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setErrors({}); }}
                className="w-full h-10 rounded-[4px] border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {errors.password && <p className="text-xs text-destructive mt-1">{errors.password}</p>}
            </div>
            <Button type="submit" size="lg" className="w-full">{t.submit}</Button>
          </form>
          <div className="flex justify-between text-sm text-muted-foreground mt-6">
            <a href="#" className="hover:text-primary">{t.forgot}</a>
            <Link to="/early-access" className="text-primary hover:underline">{t.requestAccess}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
