"use client";

import { ReactNode } from "react";
import { AuthProvider } from "@/contexts/auth-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <TooltipProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </TooltipProvider>
    </AuthProvider>
  );
}
