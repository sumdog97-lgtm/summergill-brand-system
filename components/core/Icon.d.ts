import * as React from 'react';

export type IconName = 'whatsapp' | 'check' | 'arrow' | 'spark' | 'shield' | 'pencil' | 'rocket' | 'bolt' | 'phone' | 'burger' | 'close';

/** Summergill's own 24px line-icon set (stroke 1.8, round caps). Inherits currentColor. */
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  /** px. Site uses 16 (h-4), 20 (h-5), 24 (h-6). Default 20. */
  size?: number;
  strokeWidth?: number;
}
export declare function Icon(props: IconProps): JSX.Element;
export declare const iconNames: IconName[];
