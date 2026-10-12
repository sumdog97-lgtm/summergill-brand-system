const { Button: HeroButton, Eyebrow: HeroEyebrow, StatRow } = window.SummergillDesignSystem_2a6cb4;

const SB_SOURCES = ['GOOGLE SEARCH', 'MAPS', 'INSTAGRAM BIO', 'WORD OF MOUTH'];
const SB_TRACES = ['M30 90 H105 V220 H188', 'M30 190 H130 V233 H188', 'M30 290 H130 V247 H188', 'M30 390 H105 V260 H188'];
const SB_Y = [90, 190, 290, 390];
const SB_MSGS = ['“Hi — are you free this week?”', '“Can I book you for Friday?”', '“Have you got a table for six?”', '“How much for a full rewire?”', '“Do you do same-day repairs?”'];

function Switchboard() {
  const ref = React.useRef(null);
  const [live, setLive] = React.useState({ src: -1, out: false, hub: false, phone: false, chip: false, msg: 0 });
  React.useEffect(() => {
    const svg = ref.current; if (!svg) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setLive((l) => ({ ...l, chip: true })); return; }
    let alive = true, last = -1, msg = 0;
    const pulse = svg.querySelector('[data-pulse]');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const travel = (path, dur) => new Promise((res) => {
      const len = path.getTotalLength(), t0 = performance.now(); pulse.setAttribute('opacity', '1');
      const step = (now) => { const t = Math.min((now - t0) / dur, 1); const p = path.getPointAtLength(t * len); pulse.setAttribute('cx', p.x); pulse.setAttribute('cy', p.y); if (t < 1 && alive) requestAnimationFrame(step); else { pulse.setAttribute('opacity', '0'); res(); } };
      requestAnimationFrame(step);
    });
    (async () => {
      await wait(800);
      while (alive) {
        let i = Math.floor(Math.random() * 4); if (i === last) i = (i + 1) % 4; last = i;
        setLive((l) => ({ ...l, src: i }));
        await travel(svg.querySelector(`[data-trace="${i}"]`), 850);
        setLive((l) => ({ ...l, src: -1, hub: true })); await wait(240);
        setLive((l) => ({ ...l, hub: false, out: true }));
        await travel(svg.querySelector('[data-trace="out"]'), 600);
        setLive((l) => ({ ...l, out: false, phone: true, chip: true, msg })); msg = (msg + 1) % SB_MSGS.length;
        await wait(2300);
        setLive((l) => ({ ...l, phone: false, chip: false }));
        await wait(900 + Math.random() * 1600);
      }
    })();
    return () => { alive = false; };
  }, []);
  const brand = 'var(--color-brand)';
  const lbl = { fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em' };
  return (
    <svg ref={ref} viewBox="0 0 440 480" style={{ display: 'block', width: '100%', height: 'auto' }} role="img" aria-label="Diagram: enquiries route through your website to your phone as WhatsApp messages">
      <defs><pattern id="sb-grid" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="1.5" height="1.5" fill="rgb(10 10 10 / .07)"></rect></pattern></defs>
      <rect x="0" y="24" width="440" height="412" fill="url(#sb-grid)"></rect>
      {SB_TRACES.map((d, i) => <path key={i} d={d} data-trace={i} fill="none" stroke={live.src === i ? brand : 'rgb(10 10 10 / .18)'} strokeWidth="1" style={{ transition: 'stroke .25s' }}></path>)}
      <path d="M252 240 H385" data-trace="out" fill="none" stroke={live.out ? brand : 'rgb(10 10 10 / .18)'} strokeWidth="1"></path>
      {SB_SOURCES.map((s, i) => (
        <g key={s}>
          <text x="20" y={SB_Y[i] - 16} style={lbl} fill={live.src === i ? brand : 'rgb(10 10 10 / .55)'}>{s}</text>
          <rect x="20.5" y={SB_Y[i] - 5.5} width="10" height="10" fill="#fff" stroke={live.src === i ? brand : 'rgb(10 10 10 / .45)'}></rect>
        </g>
      ))}
      <rect x="188" y="208" width="64" height="64" fill={brand} style={{ transformBox: 'fill-box', transformOrigin: 'center', transform: live.hub ? 'scale(1.08)' : 'none', transition: 'transform .22s' }}></rect>
      <text x="220" y="292" textAnchor="middle" style={lbl} fill="rgb(10 10 10 / .55)">YOUR WEBSITE</text>
      <g stroke={live.phone ? brand : 'rgb(10 10 10 / .6)'} strokeWidth="1" fill="none">
        <rect x="385.5" y="208.5" width="34" height="63" fill="#fff"></rect><line x1="394" y1="217.5" x2="411" y2="217.5"></line><rect x="400.5" y="260.5" width="4" height="4"></rect>
      </g>
      <text x="402" y="292" textAnchor="middle" style={lbl} fill="rgb(10 10 10 / .55)">YOU</text>
      <g style={{ opacity: live.chip ? 1 : 0, transform: live.chip ? 'none' : 'translateY(6px)', transition: 'opacity .3s, transform .3s' }}>
        <line x1="402" y1="180" x2="402" y2="204" stroke={brand} strokeDasharray="2 3"></line>
        <rect x="225" y="148" width="196" height="32" fill="#fff" stroke={brand}></rect>
        <text x="323" y="168" textAnchor="middle" style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5 }} fill="var(--color-ink)">{SB_MSGS[live.msg]}</text>
      </g>
      <circle r="3.5" data-pulse="" opacity="0" fill={brand}></circle>
      <text x="20" y="464" style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.14em' }} fill="rgb(10 10 10 / .4)">FIG. 01 — HOW A SUMMERGILL SITE WORKS</text>
    </svg>
  );
}

