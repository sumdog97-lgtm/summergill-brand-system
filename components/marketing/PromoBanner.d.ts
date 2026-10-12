import * as React from 'react';

/** Thin ink strip above the header announcing the limited promotion. Mono, uppercase copy. */
export interface PromoBannerProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href?: string;
  style?: React.CSSProperties;
}
export declare function PromoBanner(props: PromoBannerProps): JSX.Element;

/** brand-soft highlight span for prices inside PromoBanner. */
export interface HiProps { children?: React.ReactNode }
export declare function Hi(props: HiProps): JSX.Element;
