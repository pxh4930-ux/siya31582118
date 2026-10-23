const digits = (value: string) => value.replace(/\D/g, "");

export const telHref = (phone: string) => `tel:${digits(phone)}`;
export const smsHref = (phone: string) => `sms:${digits(phone)}`;
export const mailHref = (email: string) => `mailto:${email}`;
