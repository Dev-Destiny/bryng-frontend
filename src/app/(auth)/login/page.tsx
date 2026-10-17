import Link from "next/link";
import { AuthHeading } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/AuthForms";

export default function LoginPage() {
  return (
    <div>
      <AuthHeading title="Log in to Bryng" description="Pick up where you left off." />
      <LoginForm />
      <p className="mt-7 text-center text-sm text-text-secondary">
        New to Bryng? <Link href="/signup" className="font-bold text-brand hover:text-brand-hover">Create an account</Link>
      </p>
    </div>
  );
}
