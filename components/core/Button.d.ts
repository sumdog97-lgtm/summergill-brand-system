import * as React from 'react';
import type { IconName } from './Icon';

/**
 * Square-cornered CTA. Primary = solid cobalt (hover → brand-deep). Outline = 1px ink border (hover → cobalt).
 * @startingPoint section="Core" subtitle="Cobalt WhatsApp CTA + outline secondary" viewport="700x260"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'outline' | 'outline-dark';
  /** sm = header (px-5 py-2.5 14px), md = card CTA (px-6 py-3.5), lg = hero (px-7 py-3.5). Default lg. */
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon — almost always "whatsapp" on primary CTAs. */
  icon?: IconName;
  /** Trailing icon — "arrow" on secondary links. */
  iconRight?: IconName;
  fullWidth?: boolean;
  /** Renders an <a> when set. */
  href?: string;
  target?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
