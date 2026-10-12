import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function GridPanel({ columns = 3, children, style, className }) {
  return (
    <div className={className} style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: 1, border: '1px solid rgb(10 10 10 / .15)', background: 'rgb(10 10 10 / .15)', ...style }}>
      {children}
    </div>
  );
}

export function GridCell({ title, children, icon, number, style }) {
  const body = <p style={{ margin: number ? '10px 0 0' : icon ? '8px 0 0' : '12px 0 0', fontSize: 16, lineHeight: 1.625, color: 'rgb(10 10 10 / .7)' }}>{children}</p>;
  const heading = <h3 style={{ margin: number ? '16px 0 0' : 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, lineHeight: '28px', color: 'var(--color-ink)' }}>{title}</h3>;
  return (
    <article style={{ background: 'var(--color-paper)', padding: 32, display: icon ? 'flex' : 'block', gap: 20, ...style }}>
      {icon && <span style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, flexShrink: 0, background: 'var(--color-brand)', color: '#fff' }}><Icon name={icon} size={20} /></span>}
      {number && <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 60, lineHeight: 1, color: 'var(--color-brand)' }}>{number}</span>}
      {icon ? <div>{heading}{body}</div> : <>{heading}{body}</>}
    </article>
  );
}
