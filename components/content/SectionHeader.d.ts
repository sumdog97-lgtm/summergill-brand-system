import * as React from 'react';

/** Eyebrow + Space Grotesk h2 + lead paragraph. Opens every marketing section (max-w 672px). */
export interface SectionHeaderProps {
  /** "NN / Label" */
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** light = paper/surface, dark = ink section, brand = cobalt section. */
  tone?: 'light' | 'dark' | 'brand';
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
