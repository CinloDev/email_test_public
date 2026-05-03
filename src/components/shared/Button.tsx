'use client';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  loading?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon,
  loading,
  className = '',
  ...props 
}: ButtonProps) {
  
  // Mapeo de clases basado en variantes y tamaños
  const variants = {
    primary: 'btn-primary-large', // Usamos las clases que ya tenemos en globals.css
    secondary: 'btn-secondary',
    danger: 'icon-btn danger',
    ghost: 'icon-btn',
    icon: 'icon-btn'
  };

  const sizes = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-primary-large' // El tamaño de la home
  };

  // En el futuro, estas clases podrían moverse a un sistema más dinámico, 
  // pero por ahora usamos los selectores de globals.css para mantener la estabilidad visual.
  
  const combinedClassName = `${variants[variant]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {Icon && <Icon size={size === 'sm' ? 14 : 18} className={loading ? 'spinning' : ''} />}
      {children}
    </button>
  );
}
