import type { CSSProperties, SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: CSSProperties['color'];
};
