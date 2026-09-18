/**
 * Centralized Environment & URL Configuration
 * All URLs, endpoints, and external contacts are driven by environment variables (VITE_*)
 * with intelligent fallbacks to runtime window.location.
 * NO hard-coded domains or contact links anywhere in the codebase.
 */

export const getSiteUrl = (): string => {
  const envUrl = import.meta.env.VITE_SITE_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl.trim() !== '') {
    return envUrl.trim().replace(/\/$/, '');
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return '';
};

export const getWebAppUrl = (): string => {
  const envUrl = import.meta.env.VITE_WEB_APP_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl.trim() !== '') {
    return envUrl.trim().replace(/\/$/, '');
  }
  // Default to relative /app or fallback to current origin
  return '/app';
};

export const getWhatsAppNumber = (): string => {
  const num = import.meta.env.VITE_WHATSAPP_NUMBER;
  if (num && typeof num === 'string') {
    // Strip non-digits
    return num.replace(/\D/g, '');
  }
  return '';
};

export const getSupportEmail = (): string => {
  const email = import.meta.env.VITE_SUPPORT_EMAIL;
  if (email && typeof email === 'string' && email.trim() !== '') {
    return email.trim();
  }
  return 'support@example.com';
};

export const getBusinessName = (): string => {
  return import.meta.env.VITE_BUSINESS_NAME || 'StockPadi';
};

export const getSocialLinks = () => {
  return {
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || '',
    tiktok: import.meta.env.VITE_SOCIAL_TIKTOK || '',
    facebook: import.meta.env.VITE_SOCIAL_FACEBOOK || '',
    twitter: import.meta.env.VITE_SOCIAL_TWITTER || '',
  };
};

/**
 * Builds a dynamic WhatsApp or Email contact URL based on environment availability
 */
export const buildContactLink = (message: string, subject = 'StockPadi Inquiry'): string => {
  const phone = getWhatsAppNumber();
  if (phone) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
  return `mailto:${getSupportEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
};
