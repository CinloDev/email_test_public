export interface EmailPayload {
  id: string;
  subject: string;
  from: string;
  to: string[];
  cc: string[];
  html: string;
  text: string;
  variables: string[]; // Variables detectadas (sin reemplazar)
  headers: Record<string, any>;
  createdAt: string;
  status: 'pass' | 'fail'; // fail si hay variables sin reemplazar
}

export interface AppConfig {
  smtpPort: string;
  emailLimit: string;
}
