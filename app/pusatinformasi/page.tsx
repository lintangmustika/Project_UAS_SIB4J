"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  Phone,
  CreditCard,
  LinkIcon,
  Lock,
  Eye,
  Zap,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Wifi,
  Mail,
  MessageSquare,
  FileText,
  ArrowRight,
  Globe,
  Smartphone,
  Key,
  Newspaper,
  ExternalLink,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tipsKeamanan = [
  {
    icon: Lock,
    title: "Gunakan Password Kuat",
    description:
      "Buat kata sandi yang unik dengan kombinasi huruf besar, kecil, angka, dan simbol. Gunakan password manager untuk mengelolanya.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Key,
    title: "Aktifkan Two-Factor Authentication",
    description:
      "Selalu aktifkan 2FA pada akun penting seperti email, perbankan, dan media sosial untuk lapisan keamanan tambahan.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Wifi,
    title: "Hati-hati dengan Wi-Fi Publik",
    description:
      "Hindari mengakses akun sensitif melalui jaringan Wi-Fi publik. Gunakan VPN jika terpaksa harus menggunakan jaringan publik.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Mail,
    title: "Waspadai Email Phishing",
    description:
      "Jangan klik link atau unduh lampiran dari email yang mencurigakan. Periksa alamat pengirim sebelum memberikan informasi pribadi.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Smartphone,
    title: "Perbarui Perangkat secara Berkala",
    description:
      "Selalu update sistem operasi dan aplikasi ke versi terbaru untuk mendapatkan patch keamanan terkini.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Globe,
    title: "Verifikasi Situs Web",
    description:
      "Pastikan situs web menggunakan HTTPS sebelum memasukkan data sensitif. Periksa URL dengan teliti untuk menghindari situs palsu.",
    color: "bg-cyan-100 text-cyan-600",
  },
];

const jenisKejahatan = [
  {
    icon: Mail,
    name: "Phishing",
    description:
      "Teknik penipuan melalui email, SMS, atau pesan yang menyamar sebagai institusi terpercaya untuk mencuri data pribadi.",
    contoh: "Email palsu dari bank meminta Anda memverifikasi akun",
    color: "bg-blue-50 border-blue-200",
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    icon: CreditCard,
    name: "Penipuan Online",
    description:
      "Penipuan yang dilakukan melalui platform e-commerce, media sosial, atau situs web palsu untuk mengambil uang korban.",
    contoh: "Toko online fiktif yang menerima pembayaran tapi tidak mengirim barang",
    color: "bg-amber-50 border-amber-200",
    iconColor: "bg-amber-100 text-amber-600",
  },
  {
    icon: AlertTriangle,
    name: "Malware & Ransomware",
    description:
      "Perangkat lunak berbahaya yang merusak sistem, mencuri data, atau mengunci file korban hingga tebusan dibayar.",
    contoh: "File dokumen terenkripsi dan meminta pembayaran dalam Bitcoin",
    color: "bg-red-50 border-red-200",
    iconColor: "bg-red-100 text-red-600",
  },
  {
    icon: Eye,
    name: "Identity Theft",
    description:
      "Pencurian identitas digital di mana pelaku menggunakan data pribadi korban untuk keuntungan finansial.",
    contoh: "Pembukaan pinjaman online atas nama orang lain",
    color: "bg-purple-50 border-purple-200",
    iconColor: "bg-purple-100 text-purple-600",
  },
  {
    icon: MessageSquare,
    name: "Cyberstalking",
    description:
      "Penguntitan dan pelecehan secara digital yang dilakukan secara berulang dan membuat korban merasa terancam.",
    contoh: "Mengirim pesan mengancam secara berulang melalui media sosial",
    color: "bg-pink-50 border-pink-200",
    iconColor: "bg-pink-100 text-pink-600",
  },
  {
    icon: Zap,
    name: "DDoS Attack",
    description:
      "Serangan yang membanjiri server dengan lalu lintas palsu sehingga layanan menjadi tidak dapat diakses.",
    contoh: "Website perusahaan tiba-tiba lumpuh karena lalu lintas berlebih",
    color: "bg-orange-50 border-orange-200",
    iconColor: "bg-orange-100 text-orange-600",
  },
];

