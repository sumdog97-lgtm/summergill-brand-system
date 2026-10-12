import React, { useState } from 'react';
import { Icon } from './Icon.jsx';

const sizeMap = {
  sm: { padding: '10px 20px', fontSize: 14, gap: 8, icon: 16 },
  md: { padding: '14px 24px', fontSize: 16, gap: 10, icon: 20 },
  lg: { padding: '14px 28px', fontSize: 16, gap: 10, icon: 20 },
};

export function Button({ variant = 'primary', size = 'lg', icon, iconRight, fullWidth, href, disabled, children, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const s = sizeMap[size] || sizeMap.lg;
  const v = {
    primary: { background: hover ? 'var(--color-brand-deep)' : 'var(--color-brand)', color: '#fff', border: '1px solid transparent' },
    outline: { background: 'transparent', color: hover ? 'var(--color-brand)' : 'var(--color-ink)', border: `1px solid ${hover ? 'var(--color-brand)' : 'var(--color-ink)'}` },
    'outline-dark': { background: 'transparent', color: hover ? 'var(--color-brand-soft)' : '#fff', border: `1px solid ${hover ? 'var(--color-brand-soft)' : 'rgb(255 255 255 / .6)'}` },
  }[variant];
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} disabled={Tag === 'button' ? disabled : undefined} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined, boxSizing: 'border-box', alignItems: 'center', justifyContent: 'center', gap: s.gap, padding: s.padding, fontFamily: 'var(--font-body)', fontSize: s.fontSize, fontWeight: 600, lineHeight: 1.5, borderRadius: 0, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1, textDecoration: 'none', transition: 'background-color .15s ease, color .15s ease, border-color .15s ease', ...v, ...style }} {...rest}>
      {icon && <Icon name={icon} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={16} />}
    </Tag>
  );
}
