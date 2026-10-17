import type { ReactNode } from "react";
import { WorkspaceShell } from "@/components/navigation/WorkspaceShell";

export default function ProfessionalLayout({ children }: { children: ReactNode }) {
  return <WorkspaceShell mode="professional">{children}</WorkspaceShell>;
}