const faqList = [
  {
    question: "Bagaimana cara melaporkan kejahatan siber di LaporSiber?",
    answer:
      'Klik tombol "Buat Laporan" di halaman utama atau navigation bar. Isi formulir dengan detail insiden, sertakan bukti (screenshot, email, URL), lalu submit. Anda akan menerima nomor referensi untuk melacak status laporan.',
  },
  {
    question: "Apakah data pribadi saya aman saat melapor?",
    answer:
      "Ya. Semua data yang Anda kirimkan dienkripsi menggunakan teknologi enkripsi tingkat enterprise. Identitas Anda juga akan dijaga kerahasiaannya selama proses investigasi berlangsung.",
  },
  {
    question: "Berapa lama proses investigasi memakan waktu?",
    answer:
      "Waktu investigasi bervariasi tergantung kompleksitas kasus. Kasus prioritas tinggi ditangani dalam 24 jam. Untuk kasus umum, proses biasanya memakan waktu 3-14 hari kerja. Anda akan menerima update secara berkala.",
  },
  {
    question: "Siapa saja yang bisa membuat laporan?",
    answer:
      "Semua warga negara Indonesia dan penduduk di wilayah Indonesia bisa membuat laporan. Anda tidak perlu menjadi korban langsung — saksi juga dapat melaporkan insiden kejahatan siber yang diketahuinya.",
  },
  {
    question: "Apakah saya perlu membuat akun untuk melapor?",
    answer:
      "Ya, Anda perlu mendaftar dan masuk ke akun LaporSiber terlebih dahulu. Akun diperlukan untuk melacak status laporan dan menerima notifikasi update dari tim investigasi.",
  },
  {
    question: "Bagaimana cara mengecek status laporan saya?",
    answer:
      'Masuk ke akun LaporSiber Anda, lalu buka halaman "Laporan Saya" di dashboard. Di sana Anda bisa melihat status terkini, timeline investigasi, dan komunikasi dari tim kami.',
  },
  {
    question: "Apakah saya bisa melaporkan kejahatan siber yang terjadi di luar negeri?",
    answer:
      "LaporSiber fokus pada kejahatan siber yang berdampak pada warga atau aset digital di Indonesia. Jika kasus Anda melibatkan korban di Indonesia, Anda tetap bisa melapor meskipun pelaku berada di luar negeri.",
  },
];

const sumberDaya = [
  {
    icon: Phone,
    title: "Call Center BSSN",
    info: "117",
    description: "Badan Siber dan Sandi Negara",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Phone,
    title: "Call Center Polisi",
    info: "110",
    description: "Kepolisian Republik Indonesia",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: MessageSquare,
    title: "SMS/WA BSSN",
    info: "08111777007",
    description: "Laporan melalui pesan",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Globe,
    title: "Website BSSN",
    info: "bssn.go.id",
    description: "Situs resmi BSSN",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Globe,
    title: "Website Polisi Siber",
    info: "pati.go.id",
    description: "Patroli Siber Indonesia",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: FileText,
    title: "LaporSiber",
    info: "laporsiber.id",
    description: "Platform pelaporan kami",
    color: "bg-cyan-100 text-cyan-600",
  },
];

