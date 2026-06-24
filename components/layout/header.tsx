"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { Shield, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const { user, logout, isAdmin } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-14 items-center justify-between px-4 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Shield className="h-6 w-6 text-primary" />
          <span>CyberGuard</span>
        </Link>

        <nav className="flex items-center gap-4">
          {user ? (
            <>
              {isAdmin ? (
                <Link href="/admin/dashboard">
                  <Button variant="ghost" size="sm">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/reporter/my-reports">
                    <Button variant="ghost" size="sm">
                      Laporan Saya
                    </Button>
                  </Link>
                  <Link href="/reporter/report/new">
                    <Button size="sm">Buat Laporan</Button>
                  </Link>
                </>
              )}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{user.name}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Masuk
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Daftar</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
