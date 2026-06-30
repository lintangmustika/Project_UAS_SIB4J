"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  HelpCircle,
  Search,
  Phone,
  MessageSquare,
  Mail,
  ArrowRight,
  Send,
  Clock,
  MapPin,
  CheckCircle,
  Headphones,
  Building,
  Smartphone,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

const kontakList = [
  {
    icon: Phone,
    title: "Telepon",
    info: "117",
    description: "Call Center BSSN (24 Jam)",
    detail: "Tersedia 24 jam, 7 hari seminggu",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    info: "0811-1777-007",
    description: "Chat Langsung",
    detail: "Respon cepat dalam 5 menit",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    info: "support@laporsiber.id",
    description: "Kirim Pesan",
    detail: "Respon dalam 1x24 jam",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: MapPin,
    title: "Alamat",
    info: "Jl. Veteran No. 5, Gambir",
    description: "Jakarta Pusat, DKI Jakarta",
    detail: "10110, Indonesia",
    color: "bg-amber-100 text-amber-600",
  },
];

const jamOperasional = [
  { hari: "Senin - Jumat", jam: "08:00 - 17:00" },
  { hari: "Sabtu", jam: "08:00 - 12:00" },
  { hari: "Minggu & Hari Libur", jam: "Tutup" },
  { hari: "Call Center", jam: "24 Jam" },
];

const layanan = [
  {
    icon: Shield,
    title: "Pelaporan Kejahatan Siber",
    description:
      "Laporkan phishing, penipuan, malware, dan jenis kejahatan digital lainnya.",
  },
  {
    icon: Headphones,
    title: "Konsultasi Keamanan",
    description:
      "Dapatkan saran ahli tentang keamanan digital dan perlindungan data.",
  },
  {
    icon: Building,
    title: "Kerja Sama Institusi",
    description:
      "Kolaborasi dengan lembaga pemerintah dan swasta dalam penanganan siber.",
  },
];

export default function PusatBantuan() {
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10" />
        <div className="container mx-auto max-w-7xl relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
              <HelpCircle className="h-4 w-4" />
              Hubungi Kami
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Kami Siap
              <span className="text-blue-400"> Membantu Anda</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Punya pertanyaan tentang keamanan siber atau butuh bantuan
              terkait laporan Anda? Tim kami yang profesional dan berpengalaman
              siap memberikan solusi terbaik untuk melindungi Anda dari ancaman
              digital.
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Cari topik bantuan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-full border-2 border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topik Bantuan */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Topik
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Topik Bantuan Lainnya
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi panduan dan artikel tentang keamanan siber.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Keamanan Password
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Pelajari cara membuat password yang kuat dan mengelolanya
                  dengan aman.
                </p>
                <Link
                  href="/pusatinformasi"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  Baca selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 mb-4">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Keamanan Mobile
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Tips menjaga keamanan perangkat seluler Anda dari malware
                  dan pencurian data.
                </p>
                <Link
                  href="/pusatinformasi"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  Baca selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 text-purple-600 mb-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Transaksi Online Aman
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Panduan berbelanja dan bertransaksi secara online dengan
                  aman.
                </p>
                <Link
                  href="/pusatinformasi"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  Baca selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Kontak
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tim support kami siap membantu Anda 24 jam. Pilih metode
              komunikasi yang paling nyaman untuk Anda.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {kontakList.map((kontak) => {
              const Icon = kontak.icon;
              return (
                <Card
                  key={kontak.title}
                  className="border-0 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <CardContent className="pt-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${kontak.color} mb-4`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-1">{kontak.title}</h3>
                    <p className="text-xl font-bold text-blue-600 mb-1">
                      {kontak.info}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      {kontak.description}
                    </p>
                    <p className="text-xs text-gray-400">{kontak.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Kirim Pesan kepada Kami
                    </h3>
                    <p className="text-gray-600">
                      Isi formulir di bawah ini dan kami akan merespon secepat
                      mungkin.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">
                        Pesan Terkirim!
                      </h4>
                      <p className="text-gray-600">
                        Terima kasih telah menghubungi kami. Tim kami akan
                        merespon dalam 1x24 jam.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Nama Lengkap
                          </label>
                          <Input
                            placeholder="Masukkan nama Anda"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                name: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email</label>
                          <Input
                            type="email"
                            placeholder="email@contoh.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Subjek</label>
                        <Input
                          placeholder="Perihal pesan Anda"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Pesan</label>
                        <Textarea
                          placeholder="Tuliskan pesan Anda di sini..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full gap-2">
                        <Send className="h-4 w-4" />
                        Kirim Pesan
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold">Jam Operasional</h4>
                  </div>
                  <div className="space-y-3">
                    {jamOperasional.map((item) => (
                      <div
                        key={item.hari}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-gray-600">{item.hari}</span>
                        <span className="font-medium">{item.jam}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Layanan Kami</h4>
                  <div className="space-y-4">
                    {layanan.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="flex gap-3">
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 shrink-0">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="text-xs text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Peta Lokasi */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Lokasi
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kantor Pusat Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kunjungi kantor kami untuk konsultasi langsung atau serahkan
              laporan Anda.
            </p>
          </div>
          <Card className="border-0 shadow-sm overflow-hidden">
            <div className="bg-gray-100 h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">
                  Jl. Veteran No. 5, Gambir
                </p>
                <p className="text-sm text-gray-400">
                  Jakarta Pusat, DKI Jakarta 10110
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
