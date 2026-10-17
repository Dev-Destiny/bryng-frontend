import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function SignupPage() {
  return (
    <main className="grid min-h-dvh place-items-center px-5 py-12">
      <Card className="w-full max-w-md p-8 sm:p-10">
        <p className="text-sm font-semibold text-brand">Get started</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Join Bryng</h1>
        <p className="mt-3 text-sm leading-6 text-text-secondary">Create a client or professional account. Account setup will be added later.</p>
        <div className="mt-8 rounded-xl border border-dashed border-border-default bg-bg-subtle p-4 text-sm text-text-muted">Signup is a placeholder.</div>
        <p className="mt-7 text-sm text-text-secondary">Already have an account? <Link href="/login" className="font-semibold text-brand hover:text-brand-hover">Sign in</Link></p>
      </Card>
    </main>
  );
}
