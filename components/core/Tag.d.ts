import * as React from 'react';

/** Mono uppercase label chip: hairline-bordered (project tags) or solid cobalt (promo badge). */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'light' | 'dark';
  /** Solid cobalt fill, white text, widest tracking — "LIMITED PROMOTION — 5 SLOTS". */
  solid?: boolean;
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
