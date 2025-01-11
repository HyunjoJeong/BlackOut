import type { IconProps } from './base';

export const IconList = ({ size = 15, color = '#000', ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width={size} height={size} fill="none" />
    <line
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    />
    <line
      x1="40"
      y1="64"
      x2="216"
      y2="64"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    />
    <line
      x1="40"
      y1="192"
      x2="216"
      y2="192"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    />
  </svg>
);
