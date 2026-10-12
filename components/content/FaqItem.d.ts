import * as React from 'react';

/** Hairline accordion row with a cobalt mono "+" that rotates to "×" when open. */
export interface FaqItemProps {
  question: React.ReactNode;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  style?: React.CSSProperties;
}
export declare function FaqItem(props: FaqItemProps): JSX.Element;

/** Stack of FaqItems with a top hairline. */
export interface FaqListProps {
  items: { q: React.ReactNode; a: React.ReactNode }[];
  style?: React.CSSProperties;
}
export declare function FaqList(props: FaqListProps): JSX.Element;
