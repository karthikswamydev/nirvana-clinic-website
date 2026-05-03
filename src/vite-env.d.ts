/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Canonical site origin, no trailing slash (e.g. https://nirvanaintegratedclinic.com). */
  readonly VITE_SITE_URL?: string
  /** EmailJS public key (Account → API keys). Set in `.env.local` for local dev. */
  readonly VITE_EMAILJS_PUBLIC_KEY?: string
  /** EmailJS email service ID. */
  readonly VITE_EMAILJS_SERVICE_ID?: string
  /** EmailJS template ID (variables: from_name, from_email, phone, message). */
  readonly VITE_EMAILJS_TEMPLATE_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
