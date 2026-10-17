import Link from "next/link";
import { AuthHeading } from "@/components/auth/AuthLayout";
import { SignupForm } from "@/components/auth/AuthForms";

export default function SignupPage() {
  return (
    <div>
      <AuthHeading title="Create your account" description="A better way to get academic work moving." />
      <SignupForm />
      <p className="mt-5 text-center text-sm text-text-secondary">
        Already have an account? <Link href="/login" className="font-bold text-brand hover:text-brand-hover">Log in</Link>
      </p>
    </div>
  );
}
