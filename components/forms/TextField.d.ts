import * as React from 'react';

/** Square text input / textarea. ink/20 border; focus = cobalt border + 2px cobalt/30 ring. */
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Render a non-resizable textarea. */
  multiline?: boolean;
  rows?: number;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
