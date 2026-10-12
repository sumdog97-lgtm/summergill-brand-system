import React, { useState } from 'react';

export function ChoiceChip({ pressed, children, onClick, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const s = pressed
    ? { border: '1px solid var(--color-ink)', background: 'var(--color-ink)', color: '#fff' }
    : { border: `1px solid ${hover ? 'var(--color-brand)' : 'rgb(10 10 10 / .2)'}`, background: 'transparent', color: hover ? 'var(--color-brand)' : 'rgb(10 10 10 / .7)' };
  return (
    <button type="button" aria-pressed={pressed ? 'true' : 'false'} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ padding: '8px 16px', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: '20px', fontWeight: 600, borderRadius: 0, cursor: 'pointer', transition: 'all .15s ease', ...s, ...style }} {...rest}>
      {children}
    </button>
  );
}

export function ChoiceGroup({ options = [], value, onChange, style }) {
  return (
    <div role="group" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, ...style }}>
      {options.map((o) => <ChoiceChip key={o} pressed={o === value} onClick={() => onChange && onChange(o)}>{o}</ChoiceChip>)}
    </div>
  );
}
