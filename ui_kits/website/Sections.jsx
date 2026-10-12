const { SectionHeader, GridPanel, GridCell, Tag: STag, PriceCard, CheckList, LaptopFrame, PhoneFrame, TabletFrame } = window.SummergillDesignSystem_2a6cb4;

function Section({ id, bg, children, narrow, py }) {
  return <section id={id} className={py || 'sg-sec'} style={{ background: bg }}><div className="sg-container" style={narrow ? { maxWidth: 896 } : null}>{children}</div></section>;
}

function Problem() {
  return (
    <Section bg="var(--color-surface)">
      <SectionHeader eyebrow="01 / The problem" title="Good businesses lose work to worse ones with better websites." lead="You’re brilliant at what you do. But online, nobody can tell — and that’s the only place new customers are looking." />
      <GridPanel columns={3} className="sg-grid3" style={{ marginTop: 48 }}>
        {window.SG.problems.map((p) => <GridCell key={p.title} title={p.title}>{p.body}</GridCell>)}
      </GridPanel>
    </Section>
  );
}

function Proof() {
  const img = (id, v) => `../../assets/proof/${id}-${v}.png`;
  return (
    <Section id="work" bg="var(--color-paper)">
      <SectionHeader eyebrow="02 / Our work" title="Built by hand. Sharp on every screen." lead="Every site shown exactly as it renders on desktop, tablet and phone — because that’s where your customers actually are." />
      <div style={{ marginTop: 64, display: 'flex', flexDirection: 'column', gap: 96 }}>
        {window.SG.proof.map((p, i) => (
          <article key={p.id} className={`sg-proof ${i % 2 ? 'sg-proof-rev' : ''}`}>
            <div style={{ position: 'relative', paddingRight: 40, paddingBottom: 48 }}>
              <LaptopFrame src={img(p.id, 'desktop')} alt={`${p.name} — desktop view on a laptop`} />
              <PhoneFrame src={img(p.id, 'mobile')} alt={`${p.name} — mobile view`} style={{ position: 'absolute', right: 0, bottom: 0, width: '23%', minWidth: 88 }} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, lineHeight: '32px' }}>{p.name}</h3>
              <p style={{ margin: '12px 0 0', fontSize: 18, lineHeight: 1.625, color: 'rgb(10 10 10 / .7)' }}>{p.blurb}</p>
              <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>{p.tags.map((t) => <STag key={t}>{t}</STag>)}</div>
              <TabletFrame className="sg-lg" src={img(p.id, 'tablet')} alt={`${p.name} — tablet view`} style={{ marginTop: 36, maxWidth: 320 }} />
            </div>
          </article>
        ))}
      </div>
      <p style={{ margin: '64px 0 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.025em', textTransform: 'uppercase', color: 'rgb(10 10 10 / .45)' }}>More builds joining the wall soon — including a few we can’t show off quite yet.</p>
    </Section>
  );
}

function Pricing() {
  const { promo, pricing, wa, defaultEnquiry } = window.SG;
  const active = promo.enabled && promo.slotsLeft > 0;
  const price = active ? pricing.promo : pricing.standard;
  const msg = active ? "Hi Summergill — I'd like to claim one of the five promotional build slots for my business." : defaultEnquiry;
  return (
    <Section id="pricing" bg="var(--color-ink)">
      <SectionHeader tone="dark" eyebrow="03 / Pricing" title="One clear price. Everything included." lead="No quotes that triple halfway through. A one-off build fee, then a simple pay monthly plan that covers everything your website needs to stay fast, live and yours." />
      <div className={active ? 'sg-price-grid' : ''} style={{ marginTop: 48, display: 'grid', gap: 24 }}>
        <PriceCard badge={active ? `Limited promotion — ${promo.slotsTotal} slots` : null} wasBuild={active ? pricing.standard.build : null} build={price.build} buildNote={price.buildNote} wasMonthly={active ? pricing.standard.monthly : null} monthly={price.monthly} annual={price.annual}
          note="Same site, same care, whatever you pay. The build fee is the only one-off cost — everything below is in the plan." cta={active ? 'Claim a build slot' : 'Get started'} ctaHref={wa(msg)} />
        {active && (
          <aside style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(255 255 255 / .15)', padding: 40, color: '#fff' }}>
            <div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, lineHeight: '28px' }}>Why {pricing.promo.build}?</h3>
              <p style={{ margin: '16px 0 0', fontSize: 14, lineHeight: 1.625, color: 'rgb(255 255 255 / .7)' }}>{promo.reason}</p>
              <p style={{ margin: '12px 0 0', fontSize: 14, lineHeight: 1.625, color: 'rgb(255 255 255 / .7)' }}>When they’re filled, the standard rate of {pricing.standard.build} + {pricing.standard.monthly}/mo applies.</p>
            </div>
            <p style={{ margin: '32px 0 0', borderTop: '1px solid rgb(255 255 255 / .15)', paddingTop: 20, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-soft)' }}>{promo.slotsLeft} of {promo.slotsTotal} slots open</p>
          </aside>
        )}
      </div>
      <div style={{ marginTop: 40, border: '1px solid rgb(255 255 255 / .15)', padding: 40, color: '#fff' }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, lineHeight: '28px' }}>Every plan includes</h3>
        <CheckList tone="dark" columns={3} className="sg-check" items={pricing.included} style={{ marginTop: 24 }} />
        <p style={{ margin: '28px 0 0', borderTop: '1px solid rgb(255 255 255 / .15)', paddingTop: 20, fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.625, color: 'rgb(255 255 255 / .45)' }}>BIGGER JOBS — EXTRA PAGES, BOOKINGS, ORDERING — GET A FIXED QUOTE UP FRONT. NEVER AN HOURLY SURPRISE.</p>
      </div>
    </Section>
  );
}

function Guarantee() {
  return (
    <Section id="guarantee" bg="var(--color-paper)">
      <SectionHeader eyebrow="04 / The Summergill promise" title="Everything the web industry gets wrong, in reverse." lead="Agencies register your domain to themselves, bill by the surprise hour and make leaving painful. We built Summergill to be the opposite — in writing." />
      <GridPanel columns={2} style={{ marginTop: 48 }}>
        {window.SG.guarantee.map((g) => <GridCell key={g.title} icon={g.icon} title={g.title}>{g.body}</GridCell>)}
      </GridPanel>
    </Section>
  );
}

function Process() {
  return (
    <Section bg="var(--color-surface)">
      <SectionHeader eyebrow="05 / How it works" title="Three steps. Two weeks. Zero jargon." />
      <GridPanel columns={3} style={{ marginTop: 48 }}>
        {window.SG.process.map((s) => <GridCell key={s.step} number={`0${s.step}`} title={s.title}>{s.body}</GridCell>)}
      </GridPanel>
    </Section>
  );
}

Object.assign(window, { Section, Problem, Proof, Pricing, Guarantee, Process });
