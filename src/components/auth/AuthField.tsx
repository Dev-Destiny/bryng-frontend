import { useState, type InputHTMLAttributes, type ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { cn } from "@/utils/cn";

export function AuthField({
  id,
  label,
  prefix,
  error,
  success,
  showPasswordToggle = false,
  type: inputType = "text",
  className,
  ...inputProps
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  prefix?: ReactNode;
  error?: string;
  success?: boolean;
  showPasswordToggle?: boolean;
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const validationState = error ? "error" : success ? "success" : undefined;
  const describedBy = error && id ? `${id}-error` : undefined;
  const canTogglePassword = inputType === "password" && showPasswordToggle;

  function renderInput(bare = false) {
    return (
      <Input
        id={id}
        bare={bare}
        type={canTogglePassword && passwordVisible ? "text" : inputType}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        validationState={validationState}
        className={cn(className, canTogglePassword && !bare && "pr-11")}
        {...inputProps}
      />
    );
  }

  function renderPasswordToggle() {
    if (!canTogglePassword) return null;

    return (
      <button
        type="button"
        aria-label={passwordVisible ? "Hide password" : "Show password"}
        aria-pressed={passwordVisible}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => setPasswordVisible((visible) => !visible)}
        className="absolute inset-y-0 right-3 inline-flex items-center justify-center rounded-md px-1 text-text-muted transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        {passwordVisible ? <EyeOff aria-hidden="true" className="size-4" /> : <Eye aria-hidden="true" className="size-4" />}
      </button>
    );
  }

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-ui-label font-semibold text-text-primary">{label}</label>
      {prefix ? (
        <div className={cn(
          "flex min-h-11 items-center rounded-xl border border-border-subtle bg-bg-surface transition-colors focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/30",
          error && "border-error bg-error-subtle focus-within:border-error focus-within:ring-error/20",
          success && !error && "border-field-success focus-within:border-field-success focus-within:ring-field-success/20",
          inputProps.disabled && "cursor-not-allowed bg-bg-subtle opacity-75",
        )}>
          <span className="ml-3.5 shrink-0 border-r border-border-subtle pr-3 text-sm font-medium text-text-secondary">{prefix}</span>
          {renderInput(true)}
        </div>
      ) : canTogglePassword ? (
          <div className="relative">
            {renderInput()}
            {renderPasswordToggle()}
          </div>
      ) : renderInput()}
      {error && <p id={describedBy} role="alert" className="text-ui-caption font-medium text-error">{error}</p>}
    </div>
  );
}
