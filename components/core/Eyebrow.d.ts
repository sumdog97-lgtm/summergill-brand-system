import * as React from 'react';

/** Mono uppercase section label, e.g. "02 / Our work" or bracketed "[ Hand-built websites · UK based ]". */
export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** light = cobalt on paper; dark = brand-soft on ink; brand = white/70 on cobalt. */
  tone?: 'light' | 'dark' | 'brand' | 'muted';
  /** Wrap in cobalt [ ] brackets with ink/60 text (hero style). */
  bracket?: boolean;
  children?: React.ReactNode;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
