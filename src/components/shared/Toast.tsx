'use client';
import { Mail, Bell } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ToastProps {
  title: string;
  body: string;
}

export default function Toast({ title, body }: ToastProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.max(0, prev - (100 / 40))); // 4 segundos = 4000ms
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="toast-container-v2 animate-slide-in">
      <div className="toast-glow"></div>
      <div className="toast-inner">
        <div className="toast-icon-v2">
          <Mail size={20} />
          <div className="icon-pulse"></div>
        </div>
        <div className="toast-content-v2">
          <div className="toast-title-v2">{title}</div>
          <div className="toast-body-v2">{body}</div>
        </div>
      </div>
      <div className="toast-progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
