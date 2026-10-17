import Link from "next/link";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function LoginPage() {
  return (
    <main className="grid min-h-dvh place-items-center px-5 py-12">
      <Card className="w-full max-w-md p-8 sm:p-10">
        <div className="mb-8 inline-flex size-11 items-center justify-center rounded-2xl bg-brand-subtle text-brand">
          <BookOpenCheck size={22} aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold text-brand">Welcome to Bryng</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Sign in to continue</h1>
        <p className="mt-3 text-sm leading-6 text-text-secondary">Your sign-in experience will be set up here.</p>
        <div className="mt-8 rounded-xl border border-dashed border-border-default bg-bg-subtle p-4 text-sm text-text-muted">
          Authentication is not connected yet.
        </div>
        <Link href="/signup" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover">
          Create an account <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </Card>
    </main>
  );
}
