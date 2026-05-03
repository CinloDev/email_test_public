'use client';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  rightElement?: React.ReactNode;
}

export default function Input({ 
  icon: Icon, 
  rightElement, 
  className = '', 
  ...props 
}: InputProps) {
  return (
    <div className="input-wrapper-shared">
      {Icon && <Icon size={16} className="input-icon-shared" />}
      <input 
        className={`input-base-shared ${Icon ? 'with-icon' : ''} ${className}`} 
        {...props} 
      />
      {rightElement && <div className="input-right-shared">{rightElement}</div>}
    </div>
  );
}