const beritaSiber = [
  {
    title: "BSSNRI Edukasi Keamanan Siber ke Masyarakat",
    source: "BSSN",
    date: "2025",
    description:
      "Badan Siber dan Sandi Negara menggelar edukasi keamanan siber untuk meningkatkan kesadaran masyarakat tentang ancaman digital.",
    url: "https://www.bssn.go.id",
    category: "Edukasi",
    color: "bg-blue-50 border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Kasus Phishing di Indonesia Meningkat Signifikan",
    source: "Kompas Tekno",
    date: "2025",
    description:
      "Laporan terbaru menunjukkan peningkatan kasus phishing di Indonesia, terutama melalui email dan pesan WhatsApp yang menyamar sebagai bank.",
    url: "https://tekno.kompas.com",
    category: "Ancaman",
    color: "bg-red-50 border-red-200",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    title: "Tips Aman Belanja Online di Era Digital",
    source: "Detikinet",
    date: "2025",
    description:
      "Panduan lengkap untuk berbelanja online dengan aman, mulai dari memverifikasi toko hingga memilih metode pembayaran yang aman.",
    url: "https://inet.detik.com",
    category: "Tips",
    color: "bg-green-50 border-green-200",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    title: "Serangan Ransomware Mengancam Instansi Pemerintah",
    source: "CNN Indonesia",
    date: "2025",
    description:
      "Beberapa instansi pemerintah Indonesia menjadi target serangan ransomware. BSSN mengimbau seluruh instansi untuk meningkatkan keamanan siber.",
    url: "https://www.cnnindonesia.com/teknologi",
    category: "Incident",
    color: "bg-amber-50 border-amber-200",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    title: "Cara Deteksi Email Phishing Sebelum Terlambat",
    source: "Tempo Tekno",
    date: "2025",
    description:
      "Pelajari cara mengenali ciri-ciri email phishing agar Anda tidak menjadi korban penipuan digital yang semakin marak.",
    url: "https://tekno.tempo.co",
    category: "Edukasi",
    color: "bg-purple-50 border-purple-200",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    title: "Indonesia Siapkan Regulasi Perlindungan Data Pribadi",
    source: "Republika",
    date: "2025",
    description:
      "Pemerintah Indonesia memperkuat regulasi perlindungan data pribadi untuk melindungi warga dari penyalahgunaan data digital.",
    url: "https://www.republika.co.id",
    category: "Regulasi",
    color: "bg-cyan-50 border-cyan-200",
    badgeColor: "bg-cyan-100 text-cyan-700",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t">
          <p className="pt-3">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function PusatInformasi() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="container mx-auto max-w-7xl relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Pusat Informasi Keamanan Siber
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Waspada &amp;
              <span className="text-blue-600"> Lindungi</span>
              <br />
              Diri Anda dari Kejahatan Siber
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Kenali berbagai jenis ancaman siber, pelajari tips keamanan
              digital, dan temukan sumber daya untuk melindungi diri Anda dan
              keluarga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reporter/report/new">
                <Button size="lg" className="text-lg px-8 gap-2">
                  Laporkan Insiden
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="#tips">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Pelajari Tips Keamanan
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Keamanan Siber */}
      <section id="tips" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Tips Keamanan
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tips Keamanan Digital
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Langkah-langkah sederhana yang bisa Anda lakukan untuk melindungi
              diri dari ancaman siber.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tipsKeamanan.map((tip) => {
              const Icon = tip.icon;
              return (
                <Card
                  key={tip.title}
                  className="border-0 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="pt-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${tip.color} mb-4`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jenis-Jenis Kejahatan Siber */}
      <section id="jenis-kejahatan" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Pengenalan
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Jenis-Jenis Kejahatan Siber
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kenali berbagai bentuk kejahatan siber agar Anda dapat
              mengenalinya lebih awal dan mengambil langkah pencegahan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jenisKejahatan.map((crime) => {
              const Icon = crime.icon;
              return (
                <Card
                  key={crime.name}
                  className={`border ${crime.color} hover:shadow-md transition-shadow`}
                >
                  <CardContent className="pt-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${crime.iconColor} mb-4`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{crime.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {crime.description}
                    </p>
                    <div className="bg-white/80 rounded-lg p-3 border border-gray-100">
                      <p className="text-xs text-gray-500 font-medium mb-1">
                        Contoh:
                      </p>
                      <p className="text-sm text-gray-700">{crime.contoh}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Berita & Artikel Siber */}
      <section id="berita" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Newspaper className="h-3 w-3 mr-1" />
              Berita Terkini
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Berita &amp; Artikel Siber
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ikuti perkembangan terkini seputar keamanan siber, kasus
              kejahatan digital, dan tips perlindungan data pribadi.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beritaSiber.map((berita) => (
              <a
                key={berita.title}
                href={berita.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block border rounded-xl p-6 ${berita.color} hover:shadow-lg transition-all duration-200 group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${berita.badgeColor}`}
                  >
                    {berita.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {berita.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {berita.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    {berita.source}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {berita.date}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-gray-600">
              Jawaban atas pertanyaan yang sering ditanyakan tentang LaporSiber
              dan keamanan siber.
            </p>
          </div>
          <div className="space-y-3">
            {faqList.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sumber Daya & Kontak Darurat */}
      <section id="kontak" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Darurat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sumber Daya &amp; Kontak Darurat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hubungi lembaga berikut jika Anda menjadi korban kejahatan siber
              atau membutuhkan bantuan segera.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sumberDaya.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card
                  key={resource.title}
                  className="border-0 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="pt-6 flex items-start gap-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${resource.color} shrink-0`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{resource.title}</h3>
                      <p className="text-2xl font-bold text-blue-600 mt-1">
                        {resource.info}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {resource.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white mb-6">
            <Shield className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jadi Korban Kejahatan Siber?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Jangan biarkan pelaku lolos. Laporkan insiden Anda sekarang dan bantu
            kami menciptakan ekosistem digital yang lebih aman untuk semua orang.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reporter/report/new">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 gap-2"
              >
                Laporkan Sekarang
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600"
              >
                Cek Status Laporan
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
