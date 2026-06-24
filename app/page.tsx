"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  AlertTriangle,
  Phone,
  CreditCard,
  LinkIcon,
  FileText,
  Search,
  BookOpen,
  Lightbulb,
  Info,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

const fraudTypes = [
  {
    icon: Phone,
    title: "Phishing",
    description:
      "Penipuan melalui email, SMS, atau telepon yang mengaku dari lembaga resmi untuk mencuri data pribadi.",
  },
  {
    icon: CreditCard,
    title: "Penipuan Online",
    description:
      "Penipuan yang terjadi di platform e-commerce, marketplace, atau media sosial.",
  },
  {
    icon: AlertTriangle,
    title: "Malware & Ransomware",
    description:
      "Serangan perangkat lunak berbahaya yang mengenkripsi data atau mencuri informasi.",
  },
  {
    icon: Shield,
    title: "Identity Theft",
    description:
      "Pencurian identitas untuk melakukan transaksi atau tindakan ilegal atas nama korban.",
  },
];

const safetyTips = [
  {
    title: "Jangan Klik Link Mencurigakan",
    description:
      "Selalu verifikasi URL sebelum memasukkan data pribadi. Pastikan situs menggunakan HTTPS.",
  },
  {
    title: "Gunakan Kata Sandi Kuat",
    description:
      "Buat kata sandi unik untuk setiap akun dan aktifkan autentikasi dua faktor.",
  },
  {
    title: "Waspada Penawaran Terlalu Bagus",
    description:
      "Jika terdengar terlalu bagus untuk menjadi kenyataan, kemungkinan itu penipuan.",
  },
  {
    title: "Backup Data Secara Berkala",
    description:
      "Simpan cadangan data penting di tempat terpisah untuk melindungi dari serangan ransomware.",
  },
];

export default function HomePage() {
  const [cekNomor, setCekNomor] = useState("");
  const [cekRekening, setCekRekening] = useState("");
  const [cekLink, setCekLink] = useState("");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Melindungi Keamanan Digital
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Laporkan Kejahatan Siber
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Bantu kami memerangi ancaman siber dengan melaporkan phishing, penipuan,
            malware, dan kejahatan digital lainnya. Laporan Anda membuat perbedaan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reporter/report/new">
              <Button size="lg" className="text-lg px-8">
                Buat Laporan
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="text-lg px-8">
                Masuk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Jenis Penipuan */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Jenis Penipuan Siber
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Kenali berbagai jenis kejahatan siber agar Anda dapat lebih waspada
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fraudTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card key={type.title} className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cek Penipuan */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">Cek Penipuan</h2>
          <p className="text-center text-gray-600 mb-12">
            Verifikasi nomor telepon, rekening bank, atau link sebelum Anda percaya
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Cek Nomor Telepon */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Cek Nomor Telepon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input
                    placeholder="Masukkan nomor telepon"
                    value={cekNomor}
                    onChange={(e) => setCekNomor(e.target.value)}
                  />
                  <Button className="w-full" variant="outline">
                    <Search className="h-4 w-4 mr-2" />
                    Cek Nomor
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Cek Rekening */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  Cek Rekening Bank
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input
                    placeholder="Masukkan nomor rekening"
                    value={cekRekening}
                    onChange={(e) => setCekRekening(e.target.value)}
                  />
                  <Button className="w-full" variant="outline">
                    <Search className="h-4 w-4 mr-2" />
                    Cek Rekening
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Cek Link */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <LinkIcon className="h-5 w-5 text-blue-600" />
                  Cek Link
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input
                    placeholder="Masukkan URL/link"
                    value={cekLink}
                    onChange={(e) => setCekLink(e.target.value)}
                  />
                  <Button className="w-full" variant="outline">
                    <Search className="h-4 w-4 mr-2" />
                    Cek Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Laporan */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">Laporan</h2>
          <p className="text-center text-gray-600 mb-12">
            Laporkan insiden siber atau cek status laporan Anda
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Buat Laporan</h3>
                <p className="text-gray-600 mb-4">
                  Kirimkan laporan kejahatan siber yang Anda alami atau saksikan.
                  Formulir laporan kami membantu Anda memberikan detail yang diperlukan.
                </p>
                <Link href="/reporter/report/new">
                  <Button className="w-full">
                    Mulai Laporan
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cek Status Laporan</h3>
                <p className="text-gray-600 mb-4">
                  Pantau status laporan yang sudah Anda kirim. Ketahui perkembangan
                  penanganan laporan Anda.
                </p>
                <Link href="/login">
                  <Button variant="outline" className="w-full">
                    Cek Status
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pusat Informasi */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Pusat Informasi
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Berita terkini dan tips keamanan digital
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Berita */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl font-semibold">Berita Terkini</h3>
              </div>
              <div className="space-y-4">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-4">
                    <div className="text-xs text-blue-600 font-medium mb-1">
                      15 Januari 2025
                    </div>
                    <h4 className="font-semibold mb-1">
                      Kasus Phishing Bank Meningkat 30% di Awal Tahun
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      Kepolisian melaporkan peningkatan signifikan kasus phishing
                      yang mengatasnamakan bank-bank besar di Indonesia.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-4">
                    <div className="text-xs text-blue-600 font-medium mb-1">
                      10 Januari 2025
                    </div>
                    <h4 className="font-semibold mb-1">
                      Waspada Penipuan Investasi Online
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      OJK mengingatkan masyarakat untuk berhati-hati terhadap
                      investasi online yang menjanjikan keuntungan tidak realistis.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-4">
                    <div className="text-xs text-blue-600 font-medium mb-1">
                      5 Januari 2025
                    </div>
                    <h4 className="font-semibold mb-1">
                      Serangan Ransomware Sasar Instansi Pemerintah
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      Beberapa instansi pemerintah menjadi target serangan
                      ransomware yang mengenkripsi data penting.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tips Keamanan */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                <h3 className="text-xl font-semibold">Tips Keamanan</h3>
              </div>
              <div className="space-y-4">
                {safetyTips.map((tip, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-4">
                      <div className="flex items-start gap-3">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600 shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{tip.title}</h4>
                          <p className="text-sm text-gray-600">
                            {tip.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pusat Bantuan */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Pusat Bantuan
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Butuh bantuan? Hubungi kami atau pelajari lebih lanjut
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tentang Kami */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  Tentang Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  CyberGuard adalah platform pelaporan kejahatan siber yang
                  bertujuan untuk membantu masyarakat Indonesia melindungi diri
                  dari ancaman digital.
                </p>
                <p className="text-gray-600">
                  Kami bekerja sama dengan pihak berwenang untuk menangani
                  laporan kejahatan siber dan memberikan layanan verifikasi
                  kepada masyarakat.
                </p>
                <p className="text-gray-600">
                  Visi kami adalah menciptakan ekosistem digital yang aman dan
                  terpercaya bagi seluruh masyarakat Indonesia.
                </p>
              </CardContent>
            </Card>

            {/* Kontak */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">info@cyberguard.id</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Telepon</p>
                    <p className="font-medium">110 (Call Center Polisi)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Alamat</p>
                    <p className="font-medium">Jakarta, Indonesia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="font-bold text-lg">CyberGuard</span>
            </div>
            <div className="text-sm text-gray-400 text-center">
              &copy; 2025 CyberGuard. Melindungi keamanan digital Indonesia.
            </div>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="/login" className="hover:text-white">
                Masuk
              </Link>
              <Link href="/register" className="hover:text-white">
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
