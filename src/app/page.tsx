'use client';

import { useState, useEffect, useCallback } from 'react';
import HomeView from '@/components/home/HomeView';
import DashboardView from '@/components/dashboard/DashboardView';
import Modal from '@/components/shared/Modal';
import Toast from '@/components/shared/Toast';

export default function Home() {
  // --- Estados Globales ---
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'dashboard'
  const [emails, setEmails] = useState<any[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState({ smtpPort: '1025', maxEmails: 500, hasPassword: false });
  const [copied, setCopied] = useState<string | null>(null);
  const [toast, setToast] = useState<{ title: string; body: string } | null>(null);
  const [modal, setModal] = useState<{ 
    title: string; 
    message: string; 
    onConfirm: () => void;
    onClose?: () => void;
    confirmText?: string;
    cancelText?: string;
    showCancel?: boolean;
  } | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  // --- Carga Inicial ---
  useEffect(() => {
    fetchEmails();
  }, []);

  // --- Fetch de Correos (Mocked) ---
  const fetchEmails = useCallback(async (triggerAnimation = false) => {
    setLoading(true);
    if (triggerAnimation) setRefreshing(true);
    try {
      const url = searchTerm ? `/api/emails?q=${searchTerm}` : '/api/emails';
      const res = await fetch(url);
      const data = await res.json();
      setEmails(data);
    } catch (err) {
      console.error('Error fetching emails:', err);
    } finally {
      setLoading(false);
      if (triggerAnimation) {
        setTimeout(() => setRefreshing(false), 500);
      } else {
        setRefreshing(false);
      }
    }
  }, [searchTerm]);

  // Refrescar cuando cambia la búsqueda
  useEffect(() => {
    fetchEmails();
  }, [searchTerm, fetchEmails]);

  // --- Acciones ---
  const deleteEmail = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setModal({
      title: 'Eliminar Correo (Demo)',
      message: 'Esta es una versión de demostración. ¿Quieres quitar este correo de la vista?',
      showCancel: true,
      onConfirm: () => {
        setEmails(emails.filter((em: any) => em.id !== id));
        if (selectedEmail?.id === id) setSelectedEmail(null);
        setModal(null);
        setToast({ title: 'Correo removido', body: 'El correo ha sido eliminado de la sesión actual.' });
        setTimeout(() => setToast(null), 3000);
      },
      onClose: () => setModal(null)
    });
  };

  const clearAll = () => {
    setModal({
      title: 'Vaciar Bandeja (Demo)',
      message: '¿Quieres limpiar la bandeja de entrada para esta sesión?',
      showCancel: true,
      onConfirm: () => {
        setEmails([]);
        setSelectedEmail(null);
        setModal(null);
        setToast({ title: 'Bandeja vacía', body: 'Se han removido todos los correos.' });
        setTimeout(() => setToast(null), 3000);
      },
      onClose: () => setModal(null)
    });
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleLogout = () => {
    setModal({
      title: 'Cerrar Sesión (Demo)',
      message: 'En esta demo pública no hay autenticación real. ¿Quieres volver a la Home?',
      showCancel: true,
      confirmText: 'Ir a Home',
      onConfirm: () => {
        setCurrentView('home');
        setModal(null);
      },
      onClose: () => setModal(null)
    });
  };

  return (
    <>
      {currentView === 'home' ? (
        <HomeView 
          config={config} 
          emailsCount={emails.length} 
          onOpenDashboard={() => setCurrentView('dashboard')} 
        />
      ) : (
        <DashboardView 
          emails={emails}
          selectedEmail={selectedEmail}
          onSelectEmail={setSelectedEmail}
          onRefresh={() => fetchEmails(true)}
          onDelete={deleteEmail}
          onClearAll={clearAll}
          onLogout={handleLogout}
          searchQuery={searchTerm}
          onSearchChange={setSearchTerm}
          copyToClipboard={copyToClipboard}
          copied={copied}
          config={config}
          isRefreshing={refreshing}
          onGoHome={() => setCurrentView('home')}
        />
      )}

      {/* Componentes Globales */}
      {toast && <Toast title={toast.title} body={toast.body} />}
      {modal && <Modal {...modal} onClose={() => setModal(null)} />}
    </>
  );
}
