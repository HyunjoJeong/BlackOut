import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { ButtonHTMLAttributes, FC } from 'react';
import type { Theme } from '@emotion/react';
import type { IconProps } from '@/global/icons/base';
import { theme } from '@/global/styles/theme';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'assistive';
  outlined?: boolean;
  text?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  iconLeft?: FC<IconProps>;
  iconRight?: FC<IconProps>;
};

const iconGapStyles = {
  small: '16px',
  medium: '20px',
  large: '28px',
};

const sizeStyles = {
  small: css`
    font-size: 12px;
    padding: 7px 14px;
    width: 98px;
    height: 32px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
    width: 124px;
    height: 40px;
  `,
  large: css`
    font-size: 16px;
    padding: 16px 28px;
    width: 158px;
    height: 50px;
  `,
};

const getBackgroundColor = (
  outlined: boolean | undefined,
  text: boolean | undefined,
  theme: Theme
) => {
  if (outlined || text) {
    return theme.colors['gray-0'];
  }
  return theme.colors.primary;
};

const getBorder = (
  outlined: boolean | undefined,
  variant: 'primary' | 'secondary' | 'assistive',
  theme: Theme
) => {
  if (outlined) {
    if (variant === 'primary') {
      return `1px solid ${theme.colors.primary}`;
    }
    return `1px solid ${theme.colors['gray-300']}`;
  }
  return 'none';
};

const getColor = (
  outlined: boolean | undefined,
  variant: 'primary' | 'secondary' | 'assistive',
  theme: Theme
) => {
  if (!outlined && variant === 'primary') {
    return theme.colors['gray-0'];
  }

  if (variant === 'assistive') {
    return theme.colors['gray-700'];
  }

  return theme.colors.primary;
};

const variantStyles = (
  variant: 'primary' | 'secondary' | 'assistive',
  outlined: boolean,
  text: boolean,
  theme: Theme
) => css`
  background-color: ${getBackgroundColor(outlined, text, theme)};
  border: ${getBorder(outlined, variant, theme)};
  color: ${getColor(outlined, variant, theme)};
`;

const disabledStyles = (variant: 'primary' | 'secondary' | 'assistive', theme: Theme) => css`
  background-color: ${variant === 'primary' ? theme.colors['gray-300'] : theme.colors['gray-0']};
  color: ${variant === 'primary' ? theme.colors['gray-0'] : theme.colors['gray-300']};
  border: ${variant === 'primary' ? 'none' : `1px solid ${theme.colors['gray-300']}`};
  cursor: not-allowed;
`;

const baseStyles = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
`;
const StyledButton = styled.button<ButtonProps>`
  ${baseStyles}
  ${({ size = 'medium' }) => sizeStyles[size]}
  ${({ variant = 'primary', outlined = false, text = false, theme }) =>
    variantStyles(variant, outlined, text, theme)}
  ${({ disabled, variant = 'primary', theme }) => disabled && disabledStyles(variant, theme)}

  &:hover {
    ${({ outlined, text, theme }) => css`
      filter: ${outlined || text ? 'brightness(0.96)' : 'brightness(0.90)'};
    `}
  }

  &:active {
    ${({ outlined, text, theme }) => css`
      filter: ${outlined || text ? 'brightness(0.92)' : 'brightness(0.80)'};
    `}
  }
`;

const TextWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

const IconWrapper = styled.span<{ position: 'left' | 'right'; size: keyof typeof iconGapStyles }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ position, size }) =>
    position === 'left'
      ? css`
          left: ${iconGapStyles[size]};
        `
      : css`
          right: ${iconGapStyles[size]};
        `}
`;

export const Button = ({
  children,
  iconLeft: IconLeft,
  iconRight: IconRight,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {IconLeft && (
        <IconWrapper position="left" size={props.size ?? 'medium'}>
          {<IconLeft color={getColor(props.outlined, props.variant ?? 'primary', theme)} />}
        </IconWrapper>
      )}
      <TextWrapper>{children}</TextWrapper>
      {IconRight && (
        <IconWrapper position="right" size={props.size ?? 'medium'}>
          {<IconRight color={getColor(props.outlined, props.variant ?? 'primary', theme)} />}
        </IconWrapper>
      )}
    </StyledButton>
  );
};
