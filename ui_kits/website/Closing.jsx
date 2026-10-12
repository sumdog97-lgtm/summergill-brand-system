const { SectionHeader: CSectionHeader, FaqList, Eyebrow: CEyebrow, ChoiceGroup, TextField, Button: CButton, Icon: CIcon } = window.SummergillDesignSystem_2a6cb4;

function Faq() {
  return (
    <Section id="faq" bg="var(--color-paper)" narrow>
      <CSectionHeader eyebrow="06 / Questions" title="Asked honestly, answered honestly." />
      <FaqList items={window.SG.faqs} style={{ marginTop: 40 }} />
    </Section>
  );
}

function About() {
  const { brand } = window.SG;
  return (
    <Section bg="var(--color-surface)" narrow py="sg-sec-about">
      <div style={{ textAlign: 'center' }}>
        <CSectionHeader align="center" style={{ maxWidth: 'none' }} eyebrow="07 / Who you’re dealing with" title="Two builders. No account managers." />
        <p style={{ margin: '20px auto 0', maxWidth: 672, fontSize: 18, lineHeight: 1.625, color: 'rgb(10 10 10 / .7)' }}>
          Summergill is <strong>Summers &amp; Gill</strong> — two people who design, build and look after every site personally. {brand.basedIn}, reachable on WhatsApp, and small enough to care whether your site actually brings in work. Part of {brand.parentCompany}.
        </p>
      </div>
    </Section>
  );
}

function Enquire() {
  const { brand, enquiry, wa } = window.SG;
  const [type, setType] = React.useState(enquiry.businessTypes[0]);
  const [status, setStatus] = React.useState(enquiry.siteStatus[0]);
  const [name, setName] = React.useState('');
  const [note, setNote] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const parts = [`Hi Summergill — I'd like to talk about a website.`, `Business: ${type}.`, `Current site: ${status}.`];
  if (name.trim()) parts.push(`I'm ${name.trim()}.`);
  if (note.trim()) parts.push(note.trim());
  const message = parts.join(' ');
  const li = { display: 'flex', alignItems: 'center', gap: 12 };
  return (
    <section id="enquire" className="sg-sec" style={{ background: 'var(--color-brand)', color: '#fff' }}>
      <div className="sg-container sg-enq">
        <div>
          <CSectionHeader tone="brand" eyebrow="08 / Start the conversation" title="Tell us about your business. We’ll tell you the truth." lead="Two taps and a name — we’ll start a WhatsApp message for you. If a website genuinely won’t help your business, we’ll say so and save you the money." />
          <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'flex', flexDirection: 'column', gap: 12, color: 'rgb(255 255 255 / .85)' }}>
            <li style={li}><CIcon name="whatsapp" /><span>WhatsApp-first — {brand.whatsappDisplay}. Start with a message, happy to jump on a call from there.</span></li>
            <li style={li}><CIcon name="bolt" /><span>Straight answers on price and what you’ll get, same day</span></li>
            <li style={li}><CIcon name="shield" /><span>Nothing sends until you press send</span></li>
          </ul>
        </div>
        <div style={{ background: 'var(--color-paper)', color: 'var(--color-ink)', padding: 32 }}>
          <CEyebrow>Step 1 · What do you do?</CEyebrow>
          <ChoiceGroup options={enquiry.businessTypes} value={type} onChange={setType} style={{ marginTop: 12 }} />
          <CEyebrow style={{ marginTop: 24 }}>Step 2 · Where’s your website at?</CEyebrow>
          <ChoiceGroup options={enquiry.siteStatus} value={status} onChange={setStatus} style={{ marginTop: 12 }} />
          <CEyebrow style={{ marginTop: 24 }}>Step 3 · Your name &amp; business</CEyebrow>
          <TextField value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Sam — Sam’s Barbershop" style={{ marginTop: 12 }} />
          <TextField multiline rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Anything else worth knowing? (optional)" style={{ marginTop: 12 }} />
          <CButton fullWidth size="md" icon="whatsapp" href={wa(message)} onClick={(e) => { e.preventDefault(); setSent(true); }} style={{ marginTop: 24 }}>Send it over WhatsApp</CButton>
          {sent ? (
            <div style={{ marginTop: 16, border: '1px solid var(--color-brand)', padding: 12, fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 1.6, color: 'rgb(10 10 10 / .7)' }}>
              <span style={{ color: 'var(--color-brand)', letterSpacing: '0.1em' }}>PREVIEW · WOULD OPEN WHATSAPP WITH:</span><br />{message}
            </div>
          ) : (
            <p style={{ margin: '16px 0 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgb(10 10 10 / .45)' }}>OPENS WHATSAPP WITH THE MESSAGE FILLED IN — NOTHING SENDS UNTIL YOU PRESS SEND.</p>
          )}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Faq, About, Enquire });
