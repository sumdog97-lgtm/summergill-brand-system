import React from 'react';

const sizes = { sm: { fs: 13, sq: 6 }, md: { fs: 20, sq: 10 }, lg: { fs: 52, sq: 14 } };

export function Wordmark({ size = 'md', tone = 'ink', squareColor, style, ...rest }) {
  const s = sizes[size] || sizes.md;
  const color = tone === 'white' ? '#fff' : 'var(--color-ink)';
  return (
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: s.fs, letterSpacing: size === 'lg' ? '-0.02em' : '-0.025em', color, display: 'inline-flex', alignItems: 'baseline', gap: s.sq * 0.6, lineHeight: 1.4, ...style }} {...rest}>
      SUMMERGILL
      <span style={{ display: 'inline-block', width: s.sq, height: s.sq, background: squareColor || 'var(--color-brand)' }}></span>
    </span>
  );
}
