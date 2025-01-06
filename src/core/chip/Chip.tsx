import type { IconProps } from '@/global/icons/base';
import styled from '@emotion/styled';
import type { FC, HTMLAttributes } from 'react';

type ChipProps = HTMLAttributes<HTMLDivElement> & {
  color?: `#${string}`;
  size?: 'small' | 'medium' | 'large';
  clicked?: boolean;
  icon?: FC<IconProps>;
};

const StyledChip = styled.div<ChipProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: ${({ size }) => (size === 'small' ? '12px' : size === 'large' ? '16px' : '14px')};
  padding: ${({ size }) =>
    size === 'small' ? '4px 8px' : size === 'large' ? '8px 16px' : '6px 12px'};
  width: ${({ size }) => (size === 'small' ? '80px' : size === 'large' ? '120px' : '100px')};
  height: ${({ size }) => (size === 'small' ? '30px' : size === 'large' ? '50px' : '40px')};
  border: ${({ clicked, color, theme }) =>
    clicked ? `2px solid ${color || theme.colors.primary}` : 'none'};
  background-color: ${({ clicked, color, theme }) =>
    clicked ? 'transparent' : color || theme.colors.primary};
  color: ${({ clicked, color, theme }) => (clicked ? color || theme.colors.primary : '#fff')};
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ clicked, color, theme }) =>
      clicked ? 'transparent' : color ? `${color}cc` : `${theme.colors.primary}cc`};
  }
`;

export const Chip = ({ children, icon: Icon, ...props }: ChipProps) => {
  return (
    <StyledChip {...props}>
      {children}
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
    </StyledChip>
  );
};
