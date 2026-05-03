'use client';
import { useState, useEffect } from 'react';
import { 
  Send, Search, Trash2, RefreshCcw, MailOpen, Terminal, 
  Code, Globe, LogOut, Copy, Check, Paperclip, ExternalLink, 
  Palette, Smartphone, Monitor, Database, Download, Braces,
  ShieldAlert, ShieldCheck, FileCode, List, Maximize, Eye, FileText, Code2, Shield, ArrowLeft
} from 'lucide-react';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';

interface DashboardViewProps {
  emails: any[];
  selectedEmail: any;
  onSelectEmail: (email: any) => void;
  onRefresh: () => void;
  onDelete: (id: string, e: any) => void;
  onClearAll: () => void;
  onLogout: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  copyToClipboard: (text: string, type: string) => void;
  copied: string | null;
  config: any;
  isRefreshing?: boolean;
  onGoHome?: () => void;
}

export default function DashboardView({
  emails,
  selectedEmail,
  onSelectEmail,
  onRefresh,
  onDelete,
  onClearAll,
  onLogout,
  searchQuery,
  onSearchChange,
  copyToClipboard,
  copied,
  config,
  isRefreshing,
  onGoHome
}: DashboardViewProps) {
  const [viewMode, setViewMode] = useState<'html' | 'text' | 'vars' | 'headers'>('html');
  const [fullWidth, setFullWidth] = useState(true);
  const [realColors, setRealColors] = useState(false);
  const [fullEmailData, setFullEmailData] = useState<any>(null);

  useEffect(() => {
    if (selectedEmail?.id) {
      fetch(`/api/emails/${selectedEmail.id}`)
        .then(res => res.json())
        .then(data => setFullEmailData(data));
    } else {
      setFullEmailData(null);
    }
  }, [selectedEmail?.id]);

  const extractVariables = () => {
    if (!selectedEmail) return [];
    const text = (selectedEmail.html_content || '') + (selectedEmail.text_content || '');
    const regex = /\{\{([^}]+)\}\}|\%\{([^}]+)\}\%/g;
    const matches = new Set<string>();
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.add(match[1] || match[2]);
    }
    return Array.from(matches);
  };

  const vars = extractVariables();
  const hasVars = vars.length > 0;

  const cleanAddress = (addr: string) => {
    if (!addr) return 'Desconocido';
    return addr.replace(/["']/g, '').replace(/<.*?>/g, (m) => ` ${m}`).trim();
  };

  const getIframeSrcDoc = () => {
    const content = selectedEmail.html_content || `<div style="font-family:sans-serif;padding:20px">${selectedEmail.text_content}</div>`;
    if (realColors) return content;
    
    const darkWrapper = `
      <style>
        html { filter: invert(1) hue-rotate(180deg); background: #fdfdfd !important; }
        img, video, .no-invert { filter: invert(1) hue-rotate(180deg); }
        body { margin: 0; padding: 20px; font-family: sans-serif; scrollbar-width: none; -ms-overflow-style: none; }
        ::-webkit-scrollbar { display: none; }
      </style>
    `;
    return darkWrapper + content;
  };

  return (
    <main className="app-shell animate-in">
      {/* Sidebar */}
      <aside className="sidebar">
        <header className="sidebar-header">
          <div className="brand clickable" onClick={onGoHome}>
            <Send size={24} className="brand-icon-animate" />
            <span>Mail<span>Quark</span></span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button 
              variant="icon" 
              icon={RefreshCcw} 
              onClick={onRefresh} 
              title="Refrescar" 
              loading={isRefreshing}
              className="btn-refresh-aesthetic"
            />
            <Button 
              variant="icon" 
              icon={LogOut} 
              onClick={onLogout} 
              title="Cerrar Sesión" 
              className="btn-logout-aesthetic"
            />
          </div>
        </header>

        <div className="search-container">
          <Input 
            icon={Search}
            placeholder="Buscar correos..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="email-list">
          {emails.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-dark)' }}>
              No hay correos aún...
            </div>
          ) : (
            emails.map((email) => (
              <div
                key={email.id}
                className={`email-card ${selectedEmail?.id === email.id ? 'active' : ''}`}
                onClick={() => onSelectEmail(email)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="card-subject">{email.subject || '(Sin Asunto)'}</div>
                  <Button 
                    variant="ghost" 
                    icon={Trash2} 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(email.id, e);
                    }} 
                    className="trash-btn-aesthetic"
                  />
                </div>
                <div className="card-meta">De: {cleanAddress(email.from_address)}</div>
                <div className="card-meta" style={{ marginTop: '4px', opacity: 0.5, display: 'flex', justifyContent: 'space-between' }}>
                  <span>{new Date(email.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  {email.has_attachments === 1 && <Paperclip size={12} />}
                </div>
              </div>
            ))
          )}
        </div>

        <div style={{ padding: '16px', borderTop: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.75rem' }}>
            <span style={{ color: 'var(--text-dark)' }}>Puerto SMTP:</span>
            <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{config.smtpPort}</span>
          </div>
          <Button 
            variant="icon" 
            icon={Trash2} 
            onClick={onClearAll} 
            style={{ width: '100%', justifyContent: 'center', color: 'var(--danger)', fontSize: '0.8rem' }}
          >
            Vaciar Bandeja
          </Button>
        </div>
      </aside>

      {/* Main Viewer */}
      <section className={`viewport ${selectedEmail ? 'active' : ''}`}>
        {selectedEmail ? (
          <>
            <header className="viewer-header">
              <div className="viewer-header-controls">
                <Button 
                  variant="ghost" 
                  icon={ArrowLeft} 
                  onClick={() => onSelectEmail(null)}
                  className="nav-action-btn mobile-back-nav"
                >
                  <span className="mobile-text">VOLVER</span>
                </Button>

                <div className="qa-badge-container">
                  {hasVars ? (
                    <div className="qa-badge fail">
                      <ShieldAlert size={16} />
                      <span>QA FAIL: UNREPLACED VARS</span>
                    </div>
                  ) : (
                    <div className="qa-badge pass">
                      <ShieldCheck size={16} />
                      <span>QA PASS: NO VARS FOUND</span>
                    </div>
                  )}
                </div>

                <Button 
                  variant="ghost" 
                  icon={Maximize} 
                  onClick={() => window.open(`/view/${selectedEmail.id}`, '_blank')}
                  className="nav-action-btn fullscreen-action-btn"
                >
                  <span className="desktop-text">ABRIR FULLSCREEN</span>
                  <span className="mobile-text">FULLSCREEN</span>
                </Button>
              </div>

              <h1 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {selectedEmail.subject || '(Sin Asunto)'}
              </h1>
              
              <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div className="meta-row">
                  <span className="meta-label">DE:</span>
                  <span className="meta-value">{cleanAddress(selectedEmail.from_address)}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">PARA:</span>
                  <span className="meta-value">{selectedEmail.to_address}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">FECHA:</span>
                  <span className="meta-value">{new Date(selectedEmail.created_at).toLocaleString()}</span>
                </div>

                {fullEmailData?.attachments && fullEmailData.attachments.length > 0 && (
                  <div className="attachments-list">
                    {fullEmailData.attachments.map((att: any) => (
                      <a 
                        key={att.id}
                        href={`/api/attachments/${att.id}`}
                        download={att.filename}
                        className="attachment-item"
                      >
                        <Paperclip size={14} />
                        <span className="att-name">{att.filename}</span>
                        <span className="att-size">({(att.size / 1024).toFixed(1)} KB)</span>
                        <Download size={14} className="att-dl-icon" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="tabs-capsule-container">
                <div className="tabs-capsule">
                  <button 
                    className={`capsule-btn ${viewMode === 'html' ? 'active' : ''}`}
                    onClick={() => setViewMode('html')}
                  >
                    <Eye size={16} />
                    <span className="btn-text">HTML</span>
                  </button>
                  <button 
                    className={`capsule-btn ${viewMode === 'text' ? 'active' : ''}`}
                    onClick={() => setViewMode('text')}
                  >
                    <FileText size={16} />
                    <span className="btn-text">TEXTO</span>
                  </button>
                  <button 
                    className={`capsule-btn ${viewMode === 'vars' ? 'active' : ''}`}
                    onClick={() => setViewMode('vars')}
                  >
                    <Code2 size={16} />
                    <span className="btn-text">VARIABLES</span>
                  </button>
                  <button 
                    className={`capsule-btn ${viewMode === 'headers' ? 'active' : ''}`}
                    onClick={() => setViewMode('headers')}
                  >
                    <Shield size={16} />
                    <span className="btn-text">HEADERS</span>
                  </button>
                </div>
              </div>
            </header>

            <div className="content-area" style={{ background: '#0a0a0c', flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, padding: '0 20px 20px 20px' }}>
              <div className={`viewer-container ${fullWidth ? '' : 'mobile-view'}`} style={{ 
                margin: fullWidth ? '0' : '0 auto',
                maxWidth: fullWidth ? '100%' : '450px',
                width: '100%',
                flex: 1,
                background: realColors ? '#fff' : '#0d0d0f',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px'
              }}>
                {viewMode === 'html' ? (
                  <iframe
                    srcDoc={getIframeSrcDoc()}
                    style={{ width: '100%', flex: 1, border: 'none' }}
                    title="Contenido del Correo"
                  />
                ) : viewMode === 'vars' ? (
                  <div style={{ padding: '40px', color: '#fff', overflowY: 'auto', flex: 1 }}>
                    <h3 style={{ marginBottom: '24px', fontSize: '1.2rem', color: 'var(--accent)' }}>Variables detectadas</h3>
                    {vars.length > 0 ? (
                      <div style={{ display: 'grid', gap: '12px' }}>
                        {vars.map(v => (
                          <div key={v} style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <code style={{ color: 'var(--accent)', fontWeight: 700 }}>{`{{${v}}}`}</code>
                            <span style={{ fontSize: '0.8rem', color: 'var(--danger)' }}>UNREPLACED</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ color: 'var(--text-dark)' }}>No se detectaron variables dinámicas.</div>
                    )}
                  </div>
                ) : (
                  <pre style={{ 
                    padding: '30px', 
                    color: realColors ? '#333' : '#e1e1e6', 
                    whiteSpace: 'pre-wrap', 
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    flex: 1,
                    overflowY: 'auto'
                  }}>
                    {viewMode === 'text' ? selectedEmail.text_content : 
                     selectedEmail.headers || 'No headers available'}
                  </pre>
                )}
              </div>
            </div>

            <footer className="viewer-footer-actions">
               <Button 
                 variant="ghost" 
                 icon={Database} 
                 onClick={() => copyToClipboard(JSON.stringify(fullEmailData || selectedEmail, null, 2), 'json')}
                 className="footer-btn"
               >
                 <span className="btn-text">Copiar JSON</span>
               </Button>
               <Button 
                 variant="ghost" 
                 icon={fullWidth ? Smartphone : Monitor} 
                 onClick={() => setFullWidth(!fullWidth)}
                 className="footer-btn desktop-only"
               >
                 <span className="btn-text">{fullWidth ? 'Vista Móvil' : 'Vista Escritorio'}</span>
               </Button>
               <Button 
                 variant="ghost" 
                 icon={Palette} 
                 onClick={() => setRealColors(!realColors)}
                 className="footer-btn"
                 style={{ color: realColors ? 'var(--accent)' : 'inherit' }}
               >
                 <span className="btn-text">{realColors ? 'Ver Modo Oscuro' : 'Ver Colores Reales'}</span>
               </Button>
               <Button 
                 variant="ghost" 
                 icon={FileCode} 
                 onClick={() => copyToClipboard(selectedEmail.html_content, 'html')}
                 className="footer-btn"
               >
                 <span className="btn-text">Copiar HTML</span>
               </Button>
            </footer>
          </>
        ) : (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dark)' }}>
            <MailOpen size={64} style={{ marginBottom: '20px', opacity: 0.2 }} />
            <p>Selecciona un correo para ver su contenido</p>
          </div>
        )}
      </section>

      <style jsx>{`
        .viewer-header {
          padding: 30px 40px 10px 40px;
        }
        .meta-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .meta-label {
          color: #52525b;
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 1px;
          min-width: 60px;
        }
        .meta-value {
          color: #a1a1aa;
          font-size: 0.9rem;
        }

        .attachments-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 15px;
          padding: 12px;
          background: rgba(255,255,255,0.02);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .attachment-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          color: #e4e4e7;
          text-decoration: none;
          font-size: 0.75rem;
          transition: 0.2s;
        }
        .attachment-item:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-1px);
        }
        .att-name {
          font-weight: 600;
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .att-size {
          color: #71717a;
          font-size: 0.65rem;
        }
        .att-dl-icon {
          opacity: 0.4;
          margin-left: 4px;
        }
        .attachment-item:hover .att-dl-icon {
          opacity: 1;
          color: var(--accent);
        }
        .qa-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 900;
          letter-spacing: 0.5px;
          align-self: flex-start;
        }
        .qa-badge.fail {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        .qa-badge.pass {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }
        .viewer-footer-actions {
          padding: 20px 40px;
          background: #0a0a0c;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        :global(.footer-btn) {
          background: rgba(255,255,255,0.03) !important;
          border: 1px solid rgba(255,255,255,0.05) !important;
          padding: 10px 24px !important;
          font-size: 0.8rem !important;
          font-weight: 700 !important;
        }
        :global(.fullscreen-btn) {
          border: 1px solid var(--accent) !important;
          color: var(--accent) !important;
          background: rgba(99, 102, 241, 0.05) !important;
          font-size: 0.65rem !important;
          font-weight: 900 !important;
          letter-spacing: 1px !important;
          padding: 8px 16px !important;
          transition: all 0.3s ease !important;
          white-space: nowrap !important;
          height: fit-content !important;
        }
        :global(.fullscreen-btn:hover) {
          background: var(--accent) !important;
          color: #fff !important;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.3) !important;
        }

        /* Marca y Logout Estético */
        .brand.clickable {
          cursor: pointer;
          transition: 0.3s;
        }
        .brand.clickable:hover {
          transform: translateX(4px);
          filter: brightness(1.2);
        }
        .brand span span {
          color: #fff;
        }
        .brand-icon-animate {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        :global(.btn-refresh-aesthetic) {
          background: rgba(99, 102, 241, 0.05) !important;
          border: 1px solid rgba(99, 102, 241, 0.1) !important;
          color: var(--accent) !important;
          transition: all 0.3s ease !important;
        }
        :global(.btn-refresh-aesthetic:hover) {
          background: var(--accent) !important;
          color: #fff !important;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3) !important;
          border-color: var(--accent) !important;
        }

        :global(.btn-logout-aesthetic) {
          background: rgba(247, 90, 104, 0.05) !important;
          border: 1px solid rgba(247, 90, 104, 0.1) !important;
          color: var(--danger) !important;
          transition: all 0.3s ease !important;
        }
        :global(.btn-logout-aesthetic:hover) {
          background: var(--danger) !important;
          color: #fff !important;
          box-shadow: 0 4px 15px rgba(247, 90, 104, 0.3) !important;
          border-color: var(--danger) !important;
        }

        :global(.trash-btn-aesthetic) {
          padding: 6px !important;
          opacity: 0.3;
          transition: all 0.2s ease !important;
          color: var(--text-dark);
        }
        :global(.trash-btn-aesthetic:hover) {
          opacity: 1 !important;
          color: var(--danger) !important;
          background: rgba(247, 90, 104, 0.1) !important;
          transform: scale(1.1);
        }

        /* Estilos de la Cápsula */
        .tabs-capsule-container {
          margin-top: 25px;
          margin-bottom: 5px;
          display: flex;
          justify-content: center;
        }
        .tabs-capsule {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 4px;
          border-radius: 100px;
          display: flex;
          gap: 4px;
        }
        .capsule-btn {
          background: transparent;
          border: none;
          color: #71717a;
          height: 36px;
          padding: 0 20px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: 0.2s;
          line-height: 1;
        }
        .capsule-btn:hover {
          color: #fff;
        }
        .capsule-btn.active {
          background: var(--accent);
          color: #fff;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        :global(.mobile-back-nav) {
          display: none !important;
        }

        .viewer-header-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 20px;
        }
        .qa-badge-container {
          flex: 1;
        }
        :global(.nav-action-btn) {
          justify-content: center !important;
          font-weight: 800 !important;
          color: var(--accent) !important;
          border: 1px solid rgba(99, 102, 241, 0.2) !important;
          border-radius: 12px !important;
          background: rgba(99, 102, 241, 0.05) !important;
          padding: 8px 16px !important;
        }
        .mobile-text { display: none; }

        @media (max-width: 768px) {
          .viewer-header-controls {
            flex-wrap: wrap;
            gap: 10px;
          }
          .qa-badge-container {
            order: 2;
            flex-basis: 100%;
          }
          :global(.nav-action-btn) {
            order: 1;
            flex: 1;
          }
          .desktop-text { display: none; }
          .mobile-text { display: inline; }
          
          .qa-badge { width: 100%; justify-content: center; }
          
          :global(.mobile-back-nav) {
            display: flex !important;
          }
          .footer-btn, .capsule-btn {
            position: relative;
            min-width: 44px !important;
            width: 44px !important;
            height: 44px !important;
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            border-radius: 12px !important;
          }
          .tabs-capsule {
            gap: 5px;
            justify-content: center;
          }
          .capsule-btn::after { display: none !important; } /* Eliminar decoraciones extra */
          .btn-text {
            display: none !important;
            position: absolute;
            bottom: 55px; /* Aparece arriba del botón */
            left: 50%;
            transform: translateX(-50%);
            background: #1e1e22;
            color: #fff;
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 0.7rem;
            white-space: nowrap;
            border: 1px solid var(--border);
            box-shadow: 0 10px 20px rgba(0,0,0,0.4);
            z-index: 1000;
            pointer-events: none;
          }
          .footer-btn:hover .btn-text {
            display: block !important;
          }
          /* Pequeño triángulo indicador */
          .btn-text::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 6px solid transparent;
            border-top-color: #1e1e22;
          }
        }

        /* Scrollbars Dark Global */
        :global(body), :global(pre), :global(div) {
          scrollbar-width: thin;
          scrollbar-color: #3f3f46 transparent;
        }
        :global(*::-webkit-scrollbar) {
          width: 8px;
          height: 8px;
        }
        :global(*::-webkit-scrollbar-track) {
          background: transparent;
        }
        :global(*::-webkit-scrollbar-thumb) {
          background-color: #3f3f46;
          border-radius: 20px;
          border: 2px solid transparent;
        }
      `}</style>
    </main>
  );
}
