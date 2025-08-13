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
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>Wealth Stock Insights | Investment News & Research</title>
        <meta name="description" content="Premium thought leadership and curated micro-cap stock research. Modeled after institutional-grade investor platforms." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5906636942780804"
      />

      <header className="bg-gray-900 text-white py-10 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Wealth Stock Insights</h1>
          <p className="mt-2 text-lg md:text-xl text-gray-300">Curated micro-cap strategy & market analysis for modern investors</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Top Insights – August 13, 2025</h2>
            <ul className="space-y-4 text-gray-800">
              <li>
                <h3 className="font-bold">1. Triple Flag Precious Metals (TFPM)</h3>
                <p>EPS up 118%. Entering new gold breakout zone.</p>
              </li>
              <li>
                <h3 className="font-bold">2. Willdan Group (WLDN)</h3>
                <p>Up 211% YTD. AI + infrastructure catalyst alignment.</p>
              </li>
              <li>
                <h3 className="font-bold">3. Small Cap Bounce</h3>
                <p>Macro shift expected post-Fed rate decisions.</p>
              </li>
              <li>
                <h3 className="font-bold">4. Healthcare + Financials</h3>
                <p>McKesson, Capital One outperforming expectations.</p>
              </li>
              <li>
                <h3 className="font-bold">5. Growth vs Value Core Picks</h3>
                <p>Netflix, Nvidia, Chevron as cross-sector anchors.</p>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">Subscribe for Daily Briefings</h2>
            <p className="mb-4 text-gray-600">Join investors receiving top insights each morning.</p>
            <div className="flex flex-col md:flex-row justify-center gap-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded w-full md:w-64"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Research Archives</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="border-l-4 border-blue-600 pl-4">Aug 12 – Crypto crossover: 180 Life & Ethereum reserves</li>
            <li className="border-l-4 border-blue-600 pl-4">Aug 11 – Q3 Biotech earnings leaders</li>
            <li className="border-l-4 border-blue-600 pl-4">Aug 10 – Infrastructure micro-caps with AI exposure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Analyst Tools & Resources</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-blue-800">
            <li><a href="#" className="underline">Stock Screener (Coming Soon)</a></li>
            <li><a href="#" className="underline">Catalyst Calendar</a></li>
            <li><a href="#" className="underline">Earnings Season Heatmap</a></li>
            <li><a href="#" className="underline">Insider Trading Dashboard</a></li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-900 text-white text-center text-sm pt-8 pb-6">
        <div className="flex justify-center gap-6 mb-4 text-blue-300">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        © 2025 Wealth Stock Insights. Thought leadership built for modern markets.
      </footer>
    </div>
  );
}

