import React from 'react';
import { Button } from '../core/Button.jsx';
import { Tag } from '../core/Tag.jsx';

export function PriceCard({ badge, title = 'Website build + care plan', build, wasBuild, buildNote = 'one-off build', monthly, wasMonthly, annual, note, cta = 'Claim a build slot', ctaHref, style }) {
  const strike = { fontFamily: 'var(--font-display)', fontWeight: 700, color: 'rgb(255 255 255 / .4)', textDecoration: 'line-through' };
  const row = { display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', columnGap: 12, rowGap: 4 };
  return (
    <article style={{ border: '1px solid var(--color-brand)', background: 'rgb(255 255 255 / .04)', padding: 40, color: '#fff', ...style }}>
      {badge && <Tag solid>{badge}</Tag>}
      <h3 style={{ margin: '24px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, lineHeight: '32px' }}>{title}</h3>
      <div style={{ ...row, marginTop: 20 }}>
        {wasBuild && <span style={{ ...strike, fontSize: 30, lineHeight: '36px' }}>{wasBuild}</span>}
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 60, lineHeight: 1 }}>{build}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.025em', textTransform: 'uppercase', color: 'rgb(255 255 255 / .55)' }}>{buildNote}</span>
      </div>
      <div style={{ ...row, marginTop: 12 }}>
        {wasMonthly && <span style={{ ...strike, fontSize: 18, lineHeight: '28px' }}>{wasMonthly}</span>}
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, lineHeight: '32px', color: 'var(--color-brand-soft)' }}>{monthly}<span style={{ fontSize: 16, color: 'rgb(255 255 255 / .55)' }}>/mo</span></span>
        {annual && <span style={{ fontSize: 14, color: 'rgb(255 255 255 / .55)' }}>{annual}</span>}
      </div>
      {note && <p style={{ margin: '16px 0 0', fontSize: 14, lineHeight: 1.625, color: 'rgb(255 255 255 / .55)' }}>{note}</p>}
      <Button size="md" fullWidth icon="whatsapp" href={ctaHref} style={{ marginTop: 28 }}>{cta}</Button>
    </article>
  );
}
