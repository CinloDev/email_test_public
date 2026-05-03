'use client';
import { Send, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '@/components/shared/Button';

interface HomeViewProps {
  config: {
    smtpPort: string;
    maxEmails: number;
  };
  emailsCount: number;
  onOpenDashboard: () => void;
}

export default function HomeView({ config, emailsCount, onOpenDashboard }: HomeViewProps) {
  return (
    <main className="home-screen animate-in">
      <div className="home-container">
        <div className="brand-large">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Send size={50} color="var(--accent)" />
            <h1 style={{ margin: 0 }}>Mail<span>Quark</span></h1>
          </div>
        </div>
        <p className="tagline">Pruebas SMTP locales para desarrolladores de élite</p>

        <div className="status-grid">
          <div className="status-card">
            <div className="status-dot online"></div>
            <span className="status-label">SERVIDOR SMTP</span>
            <code className="status-value">localhost:{config.smtpPort}</code>
          </div>

          <div className="status-card">
            <Mail size={20} className="status-icon" />
            <span className="status-label">CAPACIDAD BANDEJA</span>
            <span className="status-value">{emailsCount} / {config.maxEmails}</span>
          </div>

          <div className="status-card">
            <ShieldCheck size={20} className="status-icon" />
            <span className="status-label">SEGURIDAD</span>
            <span className="status-value">Modo Privado ACTIVADO</span>
          </div>
        </div>

        <Button 
          variant="primary" 
          size="xl" 
          icon={ArrowRight} 
          onClick={onOpenDashboard}
        >
          Abrir Dashboard
        </Button>

        <div className="home-footer">
          Creado para el ecosistema <strong>CinloDev</strong>
        </div>
      </div>
    </main>
  );
}
