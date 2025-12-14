import { GoogleGenAI } from '@google/genai';

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};

  return JSON.parse(raw);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Missing GEMINI_API_KEY' }));
    return;
  }

  try {
    const body = await readJsonBody(req);
    const {
      messages = [],
      userMessage,
      systemInstruction,
      model = process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite',
    } = body || {};

    if (!userMessage || typeof userMessage !== 'string') {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Missing userMessage' }));
      return;
    }

    const safeMessages = Array.isArray(messages) ? messages : [];
    const contents = [
      ...safeMessages
        .filter(
          (m) =>
            m &&
            typeof m.text === 'string' &&
            (m.role === 'user' || m.role === 'model')
        )
        .map((m) => ({
          role: m.role,
          parts: [{ text: m.text }],
        })),
      { role: 'user', parts: [{ text: userMessage }] },
    ];

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model,
      contents,
      config: systemInstruction ? { systemInstruction } : undefined,
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: response.text ?? '' }));
  } catch (error) {
    console.error('Gemini API error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Gemini request failed' }));
  }
}
