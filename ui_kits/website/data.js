// Content mirrored from src/data/site.ts
window.SG = {
  brand: { name: 'Summergill', whatsappNumber: '447305517515', whatsappDisplay: '07305 517 515', parentCompany: 'Rippers Golf Ltd', basedIn: 'UK based' },
  wa: (m) => `https://wa.me/447305517515?text=${encodeURIComponent(m)}`,
  defaultEnquiry: "Hi Summergill — I'd like to talk about a website for my business.",
  promo: { enabled: true, slotsTotal: 5, slotsLeft: 5, reason: 'Every site is hand-built — there are two of us and no production line. So we open a handful of build slots at a time and price them to fill quickly. This round: five.' },
  pricing: {
    standard: { build: '£850', buildNote: 'one-off build', monthly: '£39', annual: 'or £390/yr — two months free' },
    promo: { build: '£495', buildNote: 'one-off build', monthly: '£29', annual: 'or £290/yr — two months free' },
    included: ['Hand-built design — no templates, no page builders', 'Mobile-first and fast on every screen', 'WhatsApp-first enquiry tools that turn visits into messages', 'Copy written for you from your business info', 'Hosting, SSL and uptime monitoring', 'Your domain name, registered to you, renewals covered', 'Small content changes included every month', 'SEO foundations + Google Business Profile help', 'Live within two weeks of our first chat'],
  },
  problems: [
    { title: 'Invisible on Google', body: 'When someone local searches for what you do and you’re not there, the job goes to whoever is. Every week, quietly, to a competitor.' },
    { title: 'A site that ages you', body: 'Stanford’s web credibility research found ~75% of people judge a business by its website design. A 2014 relic doesn’t say “established” — it says “closed”.' },
    { title: 'Visitors with no next step', body: 'Most small-business sites bury the phone number and hope. Ours put a one-tap WhatsApp message in front of every visitor, on every screen.' },
  ],
  guarantee: [
    { icon: 'shield', title: 'Your domain, your content. Always.', body: 'The domain is registered to you, not us. Nothing about your business is ever held hostage.' },
    { icon: 'pencil', title: 'Flat monthly. No surprise invoices.', body: 'Small changes are included in the plan. Bigger jobs get a fixed quote before we lift a finger — never an hourly bill you didn’t see coming.' },
    { icon: 'arrow', title: 'Leave with everything.', body: 'After the first 12 months you can walk away any time, and we hand over the full site files and your domain. No exit fees, no fuss.' },
    { icon: 'spark', title: 'Quality is non-negotiable.', body: 'Every site is built by hand to the same standard — whatever the price. If it isn’t good enough to go in our portfolio, it doesn’t ship.' },
  ],
  process: [
    { step: '1', title: 'Chat', body: 'WhatsApp us about your business. We’ll tell you straight what a site can and can’t do for you — and exactly what it costs.' },
    { step: '2', title: 'Build', body: 'We design and build it by hand, write the copy from your business info, and show you everything before launch. Live within two weeks.' },
    { step: '3', title: 'Grow', body: 'We host it, watch it, and keep it fresh month to month. You get on with the day job while the site brings the work in.' },
  ],
  proof: [
    { id: 'sd', name: 'Simon Dyson Performance Academy', blurb: 'Booking-focused coaching site for a 6× DP World Tour winner — built to turn searches into lessons at Mottram Hall.', tags: ['Sports & coaching', 'Booking-led', 'simondyson.com'] },
    { id: 'gcl', name: 'Golf Coach Launch', blurb: 'Brand and conversion site for a coaching growth system — positioning, case study and call-booking in one page.', tags: ['B2B services', 'Lead generation'] },
  ],
  faqs: [
    { q: 'Do I actually own my domain?', a: 'Yes — it’s registered to you from day one. We manage and renew it as part of your plan, but it’s yours. Most agencies register it to themselves; we think that’s wrong.' },
    { q: 'What does the pay monthly plan cover?', a: 'Hosting, SSL, uptime monitoring, your domain renewals, and small content changes each month — new prices, photos, opening hours, that sort of thing. You message us, it gets done.' },
    { q: 'What if I want to leave?', a: 'After the first 12 months, leave any time with 30 days’ notice. You get the complete site files and your domain handed over. No exit fees.' },
    { q: 'How fast will my site be live?', a: 'Two weeks from our first proper chat, usually quicker. You see and approve everything before it goes live.' },
    { q: 'Why are you cheaper than agencies?', a: 'There are two of us, no office and no account managers — and we build on modern foundations that don’t need constant patching. The saving is structural, not a quality cut.' },
    { q: 'My business is a bit different — can you handle it?', a: 'Probably. Bookings, menus, galleries, quote tools — message us what you do and we’ll tell you honestly whether we’re the right fit.' },
  ],
  enquiry: {
    businessTypes: ['Trades & services', 'Shop or salon', 'Food & drink', 'Sports & coaching', 'Something else'],
    siteStatus: ['No website yet', 'Outdated site', 'Site exists, brings in nothing'],
  },
};
