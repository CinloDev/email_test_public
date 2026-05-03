'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Palette, Monitor, Smartphone, ArrowLeft } from 'lucide-react';
import Button from '@/components/shared/Button';

export default function ViewEmailPage() {
  const { id } = useParams();
  const [email, setEmail] = useState<any>(null);
  const [realColors, setRealColors] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`/api/emails/${id}`)
        .then(res => res.json())
        .then(data => setEmail(data));
    }
  }, [id]);

  if (!email) return <div className="loading-screen">Cargando correo...</div>;

  const getIframeSrcDoc = () => {
    const content = email.html_content || `<div style="font-family:sans-serif;padding:20px">${email.text_content}</div>`;
    if (realColors) return content;
    
    // Técnica Pro: Filtro de inversión para Dark Mode + Scrollbar personalizado
    const darkWrapper = `
      <style>
        html { 
          filter: invert(1) hue-rotate(180deg); 
          background: #fdfdfd !important; 
        }
        img, video, .no-invert { 
          filter: invert(1) hue-rotate(180deg); 
        }
        body { 
          margin: 0; 
          padding: 20px; 
          font-family: sans-serif; 
        }
        /* Ocultar scrollbar para una experiencia limpia sin barras blancas */
        html {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        ::-webkit-scrollbar {
          display: none; /* Chrome/Safari/Opera */
        }
      </style>
    `;
    return darkWrapper + content;
  };

  return (
    <div className="standalone-viewer animate-in">
      <nav className="viewer-nav">
        <div className="nav-left">
          <Button variant="ghost" icon={ArrowLeft} onClick={() => window.close()} style={{ fontSize: '0.8rem', color: '#71717a' }}>
            Cerrar Vista
          </Button>
          <div className="nav-meta">
            <span className="nav-subject">{email.subject}</span>
          </div>
        </div>
        
        <div className="nav-right">
          <button 
            className={`subtle-toggle ${realColors ? 'active' : ''}`}
            onClick={() => setRealColors(!realColors)}
          >
            {realColors ? 'MODO OSCURO' : 'COLORES REALES'}
          </button>
          <div className="nav-divider"></div>
          <Button 
            variant="icon" 
            icon={fullWidth ? Monitor : Smartphone} 
            onClick={() => setFullWidth(!fullWidth)}
            style={{ color: '#71717a' }}
            className="desktop-only"
          />
        </div>
      </nav>

      <main className="viewer-main">
        <div className={`standalone-container ${fullWidth ? 'full-width' : 'mobile-width'}`} style={{
          background: realColors ? '#fff' : '#18181b',
          boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
          border: '1px solid rgba(255,255,255,0.05)',
          padding: '10px'
        }}>
          <iframe
            srcDoc={getIframeSrcDoc()}
            className="viewer-iframe"
            title={email.subject}
            style={{ borderRadius: '8px' }}
          />
        </div>
      </main>

      <style jsx>{`
        .standalone-viewer {
          width: 100vw;
          height: 100vh;
          background: #070708;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .viewer-nav {
          padding: 12px 24px;
          background: #0d0d0f;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
        }

        .nav-left, .nav-right {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .nav-meta {
          border-left: 1px solid rgba(255,255,255,0.1);
          padding-left: 15px;
        }

        .nav-subject {
          color: #71717a;
          font-weight: 600;
          font-size: 0.85rem;
        }

        .subtle-toggle {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: #71717a;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: 0.2s;
        }

        .subtle-toggle:hover {
          background: rgba(255,255,255,0.03);
          color: #fff;
        }

        .subtle-toggle.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-muted);
        }

        .nav-divider {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.1);
        }

        .viewer-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          background: radial-gradient(circle at center, #121214 0%, #070708 100%);
          overflow: auto;
        }

        .standalone-container {
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          transition: 0.4s ease;
          max-width: 100%; /* Asegura que no desborde */
        }

        .full-width { max-width: 1000px; }
        .mobile-width { max-width: 450px; }

        @media (max-width: 600px) {
          .viewer-main { padding: 15px; }
          .nav-subject { display: none; } /* Ocultar asunto largo en móvil */
          .nav-left { gap: 10px; }
          .desktop-only { display: none !important; }
        }

        .viewer-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .loading-screen {
          width: 100vw;
          height: 100vh;
          background: #070708;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .toggle-real-colors-btn {
          font-size: 0.75rem !important;
          letter-spacing: 1px;
          font-weight: 900 !important;
          padding: 8px 16px !important;
          border: 1px solid rgba(255,255,255,0.2) !important;
        }
      `}</style>
    </div>
  );
}
