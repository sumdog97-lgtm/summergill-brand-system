import * as React from 'react';
import type { IconName } from '../core/Icon';

/** Hairline-ruled grid: 1px ink/15 border with 1px gaps showing the ink/15 background — Summergill's "card" pattern. */
export interface GridPanelProps {
  columns?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
export declare function GridPanel(props: GridPanelProps): JSX.Element;

/** A cell inside GridPanel. Plain (problem), with cobalt icon square (guarantee), or with big cobalt number (process). */
export interface GridCellProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  icon?: IconName;
  /** e.g. "01" — rendered 60px cobalt display above the title. */
  number?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function GridCell(props: GridCellProps): JSX.Element;
