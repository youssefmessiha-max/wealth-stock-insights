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
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Head>
        <title>Wealth Stock Insights | Daily Micro-Cap Stock Research</title>
        <meta name="description" content="Daily curated stock picks based on deep research, helping you build long-term wealth through micro-cap investing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
      />

      <header className="bg-blue-900 text-white p-6 shadow-md">
        <h1 className="text-4xl font-bold text-center">Wealth Stock Insights</h1>
        <p className="text-center text-lg mt-2">Research-Driven Micro-Cap Investing for Maximum Profit</p>
      </header>

      <main className="p-6 max-w-6xl mx-auto space-y-8">
        <section className="bg-white border rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800">Top Picks for August 13, 2025</h2>

          <div className="mt-4">
            <h3 className="text-xl font-bold">1. Triple Flag Precious Metals (TFPM)</h3>
            <p>Surged ~77% recently. Strong earnings (EPS up 118%). In gold bull zone.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">2. Willdan Group (WLDN)</h3>
            <p>YTD gain of 211%. Positioned for AI-related infrastructure expansion.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">3. Rate-Sensitive Small Caps</h3>
            <p>Expected to rebound as Fed rate cuts approach. Includes housing & consumer goods plays.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">4. Healthcare & Financials</h3>
            <p>Strong earnings from McKesson, Cardinal Health, and major banks like Capital One.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">5. Growth vs Value Mix</h3>
            <p>Highlighted stocks: Netflix, Nvidia, Chevron. Balanced long-term anchors.</p>
          </div>
        </section>

        <section className="bg-gray-100 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-2">Subscribe for Daily Picks</h2>
          <p className="mb-4 text-gray-600">
            Join our newsletter and get the latest stock insights to your inbox.
          </p>
          <div className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded w-64"
            />
            <button onClick={handleSubscribe} className="bg-blue-700 text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Archives</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Aug 12, 2025 – Gold Miners & Crypto Micro-Caps</li>
            <li>Aug 11, 2025 – Biotech Picks for Q3 Earnings</li>
            <li>Aug 10, 2025 – AI Infrastructure Micro-Caps</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Tools</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><a href="#" className="text-blue-700 underline">Micro-Cap Stock Screener (Coming Soon)</a></li>
            <li><a href="#" className="text-blue-700 underline">Catalyst Calendar</a></li>
            <li><a href="#" className="text-blue-700 underline">Insider Trading Alerts</a></li>
          </ul>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 pt-8 pb-6 border-t mt-8">
        <div className="flex justify-center gap-4 pb-4">
          <a href="#" className="text-blue-700">Twitter</a>
          <a href="#" className="text-blue-700">LinkedIn</a>
          <a href="#" className="text-blue-700">Email</a>
        </div>
        © 2025 Wealth Stock Insights. All rights reserved.
      </footer>
    </div>
  );
}
