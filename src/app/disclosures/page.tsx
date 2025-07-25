export default function DisclosuresPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold mb-6">Platform Disclosures & Attributions</h1>
      <p className="mb-4">
        Supersal™ is powered by Saint Vision Group’s proprietary HACP™ architecture and utilizes multiple AI services:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>📎 GPT-4o API (by OpenAI) — for adaptive AI reasoning</li>
        <li>🧠 Azure Cognitive Search — for hybrid knowledge retrieval</li>
        <li>🗂 Supabase — data & session handling</li>
        <li>📞 Twilio — voice & SMS interaction via secure routes</li>
        <li>📑 Docs — pulled from verified company IP only</li>
      </ul>
      <p>
        All partner APIs are used with user consent and under strict privacy controls. Learn more in our{' '}
        <a href="/privacy" className="text-yellow-300 underline">
          Privacy Policy
        </a>
        .
      </p>
    </main>
  );
}
