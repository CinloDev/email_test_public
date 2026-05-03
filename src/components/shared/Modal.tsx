'use client';

interface ModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onClose?: () => void;
  confirmText?: string;
  cancelText?: string;
  showCancel?: boolean; // Nueva propiedad explícita
}

export default function Modal({ 
  title, 
  message, 
  onConfirm, 
  onClose, 
  confirmText = 'Confirmar', 
  cancelText = 'Cancelar',
  showCancel = false // Por defecto NO se muestra
}: ModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          {onClose && <button className="close-x" onClick={onClose}>×</button>}
        </div>
        <p className="modal-body">{message}</p>
        <div className="modal-footer">
          {(showCancel && onClose) && (
            <button className="btn-cancel" onClick={onClose}>{cancelText}</button>
          )}
          <button className="btn-confirm" onClick={onConfirm}>{confirmText}</button>
        </div>
      </div>
    </div>
  );
}
