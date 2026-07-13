const TELEGRAM_API = 'https://api.telegram.org';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatBookingMessage(payload) {
  const lines = [
    '🔧 <b>New AllSet Appliance request</b>',
    '',
    `<b>Name:</b> ${escapeHtml(payload.name)}`,
    `<b>Phone:</b> ${escapeHtml(payload.phone)}`,
  ];

  if (payload.email) lines.push(`<b>Email:</b> ${escapeHtml(payload.email)}`);
  if (payload.address) lines.push(`<b>Address:</b> ${escapeHtml(payload.address)}`);
  if (payload.city) lines.push(`<b>City:</b> ${escapeHtml(payload.city)}`);
  if (payload.zip) lines.push(`<b>ZIP:</b> ${escapeHtml(payload.zip)}`);
  if (payload.applianceType) lines.push(`<b>Appliance:</b> ${escapeHtml(payload.applianceType)}`);
  if (payload.brand) lines.push(`<b>Brand:</b> ${escapeHtml(payload.brand)}`);
  if (payload.preferredDate) lines.push(`<b>Preferred date:</b> ${escapeHtml(payload.preferredDate)}`);
  if (payload.preferredTime) lines.push(`<b>Preferred time:</b> ${escapeHtml(payload.preferredTime)}`);
  if (payload.problem) {
    lines.push('', `<b>Problem:</b> ${escapeHtml(payload.problem)}`);
  }

  return lines.join('\n');
}

export async function sendBookingToTelegram(payload, env = process.env) {
  const token = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
  }

  const response = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatBookingMessage(payload),
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  const data = await response.json();
  if (!response.ok || !data.ok) {
    throw new Error(data.description || 'Telegram send failed');
  }

  return data;
}

export function normalizeBookingPayload(body = {}) {
  return {
    name: String(body.name ?? '').trim(),
    phone: String(body.phone ?? '').trim(),
    email: String(body.email ?? '').trim(),
    address: String(body.address ?? '').trim(),
    city: String(body.city ?? '').trim(),
    zip: String(body.zip ?? '').trim(),
    applianceType: String(body.applianceType ?? '').trim(),
    brand: String(body.brand ?? '').trim(),
    preferredDate: String(body.preferredDate ?? '').trim(),
    preferredTime: String(body.preferredTime ?? '').trim(),
    problem: String(body.problem ?? '').trim(),
    honeypot: String(body.honeypot ?? '').trim(),
  };
}
