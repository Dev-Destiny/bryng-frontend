import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type ProviderAuthButtonProps = {
  provider: string;
  label?: string;
  icon: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function ProviderAuthButton({
  provider,
  label,
  icon,
  onClick,
  disabled,
}: ProviderAuthButtonProps) {
  const buttonLabel = label ?? `Continue with ${provider}`;

  return (
    <Button
      variant="outline"
      size="lg"
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={buttonLabel}
      className="w-full gap-3 rounded-pill border-provider-button-border bg-white font-semibold text-provider-button-text hover:bg-provider-button-hover"
    >
      <span aria-hidden="true" className="inline-flex size-5 shrink-0 items-center justify-center">
        {icon}
      </span>
      <span>{buttonLabel}</span>
    </Button>
  );
}

export function GoogleAuthButton({ onClick }: { onClick?: () => void }) {
  return (
    <ProviderAuthButton
      provider="Google"
      label="Sign in with Google"
      onClick={onClick}
      icon={
        <Image
          src="https://developers.google.com/static/identity/images/g-logo.png"
          alt=""
          width={20}
          height={20}
          priority
          unoptimized
        />
      }
    />
  );
}
