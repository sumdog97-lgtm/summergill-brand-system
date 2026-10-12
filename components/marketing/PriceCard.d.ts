import * as React from 'react';

/**
 * The one pricing card, on an ink section: cobalt 1px border, struck-through standard prices beside promo prices, full-width WhatsApp CTA.
 * @startingPoint section="Marketing" subtitle="Ink-section price card with promo strike-through" viewport="700x460"
 */
export interface PriceCardProps {
  /** Solid cobalt Tag above the title, e.g. "Limited promotion — 5 slots". */
  badge?: string;
  title?: string;
  build: string;
  /** Struck-through standard build price. */
  wasBuild?: string;
  buildNote?: string;
  monthly: string;
  wasMonthly?: string;
  annual?: string;
  note?: React.ReactNode;
  cta?: string;
  ctaHref?: string;
  style?: React.CSSProperties;
}
export declare function PriceCard(props: PriceCardProps): JSX.Element;
