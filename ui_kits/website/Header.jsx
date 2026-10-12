const { Logo: HLogo, Button: HButton, Icon: HIcon, PromoBanner, Hi } = window.SummergillDesignSystem_2a6cb4;

const navItems = [{ href: '#work', label: 'Our work' }, { href: '#pricing', label: 'Pricing' }, { href: '#guarantee', label: 'Our promise' }, { href: '#faq', label: 'FAQ' }];

function NavLink({ href, children, onNav }) {
  const [h, setH] = React.useState(false);
  return <a href={href} onClick={(e) => onNav(e, href)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ fontSize: 14, fontWeight: 500, color: h ? 'var(--color-brand)' : 'rgb(10 10 10 / .7)', textDecoration: 'none', transition: 'color .15s' }}>{children}</a>;
}

function Header({ scrolled, onNav }) {
  const { promo, pricing, wa, defaultEnquiry, brand } = window.SG;
  const [open, setOpen] = React.useState(false);
  const go = (e, href) => { setOpen(false); onNav(e, href); };
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      {promo.enabled && promo.slotsLeft > 0 && (
        <PromoBanner href="#pricing" onClick={(e) => go(e, '#pricing')}>
          LIMITED PROMOTION — {promo.slotsTotal} BUILD SLOTS: <Hi>{pricing.promo.build}</Hi> BUILD + <Hi>{pricing.promo.monthly}/MO</Hi> (USUALLY {pricing.standard.build}) · {promo.slotsLeft}/{promo.slotsTotal} LEFT
        </PromoBanner>
      )}
      <div style={{ borderBottom: '1px solid var(--color-line)', background: 'rgb(255 255 255 / .95)', backdropFilter: 'blur(8px)', boxShadow: scrolled ? 'var(--shadow-header)' : 'none', transition: 'all .3s' }}>
        <div className="sg-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: scrolled ? 10 : 16, paddingBottom: scrolled ? 10 : 16, transition: 'all .3s' }}>
          <a href="#top" onClick={(e) => go(e, '#top')} style={{ textDecoration: 'none' }}><HLogo variant="wordmark" height={scrolled ? 34 : 40} base="../../assets/logo/" style={{ transition: 'height .3s, width .3s' }} /></a>
          <nav className="sg-desk" style={{ alignItems: 'center', gap: 28 }}>{navItems.map((n) => <NavLink key={n.href} href={n.href} onNav={go}>{n.label}</NavLink>)}</nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <HButton className="sg-sm-up" size="sm" icon="whatsapp" href={wa(defaultEnquiry)} target="_blank" rel="noopener">WhatsApp us</HButton>
            <button className="sg-mob" type="button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center', border: '1px solid rgb(10 10 10 / .15)', background: 'var(--color-paper)', color: 'var(--color-ink)', cursor: 'pointer', borderRadius: 0 }}>
              <HIcon name={open ? 'close' : 'burger'} size={24} />
            </button>
          </div>
        </div>
        {open && (
          <nav className="sg-mob-block" style={{ borderTop: '1px solid var(--color-line)', padding: '4px 16px 16px' }}>
            {navItems.map((n) => <a key={n.href} href={n.href} onClick={(e) => go(e, n.href)} style={{ display: 'block', borderBottom: '1px solid var(--color-line)', padding: '14px 0', fontSize: 16, fontWeight: 600, color: 'var(--color-ink)', textDecoration: 'none' }}>{n.label}</a>)}
            <HButton fullWidth size="md" icon="whatsapp" href={wa(defaultEnquiry)} target="_blank" style={{ marginTop: 16, padding: '12px 16px' }}>WhatsApp {brand.whatsappDisplay}</HButton>
          </nav>
        )}
      </div>
    </div>
  );
}

function Footer() {
  const { brand, wa, defaultEnquiry } = window.SG;
  return (
    <footer style={{ background: 'var(--color-ink)', padding: '48px 0', color: '#fff' }}>
      <div className="sg-container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24, borderBottom: '1px solid rgb(255 255 255 / .15)', paddingBottom: 32 }}>
          <HLogo variant="horizontal" tone="white" height={44} base="../../assets/logo/" />
          <HButton size="sm" href={wa(defaultEnquiry)} target="_blank">WhatsApp {brand.whatsappDisplay}</HButton>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, paddingTop: 24, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.025em', textTransform: 'uppercase', color: 'rgb(255 255 255 / .45)' }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} {brand.name} · {brand.basedIn} · A {brand.parentCompany} brand</p>
          <p style={{ margin: 0 }}>Websites done properly.</p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer });
