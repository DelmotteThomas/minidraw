import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './atoms.module.scss';

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isActive?: boolean;
};

export function AppButton({
  children,
  isActive = false,
  className = '',
  ...props
}: AppButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.appButton} ${isActive ? styles.active : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}