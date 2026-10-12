import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function CheckList({ items = [], tone = 'light', columns = 1, style, className }) {
  const dark = tone === 'dark';
  return (
    <ul className={className} style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, columnGap: 32, rowGap: 12, ...style }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: 'flex', gap: 12, fontSize: 16, lineHeight: '24px', color: dark ? 'rgb(255 255 255 / .75)' : 'rgb(10 10 10 / .75)' }}>
          <Icon name="check" size={16} style={{ marginTop: 4, color: dark ? 'var(--color-brand-soft)' : 'var(--color-brand)' }} />
          {it}
        </li>
      ))}
    </ul>
  );
}
