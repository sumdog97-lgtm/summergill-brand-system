import React, { useState } from 'react';

export function TextField({ multiline, rows = 2, style, onFocus, onBlur, ...rest }) {
  const [focus, setFocus] = useState(false);
  const El = multiline ? 'textarea' : 'input';
  return (
    <El rows={multiline ? rows : undefined} onFocus={(e) => { setFocus(true); onFocus && onFocus(e); }} onBlur={(e) => { setFocus(false); onBlur && onBlur(e); }}
      style={{ width: '100%', boxSizing: 'border-box', display: 'block', padding: '12px 16px', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: '20px', color: 'var(--color-ink)', background: 'var(--color-paper)', border: `1px solid ${focus ? 'var(--color-brand)' : 'rgb(10 10 10 / .2)'}`, borderRadius: 0, outline: 'none', boxShadow: focus ? '0 0 0 2px rgb(29 78 216 / .3)' : 'none', resize: 'none', ...style }} {...rest} />
  );
}
