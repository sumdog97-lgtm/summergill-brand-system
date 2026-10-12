import * as React from 'react';

/** Toggle chip used in the WhatsApp enquiry widget. Pressed = solid ink. */
export interface ChoiceChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
  children?: React.ReactNode;
}
export declare function ChoiceChip(props: ChoiceChipProps): JSX.Element;

/** Single-select row of ChoiceChips (flex-wrap, 8px gap). */
export interface ChoiceGroupProps {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function ChoiceGroup(props: ChoiceGroupProps): JSX.Element;
