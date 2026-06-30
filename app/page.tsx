"use client";

import Link from "next/link";
import {
  Shield,
  FileText,
  AlertTriangle,
  Phone,
  CreditCard,
  LinkIcon,
  Search,
  ChevronRight,
  Eye,
  Lock,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const features = [
  {
    icon: FileText,
    title: "Laporan Mudah",
    description: "Formulir laporan yang intuitif membantu Anda menjelaskan insiden siber dengan detail yang diperlukan.",
  },
  {
    icon: Eye,
    title: "Pelacakan Real-time",
    description: "Pantau status laporan Anda secara langsung dari dashboard kapan saja.",
  },
  {
    icon: Lock,
    title: "Data Terjamin",
    description: "Semua laporan dan data pribadi Anda dilindungi dengan enkripsi tingkat enterprise.",
  },
  {
    icon: Zap,
    title: "Respon Cepat",
    description: "Tim investigasi kami merespon laporan dalam waktu 24 jam untuk kasus prioritas.",
  },
];

const steps = [
  {
    step: "01",
    title: "Buat Laporan",
    description: "Isi formulir dengan detail insiden yang Anda alami. Sertakan bukti jika ada.",
  },
  {
    step: "02",
    title: "Verifikasi",
    description: "Tim kami memverifikasi laporan Anda dan menentukan prioritas penanganan.",
  },
  {
    step: "03",
    title: "Investigasi",
    description: "Tim investigasi siber mulai bekerja untuk melacak dan menangani kasus Anda.",
  },
  {
    step: "04",
    title: "Penyelesaian",
    description: "Anda menerima update status dan hasil penanganan laporan.",
  },
];

const stats = [
  { value: "12,500+", label: "Laporan Diterima" },
  { value: "98%", label: "Tingkat Penyelesaian" },
  { value: "24 jam", label: "Waktu Respon" },
  { value: "50+", label: "Tim Investigasi" },
];

const crimeTypes = [
  { icon: Phone, name: "Phishing", color: "bg-blue-100 text-blue-600" },
  { icon: CreditCard, name: "Penipuan Online", color: "bg-amber-100 text-amber-600" },
  { icon: AlertTriangle, name: "Malware", color: "bg-red-100 text-red-600" },
  { icon: Shield, name: "Identity Theft", color: "bg-purple-100 text-purple-600" },
];

export default function Beranda() {
  const [cekNomor, setCekNomor] = useState("");
  const [cekRekening, setCekRekening] = useState("");
  const [cekLink, setCekLink] = useState("");

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Shield className="h-7 w-7 text-blue-600" />
            <span>LaporSiber</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#fitur" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Fitur</a>
            <a href="#cara-kerja" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Cara Kerja</a>
            <a href="#cek" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Cek Penipuan</a>
            <a href="#statistik" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Statistik</a>
            <Link href="/pusatinformasi" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Informasi</Link>
            <Link href="/pusatbantuan" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Bantuan & Tentang Kami</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">Masuk</Button>
            </Link>
            <Link href="/reporter/report/new">
              <Button size="sm">Buat Laporan</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="container mx-auto max-w-7xl relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Platform Pelaporan Kejahatan Siber #1 di Indonesia
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Laporkan Kejahatan
              <span className="text-blue-600"> Siber</span>
              <br />
              Dengan Mudah
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Bantu kami memerangi ancaman siber dengan melaporkan phishing, penipuan,
              malware, dan kejahatan digital lainnya. Laporan Anda membuat perbedaan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reporter/report/new">
                <Button size="lg" className="text-lg px-8 gap-2">
                  Buat Laporan Sekarang
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="#cara-kerja">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Pelajari Selengkapnya
                </Button>
              </a>
            </div>
          </div>

          {/* Crime Types */}
          <div className="flex justify-center gap-4 mt-16">
            {crimeTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.name} className={`flex items-center gap-2 px-4 py-2 rounded-full ${type.color} text-sm font-medium`}>
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{type.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="fitur" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa LaporSiber?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Platform kami dirancang untuk memberikan pengalaman pelaporan yang cepat, aman, dan efektif.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="cara-kerja" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Kerja</h2>
            <p className="text-gray-600">Proses pelaporan yang sederhana dalam 4 langkah</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <ChevronRight className="hidden md:block h-5 w-5 text-gray-300 absolute -right-4 top-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cek Penipuan */}
      <section id="cek" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cek Penipuan</h2>
            <p className="text-gray-600">Verifikasi nomor telepon, rekening bank, atau link sebelum Anda percaya</p>
          </div>
          <Card className="border shadow-sm">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    Cek Nomor Telepon
                  </label>
                  <div className="flex gap-2">
                    <Input placeholder="08xxx" value={cekNomor} onChange={(e) => setCekNomor(e.target.value)} />
                    <Button variant="outline"><Search className="h-4 w-4" /></Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-blue-600" />
                    Cek Rekening Bank
                  </label>
                  <div className="flex gap-2">
                    <Input placeholder="1234567890" value={cekRekening} onChange={(e) => setCekRekening(e.target.value)} />
                    <Button variant="outline"><Search className="h-4 w-4" /></Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <LinkIcon className="h-4 w-4 text-blue-600" />
                    Cek Link / URL
                  </label>
                  <div className="flex gap-2">
                    <Input placeholder="https://..." value={cekLink} onChange={(e) => setCekLink(e.target.value)} />
                    <Button variant="outline"><Search className="h-4 w-4" /></Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section id="statistik" className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Statistik Kami</h2>
            <p className="text-blue-100">Dipercaya oleh jutaan pengguna di seluruh Indonesia</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Jadi Korban Kejahatan Siber?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Jangan biarkan pelaku lolos. Laporkan insiden Anda sekarang dan bantu kami
            menciptakan ekosistem digital yang lebih aman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reporter/report/new">
              <Button size="lg" className="text-lg px-8 gap-2">
                Laporkan Sekarang
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="text-lg px-8">
                Cek Status Laporan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Shield className="h-6 w-6 text-blue-500" />
                LaporSiber
              </div>
              <p className="text-sm text-gray-400">
                Platform pelaporan kejahatan siber yang aman dan terpercaya untuk masyarakat Indonesia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Tautan</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#fitur" className="hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#cara-kerja" className="hover:text-white transition-colors">Cara Kerja</a></li>
                <li><a href="#cek" className="hover:text-white transition-colors">Cek Penipuan</a></li>
                <li><a href="#statistik" className="hover:text-white transition-colors">Statistik</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/reporter/report/new" className="hover:text-white transition-colors">Buat Laporan</Link></li>
                <li><Link href="/pusatinformasi" className="hover:text-white transition-colors">Pusat Informasi</Link></li>
                <li><Link href="/pusatbantuan" className="hover:text-white transition-colors">Bantuan & Tentang Kami</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Masuk</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>110 (Call Center Polisi)</li>
                <li>info@laporsiber.id</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} LaporSiber. Melindungi keamanan digital Indonesia.
          </div>
        </div>
      </footer>
    </div>
  );
}
