export type ReportStatus = "received" | "in_progress" | "completed" | "rejected";

export type CrimeType =
  | "phishing"
  | "identity_theft"
  | "ransomware"
  | "data_breach"
  | "cyberstalking"
  | "online_fraud"
  | "malware"
  | "ddos"
  | "other";

export interface Reporter {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Report {
  id: string;
  reporter: Reporter;
  title: string;
  description: string;
  crimeType: CrimeType;
  incidentDate: string;
  incidentTime: string;
  location: string;
  evidenceFiles: EvidenceFile[];
  relatedUrls: string[];
  status: ReportStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}

export interface EvidenceFile {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
}

export interface DashboardStats {
  totalReports: number;
  received: number;
  inProgress: number;
  completed: number;
  rejected: number;
  reportsByType: { type: string; count: number }[];
  reportsByMonth: { month: string; count: number }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "reporter" | "admin";
}
