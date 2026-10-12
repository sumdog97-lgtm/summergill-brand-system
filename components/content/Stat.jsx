import React from 'react';

export function Stat({ value, label, first, style }) {
  return (
    <div style={{ borderLeft: first ? 'none' : '1px solid rgb(10 10 10 / .15)', padding: '20px 20px 4px', ...style }}>
      <dt style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, lineHeight: '40px', color: 'var(--color-ink)' }}>{value}</dt>
      <dd style={{ margin: '6px 0 0', fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: '16px', letterSpacing: '0.025em', textTransform: 'uppercase', color: 'rgb(10 10 10 / .55)' }}>{label}</dd>
    </div>
  );
}

export function StatRow({ stats = [], style, className }) {
  return (
    <dl className={className} style={{ margin: 0, display: 'grid', gridTemplateColumns: `repeat(${stats.length || 4}, minmax(0, 1fr))`, borderTop: '1px solid rgb(10 10 10 / .15)', ...style }}>
      {stats.map((s, i) => <Stat key={i} first={i === 0} value={s.value} label={s.label} />)}
    </dl>
  );
}
