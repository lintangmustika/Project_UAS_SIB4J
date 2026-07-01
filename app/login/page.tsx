"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Shield, Eye, EyeOff, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAdmin } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        if (isAdmin) {
          router.push("/admin/dashboard");
        } else {
          router.push("/");
        }
      } else {
        setError("Email atau password salah. Gunakan admin@example.com");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-blue-950 px-4 relative">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-blue-200 hover:text-white text-sm font-medium transition-colors">
            <ChevronLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 text-white mb-6">
          <Shield className="h-8 w-8" />
          <span className="font-semibold text-2xl tracking-wide">LaporSiber</span>
        </div>

        <Card className="shadow-2xl border-0 rounded-[2rem] p-4 sm:p-6 bg-white/95 backdrop-blur-sm animate-in fade-in zoom-in duration-700 ease-out">
          <CardHeader className="text-center gap-2">
            <CardTitle className="text-2xl font-extrabold text-gray-900">Welcome!</CardTitle>
            <CardDescription>Masukkan email dan kata sandi Anda untuk melanjutkan</CardDescription>
          </CardHeader>
          <CardContent className="pt-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-700 text-sm border border-red-200">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="Masukkan email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl border-gray-200 h-11 focus-visible:ring-blue-600"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-xl border-gray-200 h-11 pr-10 focus-visible:ring-blue-600"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600 w-4 h-4" />
                  Ingat saya
                </label>
                <Link href="/" className="font-medium text-blue-600 hover:text-blue-700">
                  Lupa password?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-base font-semibold transition-all" 
                disabled={isLoading}>
                {isLoading ? "Masuk..." : "Masuk"}
              </Button>

              <Button type="button" variant="outline" className="w-full h-12 rounded-xl border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Masuk dengan Google
              </Button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-3">
              Belum punya akun? <Link href="#" className="font-medium text-blue-600 hover:underline">Daftar sekarang</Link>
            </p>

          </CardContent>
        </Card>

      </div>
    </div>
  );
}
