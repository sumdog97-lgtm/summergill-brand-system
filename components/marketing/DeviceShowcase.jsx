import React from 'react';

export function LaptopFrame({ src, alt = '', style }) {
  return (
    <div style={{ position: 'relative', ...style }}>
      <span aria-hidden="true" style={{ position: 'absolute', bottom: -12, left: '6%', width: '88%', height: 24, borderRadius: '100%', background: 'rgb(10 10 10 / .3)', filter: 'blur(16px)' }}></span>
      <figure style={{ position: 'relative', margin: 0 }}>
        <div style={{ margin: '0 3.5%', overflow: 'hidden', borderRadius: '12px 12px 0 0', border: '1px solid rgb(255 255 255 / .1)', borderBottom: 0, background: 'var(--device-laptop)', padding: '1.6% 1.6% 0' }}>
          <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '0.7%' }}><span style={{ width: 6, height: 6, borderRadius: 9999, background: '#737373' }}></span></div>
          <img src={src} alt={alt} style={{ display: 'block', width: '100%', borderRadius: '2px 2px 0 0' }} />
        </div>
        <div style={{ position: 'relative', height: 16, borderRadius: '0 0 12px 12px', borderTop: '1px solid rgb(0 0 0 / .7)', background: 'linear-gradient(to bottom, #404040, #262626, #0a0a0a)', boxShadow: '0 14px 24px rgba(10,10,10,0.16)' }}>
          <span style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', height: '38%', width: 96, borderRadius: '0 0 6px 6px', background: 'rgb(0 0 0 / .5)' }}></span>
          <span style={{ position: 'absolute', left: 12, right: 12, bottom: 1, height: 1, background: 'rgb(255 255 255 / .15)' }}></span>
        </div>
      </figure>
    </div>
  );
}

export function PhoneFrame({ src, alt = '', style }) {
  return (
    <figure style={{ position: 'relative', margin: 0, overflow: 'hidden', borderRadius: 27, border: '6px solid var(--device-bezel)', background: 'var(--device-bezel)', boxShadow: '0 22px 35px rgba(10,10,10,0.3)', ...style }}>
      <span style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', zIndex: 1, height: 10, width: '34%', borderRadius: 9999, background: 'var(--device-bezel)' }}></span>
      <img src={src} alt={alt} style={{ display: 'block', width: '100%', borderRadius: 20 }} />
    </figure>
  );
}

export function TabletFrame({ src, alt = '', style, className }) {
  return (
    <figure className={className} style={{ margin: 0, overflow: 'hidden', borderRadius: 18, border: '7px solid var(--device-bezel)', background: 'var(--device-bezel)', boxShadow: '0 22px 35px rgba(10,10,10,0.22)', ...style }}>
      <img src={src} alt={alt} style={{ display: 'block', width: '100%', borderRadius: 9 }} />
    </figure>
  );
}

export function DeviceShowcase({ desktop, mobile, name = '', style }) {
  return (
    <div style={{ position: 'relative', paddingRight: 40, paddingBottom: 48, ...style }}>
      <LaptopFrame src={desktop} alt={`${name} — desktop view on a laptop`} />
      {mobile && <PhoneFrame src={mobile} alt={`${name} — mobile view on a phone`} style={{ position: 'absolute', right: 0, bottom: 0, width: '23%', minWidth: 88 }} />}
    </div>
  );
}
