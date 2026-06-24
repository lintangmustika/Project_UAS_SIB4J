import { CrimeType, ReportStatus } from "./types";

export const CRIME_TYPES: { value: CrimeType; label: string }[] = [
  { value: "phishing", label: "Phishing" },
  { value: "identity_theft", label: "Identity Theft" },
  { value: "ransomware", label: "Ransomware" },
  { value: "data_breach", label: "Data Breach" },
  { value: "cyberstalking", label: "Cyberstalking" },
  { value: "online_fraud", label: "Online Fraud" },
  { value: "malware", label: "Malware" },
  { value: "ddos", label: "DDoS Attack" },
  { value: "other", label: "Other" },
];

export const REPORT_STATUSES: {
  value: ReportStatus;
  label: string;
  color: string;
}[] = [
  { value: "received", label: "Diterima", color: "bg-blue-100 text-blue-800" },
  {
    value: "in_progress",
    label: "Diproses",
    color: "bg-amber-100 text-amber-800",
  },
  {
    value: "completed",
    label: "Selesai",
    color: "bg-green-100 text-green-800",
  },
  {
    value: "rejected",
    label: "Ditolak",
    color: "bg-red-100 text-red-800",
  },
];

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ACCEPTED_FILE_TYPES = [
  "image/*",
  "application/pdf",
  ".doc",
  ".docx",
  ".txt",
  ".zip",
];
