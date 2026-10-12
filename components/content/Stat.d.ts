import * as React from 'react';

/** Big display number + mono uppercase caption, separated by hairline left rules. */
export interface StatProps {
  value: React.ReactNode;
  label: React.ReactNode;
  /** Suppress the left rule on the first stat in a row. */
  first?: boolean;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Stat(props: StatProps): JSX.Element;

/** Row of Stats under a top hairline (hero proof strip). */
export interface StatRowProps {
  stats: { value: React.ReactNode; label: React.ReactNode }[];
  style?: React.CSSProperties;
  className?: string;
}
export declare function StatRow(props: StatRowProps): JSX.Element;
