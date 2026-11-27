import React from 'react';
import { getRegistrationUrl } from '../config/env';

interface MobileFloatingBarProps {
  onStartFree: () => void;
  visible: boolean;
}

export const MobileFloatingBar: React.FC<MobileFloatingBarProps> = ({ onStartFree, visible }) => {
  if (!visible) return null;

  return (
    <aside className="mobile-conversion-bar" aria-label="Quick registration bar">
      <span className="mobile-conversion-text">Record your first sale today.</span>
      <a href={getRegistrationUrl()} className="mobile-conversion-btn" onClick={onStartFree}>
        Create account
      </a>
    </aside>
  );
};
