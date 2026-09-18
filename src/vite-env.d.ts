/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_WEB_APP_URL?: string;
  readonly VITE_BUSINESS_NAME?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_SUPPORT_EMAIL?: string;
  readonly VITE_SOCIAL_INSTAGRAM?: string;
  readonly VITE_SOCIAL_TIKTOK?: string;
  readonly VITE_SOCIAL_FACEBOOK?: string;
  readonly VITE_SOCIAL_TWITTER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
