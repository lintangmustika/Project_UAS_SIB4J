import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Kata sandi minimal 6 karakter"),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, "Nama minimal 2 karakter"),
    email: z.string().email("Email tidak valid"),
    phone: z.string().min(10, "Nomor telepon minimal 10 digit"),
    address: z.string().min(5, "Alamat wajib diisi"),
    password: z.string().min(6, "Kata sandi minimal 6 karakter"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Kata sandi tidak cocok",
    path: ["confirmPassword"],
  });

export const reportSchema = z.object({
  reporterName: z.string().min(2),
  reporterEmail: z.string().email(),
  reporterPhone: z.string().min(10),
  reporterAddress: z.string().min(5),
  title: z
    .string()
    .min(5, "Judul minimal 5 karakter")
    .max(200),
  description: z
    .string()
    .min(20, "Deskripsi minimal 20 karakter")
    .max(5000),
  crimeType: z.enum([
    "phishing",
    "identity_theft",
    "ransomware",
    "data_breach",
    "cyberstalking",
    "online_fraud",
    "malware",
    "ddos",
    "other",
  ]),
  incidentDate: z.string().min(1, "Tanggal wajib diisi"),
  incidentTime: z.string().optional(),
  location: z.string().min(2, "Lokasi wajib diisi"),
  relatedUrls: z.array(z.string().url()).optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ReportInput = z.infer<typeof reportSchema>;
