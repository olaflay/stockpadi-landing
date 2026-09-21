/**
 * Centralized Environment & URL Configuration
 * All URLs, endpoints, and external contacts are driven by environment variables (VITE_*)
 * with intelligent fallbacks to runtime window.location.
 * NO hard-coded domains or contact links anywhere in the codebase.
 */

const getEnvVar = (key: string): string => {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
      return String(import.meta.env[key]);
    }
  } catch {
    // ignore
  }
  try {
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
      return String(process.env[key]);
    }
  } catch {
    // ignore
  }
  return '';
};

export const getSiteUrl = (): string => {
  const envUrl = getEnvVar('VITE_SITE_URL');
  if (envUrl && envUrl.trim() !== '') {
    return envUrl.trim().replace(/\/$/, '');
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return '';
};

export const getWebAppUrl = (): string => {
  const envUrl = getEnvVar('VITE_WEB_APP_URL');
  if (envUrl && envUrl.trim() !== '') {
    return envUrl.trim().replace(/\/$/, '');
  }
  // Default to relative /app or fallback to current origin
  return '/app';
};

export const getWhatsAppNumber = (): string => {
  const num = getEnvVar('VITE_WHATSAPP_NUMBER');
  if (num) {
    // Strip non-digits
    return num.replace(/\D/g, '');
  }
  return '';
};

export const getSupportEmail = (): string => {
  const email = getEnvVar('VITE_SUPPORT_EMAIL');
  if (email && email.trim() !== '') {
    return email.trim();
  }
  return 'support@example.com';
};

export const getBusinessName = (): string => {
  return getEnvVar('VITE_BUSINESS_NAME') || 'OjaPadi';
};

export const getSocialLinks = () => {
  return {
    instagram: getEnvVar('VITE_SOCIAL_INSTAGRAM'),
    tiktok: getEnvVar('VITE_SOCIAL_TIKTOK'),
    facebook: getEnvVar('VITE_SOCIAL_FACEBOOK'),
    twitter: getEnvVar('VITE_SOCIAL_TWITTER'),
  };
};

/**
 * Builds a dynamic WhatsApp or Email contact URL based on environment availability
 */
export const buildContactLink = (message: string, subject = 'OjàPadi Inquiry'): string => {
  const phone = getWhatsAppNumber();
  if (phone) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
  return `mailto:${getSupportEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
};
