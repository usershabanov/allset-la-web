import { normalizeBookingPayload, sendBookingToTelegram } from '../server/telegram.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const payload = normalizeBookingPayload(req.body);

    if (payload.honeypot) {
      res.status(200).json({ ok: true });
      return;
    }

    if (!payload.name || !payload.phone || !payload.problem) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    await sendBookingToTelegram(payload);
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Booking submit failed:', error);
    res.status(500).json({ error: 'Failed to send request' });
  }
}
