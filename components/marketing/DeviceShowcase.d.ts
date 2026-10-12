import * as React from 'react';

interface FrameProps { src: string; alt?: string; style?: React.CSSProperties; className?: string }

/** CSS laptop: near-black bezel with camera dot, gradient hinge, soft floor shadow. */
export declare function LaptopFrame(props: FrameProps): JSX.Element;
/** CSS phone: 6px #111 bezel, 27px radius, pill notch, drop shadow. */
export declare function PhoneFrame(props: FrameProps): JSX.Element;
/** CSS tablet: 7px #111 bezel, 18px radius. */
export declare function TabletFrame(props: FrameProps): JSX.Element;

/**
 * Proof-wall composition: laptop with a phone overlapping its bottom-right corner. The only rounded things in the system.
 * @startingPoint section="Marketing" subtitle="Laptop + phone proof shot of a client build" viewport="700x440"
 */
export interface DeviceShowcaseProps {
  desktop: string;
  mobile?: string;
  name?: string;
  style?: React.CSSProperties;
}
export declare function DeviceShowcase(props: DeviceShowcaseProps): JSX.Element;
