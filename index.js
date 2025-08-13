
import { useState } from "react";
import Head from "next/head";
import Script from "next/script";

export default function WealthStockInsights() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-900 font-sans">
      <Head>
        <title>Wealth Stock Insights | Daily Micro-Cap Stock Research</title>
        <meta name="description" content="Daily curated stock picks based on deep research, helping you build long-term wealth through micro-cap investing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5906636942780804"
      />

      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-10 shadow-md">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Wealth Stock Insights</h1>
          <p className="text-lg mt-3">Actionable Intelligence for Smart Micro-Cap Investors</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">📈 Top Picks for August 13, 2025</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800">1. Triple Flag Precious Metals (TFPM)</h3>
              <p>Surged ~77% recently. Strong earnings (EPS up 118%). In gold bull zone.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">2. Willdan Group (WLDN)</h3>
              <p>YTD gain of 211%. Positioned for AI-related infrastructure expansion.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">3. Rate-Sensitive Small Caps</h3>
              <p>Expected to rebound as Fed rate cuts approach. Includes housing & consumer goods plays.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">4. Healthcare & Financials</h3>
              <p>Strong earnings from McKesson, Cardinal Health, and major banks like Capital One.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">5. Growth vs Value Mix</h3>
              <p>Highlighted stocks: Netflix, Nvidia, Chevron. Balanced long-term anchors.</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 border border-blue-200 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">📬 Subscribe for Daily Picks</h2>
          <p className="text-gray-600 mb-4">Get fresh stock insights in your inbox every morning.</p>
          <div className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-2 rounded w-64"
            />
            <button onClick={handleSubscribe} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
              Subscribe
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">🗂️ Archives</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Aug 12, 2025 – Gold Miners & Crypto Micro-Caps</li>
            <li>Aug 11, 2025 – Biotech Picks for Q3 Earnings</li>
            <li>Aug 10, 2025 – AI Infrastructure Micro-Caps</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">🛠️ Tools</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><a href="#" className="text-blue-700 underline">Micro-Cap Stock Screener (Coming Soon)</a></li>
            <li><a href="#" className="text-blue-700 underline">Catalyst Calendar</a></li>
            <li><a href="#" className="text-blue-700 underline">Insider Trading Alerts</a></li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-100 text-center text-sm text-gray-500 pt-10 pb-6 border-t">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="text-blue-700 hover:underline">Twitter</a>
          <a href="#" className="text-blue-700 hover:underline">LinkedIn</a>
          <a href="#" className="text-blue-700 hover:underline">Email</a>
        </div>
        © 2025 Wealth Stock Insights. All rights reserved.
      </footer>
    </div>
  );
}
