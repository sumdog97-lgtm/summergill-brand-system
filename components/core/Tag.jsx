import React from 'react';

export function Tag({ children, tone = 'light', solid, style, ...rest }) {
  const base = { display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: '16px', letterSpacing: solid ? '0.1em' : '0.025em', fontWeight: solid ? 500 : 400, textTransform: 'uppercase', padding: '4px 12px' };
  const t = solid
    ? { background: 'var(--color-brand)', color: '#fff', border: '1px solid var(--color-brand)' }
    : tone === 'dark'
      ? { border: '1px solid rgb(255 255 255 / .15)', color: 'rgb(255 255 255 / .65)' }
      : { border: '1px solid rgb(10 10 10 / .15)', color: 'rgb(10 10 10 / .65)' };
  return <span style={{ ...base, ...t, ...style }} {...rest}>{children}</span>;
}
