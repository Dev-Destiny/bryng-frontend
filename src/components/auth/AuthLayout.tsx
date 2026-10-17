import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-white lg:flex">
      <aside className="relative isolate hidden flex-col justify-end overflow-hidden lg:sticky lg:top-0 lg:flex lg:h-dvh lg:w-[39%] lg:px-10 lg:py-11 xl:px-14">
        <Image
          src="/images/auth-campus.jpg"
          alt="Two students talking together outdoors"
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 39vw"
          className="-z-20 object-cover object-[36%_center]"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#101014]/85 via-[#101014]/20 to-[#101014]/5" />
        <div className="relative z-10 max-w-lg text-white">
          <p className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Built for the Nigerian student.
          </p>
          <p className="mt-3 text-sm font-medium text-white/85 sm:text-base">— Founder</p>
        </div>
      </aside>

      <main className="flex min-h-dvh flex-1 flex-col bg-white px-5 py-8 sm:px-10 lg:px-12 lg:py-10 xl:px-16">
        <div className="mx-auto flex w-full max-w-[420px] flex-1 flex-col justify-center py-5 sm:py-8">
          <Link href="/" aria-label="Bryng home" className="mx-auto mb-8 inline-flex w-fit items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40">
            <Image src="/Bryng_logo.svg" alt="Bryng" width={98} height={37} priority />
          </Link>
          {children}
        </div>
        <p className="mx-auto mt-6 max-w-[420px] text-center text-ui-caption leading-5 text-text-muted">
          By continuing, you agree to Bryng’s Terms of Service and acknowledge our Privacy Policy.
        </p>
      </main>
    </div>
  );
}

export function AuthHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <h1 className="text-auth-title font-bold tracking-tight text-text-primary sm:text-auth-title-lg">{title}</h1>
      <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p>
    </div>
  );
}
