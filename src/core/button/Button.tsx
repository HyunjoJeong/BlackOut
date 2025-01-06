import { css, useTheme } from '@emotion/react';
import type { Interpolation, Theme } from '@emotion/react';
import type { ButtonHTMLAttributes } from 'react';
import { buttonVariant } from './styles/variant';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof ReturnType<typeof buttonVariant>;
  css?: Interpolation<Theme>;
};

export const Button = ({ children, variant = 'filledPrimary', css, ...props }: ButtonProps) => {
  const theme = useTheme();
  return (
    <button css={[defaultStyle, buttonVariant(theme)[variant], css]} {...props}>
      {children}
    </button>
  );
};

const defaultStyle = css`
  border: none;
  border-radius: 4px;

  white-space: nowrap;
`;
