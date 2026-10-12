import * as React from 'react';

/** The SUMMERGILL wordmark: uppercase Space Grotesk Bold + a solid cobalt square "full stop". */
export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** sm 13px (deck footer), md 20px (header/footer), lg 52px (cover). Default md. */
  size?: 'sm' | 'md' | 'lg';
  /** ink on light, white on ink/cobalt. */
  tone?: 'ink' | 'white';
  /** Override the square — white on cobalt backgrounds. */
  squareColor?: string;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
