import React from 'react';

const files = {
  primary: { name: 'summergill-primary', ratio: 380 / 280 },
  horizontal: { name: 'summergill-horizontal', ratio: 470 / 122 },
  wordmark: { name: 'summergill-wordmark', ratio: 312 / 84 },
  stacked: { name: 'summergill-stacked', ratio: 272 / 182 },
  mark: { name: 'summergill-mark', ratio: 170 / 162 },
};
files.compact = files.wordmark;

export function Logo({ variant = 'primary', tone = 'color', iconStyle = 'cobalt', height = 40, base = 'assets/logo/', alt = 'Summergill — Ideas | Systems | Growth', style, ...rest }) {
  const prefix = base.endsWith('/') ? base : base + '/';
  if (variant === 'app-icon' || variant === 'avatar') {
    const w = variant === 'avatar' ? height * (142 / 144) : height * (150 / 148);
    return <img src={`${prefix}${variant}-${iconStyle}.png`} alt="Summergill" style={{ display: 'block', height, width: Math.round(w), ...style }} {...rest} />;
  }
  const f = files[variant] || files.primary;
  return <img src={`${prefix}${f.name}${tone === 'white' ? '-white' : ''}.png`} alt={alt} style={{ display: 'block', height, width: Math.round(height * f.ratio), ...style }} {...rest} />;
}
