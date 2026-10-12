import React, { useState } from 'react';

export function FaqItem({ question, children, defaultOpen = false, style }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid rgb(10 10 10 / .15)', padding: open ? '0 4px 20px' : '0 4px', ...style }}>
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}
        style={{ all: 'unset', boxSizing: 'border-box', width: '100%', cursor: 'pointer', padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16, lineHeight: '24px', color: 'var(--color-ink)' }}>
        {question}
        <span aria-hidden="true" style={{ fontFamily: 'var(--font-mono)', fontSize: 20, lineHeight: '28px', color: 'var(--color-brand)', transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .15s ease' }}>+</span>
      </button>
      {open && <p style={{ margin: 0, maxWidth: 768, fontSize: 16, lineHeight: 1.625, color: 'rgb(10 10 10 / .7)' }}>{children}</p>}
    </div>
  );
}

export function FaqList({ items = [], style }) {
  return <div style={{ borderTop: '1px solid rgb(10 10 10 / .15)', ...style }}>{items.map((f, i) => <FaqItem key={i} question={f.q}>{f.a}</FaqItem>)}</div>;
}
