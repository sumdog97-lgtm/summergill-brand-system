import * as React from 'react';

/** List with leading check icons (brand-soft on ink, cobalt on paper). */
export interface CheckListProps {
  items: React.ReactNode[];
  tone?: 'light' | 'dark';
  columns?: number;
  style?: React.CSSProperties;
  className?: string;
}
export declare function CheckList(props: CheckListProps): JSX.Element;
