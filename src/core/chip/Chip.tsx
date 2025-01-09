import { css, useTheme } from '@emotion/react';
import type { Interpolation, Theme } from '@emotion/react';
import type { HTMLAttributes } from 'react';
import { chipVariant } from './styles/variant';

type ChipProps = HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  variant?: keyof ReturnType<typeof chipVariant>;
  css?: Interpolation<Theme>;
};

export const Chip = ({ children, variant = 'filledPrimary', css, ...props }: ChipProps) => {
  const theme = useTheme();

  return (
    <div css={[defaultStyle, chipVariant(theme)[variant], css]} {...props}>
      {children}
    </div>
  );
};

const defaultStyle = css`
  width: fit-content;
  border: none;
  border-radius: 99px;

  cursor: pointer;
  white-space: nowrap;
`;
