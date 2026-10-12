import React, { useState } from 'react';

export function PromoBanner({ children, href = '#pricing', style, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'block', background: 'var(--color-ink)', padding: '8px 16px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: '16px', fontWeight: 500, letterSpacing: '0.025em', color: hover ? '#fff' : 'rgb(255 255 255 / .8)', textDecoration: 'none', transition: 'color .15s ease', ...style }} {...rest}>
      {children}
    </a>
  );
}

export function Hi({ children }) {
  return <span style={{ color: 'var(--color-brand-soft)' }}>{children}</span>;
}
