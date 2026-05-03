import emailjs from '@emailjs/browser'

export type ContactTemplateParams = {
  from_name: string
  from_email: string
  phone: string
  message: string
}

export function getEmailJsConfig():
  | { ready: true; publicKey: string; serviceId: string; templateId: string }
  | { ready: false } {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim()
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim()
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim()
  if (!publicKey || !serviceId || !templateId) return { ready: false }
  return { ready: true, publicKey, serviceId, templateId }
}

const emailLike = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(input: {
  name: string
  email: string
  phone: string
  message: string
}): string | null {
  const name = input.name.trim()
  const email = input.email.trim()
  const phone = input.phone.trim()
  const message = input.message.trim()
  if (!name) return 'Please enter your name.'
  if (!email) return 'Please enter your email.'
  if (!emailLike.test(email)) return 'Please enter a valid email address.'
  if (!phone) return 'Please enter your phone number.'
  if (!message) return 'Please enter a message.'
  return null
}

export function toTemplateParams(input: {
  name: string
  email: string
  phone: string
  message: string
}): ContactTemplateParams {
  return {
    from_name: input.name.trim(),
    from_email: input.email.trim(),
    phone: input.phone.trim(),
    message: input.message.trim(),
  }
}

export async function sendContactEmail(
  params: ContactTemplateParams,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const cfg = getEmailJsConfig()
  if (!cfg.ready) {
    return {
      ok: false,
      message:
        'Email is not configured. Add VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID to .env.local and restart the dev server.',
    }
  }
  try {
    await emailjs.send(cfg.serviceId, cfg.templateId, params, { publicKey: cfg.publicKey })
    return { ok: true }
  } catch (err: unknown) {
    const text =
      err && typeof err === 'object' && 'text' in err && typeof (err as { text: unknown }).text === 'string'
        ? (err as { text: string }).text
        : 'Something went wrong. Please try again or call the clinic.'
    return { ok: false, message: text }
  }
}
