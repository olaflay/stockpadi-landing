import React from 'react';

interface MobileFloatingBarProps {
  onStartFree: () => void;
  visible: boolean;
}

export const MobileFloatingBar: React.FC<MobileFloatingBarProps> = ({ onStartFree, visible }) => {
  if (!visible) return null;

  return (
    <aside className="mobile-conversion-bar" aria-label="Quick registration bar">
      <span>Record your first sale today.</span>
      <button type="button" className="mobile-conversion-btn" onClick={onStartFree}>
        <span>Start free</span>
      </button>
    </aside>
  );
};
