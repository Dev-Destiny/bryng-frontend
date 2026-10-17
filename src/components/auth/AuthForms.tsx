"use client";

import { useState, type FormEvent } from "react";
import { AuthField } from "@/components/auth/AuthField";
import { GoogleAuthButton } from "@/components/auth/ProviderAuthButton";
import { Button } from "@/components/ui/Button";

type LoginValues = {
  email: string;
  password: string;
};

type SignupValues = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
};

type LoginField = keyof LoginValues;
type SignupField = keyof SignupValues;

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

function AuthDivider() {
  return (
    <div className="my-5 flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-border-subtle" />
      <span className="text-xs font-medium text-text-muted">or</span>
      <span className="h-px flex-1 bg-border-subtle" />
    </div>
  );
}

export function LoginForm() {
  const [values, setValues] = useState<LoginValues>({ email: "", password: "" });
  const [touched, setTouched] = useState<Partial<Record<LoginField, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors: Record<LoginField, string | undefined> = {
    email: !values.email.trim()
      ? "Enter your email address."
      : !isValidEmail(values.email)
        ? "Enter a valid email address."
        : undefined,
    password: values.password ? undefined : "Enter your password.",
  };

  function updateField(field: LoginField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const fieldState = (field: LoginField) => ({
    error: (submitted || touched[field]) ? errors[field] : undefined,
    success: Boolean(touched[field] && values[field] && !errors[field]),
  });

  return (
    <>
      <form noValidate onSubmit={submit} className="mt-7 space-y-4">
        <AuthField
          id="email"
          label="Email address"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          onBlur={() => setTouched((current) => ({ ...current, email: true }))}
          {...fieldState("email")}
        />
        <AuthField
          id="password"
          label="Password"
          type="password"
          showPasswordToggle
          name="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          required
          value={values.password}
          onChange={(event) => updateField("password", event.target.value)}
          onBlur={() => setTouched((current) => ({ ...current, password: true }))}
          {...fieldState("password")}
        />
        <Button type="submit" size="lg" className="!mt-6 w-full">Log in</Button>
      </form>
      <AuthDivider />
      <GoogleAuthButton />
    </>
  );
}

export function SignupForm() {
  const [values, setValues] = useState<SignupValues>({ fullName: "", email: "", phone: "", password: "" });
  const [touched, setTouched] = useState<Partial<Record<SignupField, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const phoneDigits = values.phone.replace(/\D/g, "").replace(/^234/, "").replace(/^0/, "");
  const errors: Record<SignupField, string | undefined> = {
    fullName: values.fullName.trim().length >= 2 ? undefined : "Enter your full name.",
    email: !values.email.trim()
      ? "Enter your email address."
      : !isValidEmail(values.email)
        ? "Enter a valid email address."
        : undefined,
    phone: /^[789]\d{9}$/.test(phoneDigits) ? undefined : "Enter a valid Nigerian phone number.",
    password: values.password.length >= 8 ? undefined : "Use at least 8 characters.",
  };

  function updateField(field: SignupField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const fieldState = (field: SignupField) => ({
    error: (submitted || touched[field]) ? errors[field] : undefined,
    success: Boolean(touched[field] && values[field] && !errors[field]),
  });

  return (
    <>
      <form noValidate onSubmit={submit} className="mt-6 space-y-3.5">
        <AuthField
          id="full-name"
          label="Full name"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your full name"
          required
          value={values.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
          onBlur={() => setTouched((current) => ({ ...current, fullName: true }))}
          {...fieldState("fullName")}
        />
        <AuthField
          id="signup-email"
          label="Email address"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          onBlur={() => setTouched((current) => ({ ...current, email: true }))}
          {...fieldState("email")}
        />
        <AuthField
          id="phone"
          label="Phone number"
          type="tel"
          name="phone"
          autoComplete="tel-national"
          placeholder="801 234 5678"
          prefix="+234"
          required
          value={values.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          onBlur={() => setTouched((current) => ({ ...current, phone: true }))}
          {...fieldState("phone")}
        />
        <AuthField
          id="signup-password"
          label="Password"
          type="password"
          showPasswordToggle
          name="password"
          autoComplete="new-password"
          placeholder="Create a password"
          required
          value={values.password}
          onChange={(event) => updateField("password", event.target.value)}
          onBlur={() => setTouched((current) => ({ ...current, password: true }))}
          {...fieldState("password")}
        />
        <Button type="submit" size="lg" className="!mt-5 w-full">Create account</Button>
      </form>
      <AuthDivider />
      <GoogleAuthButton />
    </>
  );
}
