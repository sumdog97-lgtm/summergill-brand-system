import * as React from 'react';

/** The Summergill logo suite: S-mark + SUMMERGILL wordmark + "IDEAS | SYSTEMS | GROWTH" strapline. Raster PNGs in assets/logo/. */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * primary = stacked mark over wordmark + strapline (master logo).
   * horizontal = mark | divider | wordmark + strapline.
   * wordmark = mark + SUMMERGILL, no strapline (site header). "compact" is an alias.
   * stacked = small mark over wordmark, rule, strapline.
   * mark = S symbol only. app-icon = rounded-square tile. avatar = circle tile.
   */
  variant?: 'primary' | 'horizontal' | 'wordmark' | 'compact' | 'stacked' | 'mark' | 'app-icon' | 'avatar';
  /** color = navy→cobalt→periwinkle on light grounds; white = solid white knockout for ink/navy/cobalt. */
  tone?: 'color' | 'white';
  /** app-icon / avatar only. */
  iconStyle?: 'cobalt' | 'white' | 'navy' | 'soft';
  /** Rendered height in px; width follows the artwork ratio. Default 40. */
  height?: number;
  /** Path to assets/logo/ relative to the page. Default "assets/logo/". */
  base?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
