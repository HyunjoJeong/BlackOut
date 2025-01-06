import styled from '@emotion/styled';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  color?: `#${string}`; // must be hexcolor
};

const StyledButton = styled.button<ButtonProps>`
  // TODO: 피그마 나오면 수정

  display: inline-block;
  font-size: ${({ size }) => (size === 'small' ? '12px' : size === 'large' ? '18px' : '16px')};
  padding: ${({ size }) =>
    size === 'small' ? '5px 10px' : size === 'large' ? '15px 20px' : '10px 15px'};
  width: ${({ size }) => (size === 'small' ? '80px' : size === 'large' ? '150px' : '120px')};
  height: ${({ size }) => (size === 'small' ? '30px' : size === 'large' ? '50px' : '40px')};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  background-color: ${({ color, variant, theme }) =>
    color || (variant === 'secondary' ? theme.colors.secondary : theme.colors.primary)};
  color: white;

  &:hover {
    background-color: ${({ color, theme }) => (color ? `${color}cc` : theme.colors.secondary)};
  }
`;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
