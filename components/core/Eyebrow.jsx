import React from 'react';

export function Eyebrow({ children, tone = 'light', bracket, style, ...rest }) {
  const color = { light: 'var(--color-brand)', dark: 'var(--color-brand-soft)', brand: 'rgb(255 255 255 / .7)', muted: 'rgb(10 10 10 / .6)' }[tone];
  const bracketColor = tone === 'dark' ? 'var(--color-brand-soft)' : 'var(--color-brand)';
  return (
    <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: '16px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: bracket ? 'rgb(10 10 10 / .6)' : color, ...style }} {...rest}>
      {bracket ? (<><span style={{ color: bracketColor }}>[</span> {children} <span style={{ color: bracketColor }}>]</span></>) : children}
    </p>
  );
}
