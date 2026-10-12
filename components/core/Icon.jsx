import React from 'react';

const paths = {
  whatsapp: 'M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm4.9 13.9c-.2.6-1.2 1.1-1.7 1.2-.4 0-.9.2-3.1-.7-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9 1-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.1.3.7 1.1 1.5 1.8 1 .9 1.8 1.2 2.1 1.3.3.1.4.1.6-.1l.9-1c.2-.3.4-.2.7-.1l2 .9c.3.2.5.2.6.4 0 .1 0 .7-.2 1.2Z',
  check: 'M4 12.5 9.5 18 20 6.5',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  spark: 'M12 3v3m6.4-.4-2.1 2.1M21 12h-3m.4 6.4-2.1-2.1M12 18v3m-6.4-.4 2.1-2.1M3 12h3m-.4-6.4 2.1 2.1',
  shield: 'M12 3 4.5 6v5.1c0 4.6 3.2 8.9 7.5 9.9 4.3-1 7.5-5.3 7.5-9.9V6L12 3Zm-2.8 9.2 2 2 3.8-4',
  pencil: 'M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3Zm10-12 3 3',
  rocket: 'M14 4c-3.5.8-6.4 3.3-7.7 6.6L4 13l3 1 1 3 2.4-2.3C13.7 13.4 16.2 10.5 17 7l.3-3.3L14 4Zm-1 5a1.5 1.5 0 1 0 0 .01M6 18c-.7.7-1 2-1 3 1 0 2.3-.3 3-1s.7-1.6 0-2.3S6.7 17.3 6 18Z',
  bolt: 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z',
  phone: 'M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z',
  burger: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
};

export const iconNames = Object.keys(paths);

export function Icon({ name = 'arrow', size = 20, strokeWidth, style, ...rest }) {
  const sw = strokeWidth ?? (name === 'burger' || name === 'close' ? 2 : 1.8);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, display: 'block', ...style }} {...rest}>
      <path d={paths[name]}></path>
    </svg>
  );
}
