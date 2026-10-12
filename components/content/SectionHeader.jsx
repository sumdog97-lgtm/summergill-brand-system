import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

export function SectionHeader({ eyebrow, title, lead, tone = 'light', align = 'left', style }) {
  const dark = tone === 'dark' || tone === 'brand';
  return (
    <div style={{ maxWidth: 672, marginInline: align === 'center' ? 'auto' : undefined, textAlign: align, ...style }}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, lineHeight: '40px', letterSpacing: '-0.025em', color: dark ? '#fff' : 'var(--color-ink)', margin: '16px 0 0', textWrap: 'balance' }}>{title}</h2>
      {lead && <p style={{ margin: '16px 0 0', fontSize: 18, lineHeight: 1.625, color: tone === 'brand' ? 'rgb(255 255 255 / .85)' : dark ? 'rgb(255 255 255 / .7)' : 'rgb(10 10 10 / .7)', textWrap: 'pretty' }}>{lead}</p>}
    </div>
  );
}
