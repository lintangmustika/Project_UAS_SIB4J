"use client";

import { useAuth } from "@/contexts/auth-context";
import { Shield } from "lucide-react";

export function Footer() {
  const { user } = useAuth();

  return (
    <footer className="border-t bg-gray-50">
      <div className="container flex items-center justify-between py-6 px-4 mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span>LaporSiber</span>
        </div>
        <div className="text-sm text-muted-foreground">
          {user ? (
            <span>Masuk sebagai {user.email}</span>
          ) : (
            <span>Akses Publik</span>
          )}
        </div>
      </div>
    </footer>
  );
}