function Hero({ onNav }) {
  const { promo, pricing, wa, defaultEnquiry, brand } = window.SG;
  const active = promo.enabled && promo.slotsLeft > 0;
  const build = active ? pricing.promo.build : pricing.standard.build;
  return (
    <section id="top" className="sg-hero" style={{ background: 'var(--color-paper)' }}>
      <div className="sg-container">
        <div style={{ position: 'relative' }}>
          <div className="sg-xl" style={{ position: 'absolute', top: '50%', right: 0, width: 420, transform: 'translateY(-50%)' }} aria-hidden="true"><Switchboard /></div>
          <div style={{ maxWidth: 768 }}>
            <HeroEyebrow bracket style={{ marginBottom: 24 }}>Hand-built websites · UK based</HeroEyebrow>
            <h1 className="sg-h1" style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 0.98, letterSpacing: '-0.025em', color: 'var(--color-ink)' }}>
              Your business deserves<br /><span style={{ color: 'var(--color-brand)' }}>a proper website.</span>
            </h1>
            <p style={{ margin: '28px 0 0', maxWidth: 672, fontSize: 18, lineHeight: 1.625, color: 'rgb(10 10 10 / .7)' }}>
              No website? A site from 2014 that nobody can read on a phone? We build fast, hand-made websites for local businesses that turn searches into customers — live in two weeks, from {build}.
            </p>
            <div style={{ marginTop: 36, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
              <HeroButton icon="whatsapp" href={wa(defaultEnquiry)} target="_blank">WhatsApp us about yours</HeroButton>
              <HeroButton variant="outline" iconRight="arrow" href="#work" onClick={(e) => onNav(e, '#work')}>See our work</HeroButton>
            </div>
            <p style={{ margin: '24px 0 0', fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.625, color: 'rgb(10 10 10 / .5)' }}>
              {brand.whatsappDisplay} — message us what you do and we’ll reply with straight answers. WhatsApp first, calls whenever they’re useful.
            </p>
          </div>
        </div>
        <StatRow className="sg-stats" style={{ marginTop: 64 }} stats={[
          { value: '2 wks', label: 'from first chat to live' },
          { value: '100%', label: 'hand-built, no templates' },
          { value: build, label: active ? 'build price this round' : 'one-off build price' },
          { value: '0', label: 'surprise invoices, ever' },
        ]} />
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Switchboard });
