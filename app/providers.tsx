"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/contexts/auth-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/" || pathname.startsWith("/admin");

  return (
    <AuthProvider>
      <TooltipProvider>
        {hideLayout ? (
          <>{children}</>
        ) : (
          <>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </>
        )}
      </TooltipProvider>
    </AuthProvider>
  );
}
