"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import {
  LayoutDashboard,
  FileText,
  Settings,
  PlusCircle,
  List,
} from "lucide-react";
import { cn } from "@/lib/utils";

const adminNavItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/reports", label: "Laporan", icon: FileText },
  { href: "/admin/settings", label: "Pengaturan", icon: Settings },
];

const reporterNavItems = [
  { href: "/reporter/report/new", label: "Buat Laporan", icon: PlusCircle },
  { href: "/reporter/my-reports", label: "Laporan Saya", icon: List },
];

export function Sidebar() {
  const { isAdmin } = useAuth();
  const pathname = usePathname();

  const navItems = isAdmin ? adminNavItems : reporterNavItems;

  return (
    <aside className="w-64 border-r bg-gray-50 min-h-[calc(100vh-3.5rem)]">
      <nav className="flex flex-col gap-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/admin/dashboard"
              ? pathname === "/admin/dashboard"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
