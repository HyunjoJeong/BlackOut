import { css, useTheme } from '@emotion/react';
import type { Interpolation, Theme } from '@emotion/react';
import type { ButtonHTMLAttributes } from 'react';
import { chipVariant } from './styles/variant';

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
  disabled?: boolean;
  variant?: keyof ReturnType<typeof chipVariant>;
  css?: Interpolation<Theme>;
};

export const Chip = ({ children, variant = 'filledPrimary', css, ...props }: ChipProps) => {
  const theme = useTheme();
  return (
    <button css={[defaultStyle, chipVariant(theme)[variant], css]} {...props}>
      {children}
    </button>
  );
};

const defaultStyle = css`
  border: none;
  border-radius: 99px;

  white-space: nowrap;
`;
