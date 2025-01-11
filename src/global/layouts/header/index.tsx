import styled from '@emotion/styled';
import type { HTMLAttributes, ReactNode } from 'react';

type Props = {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, 'children'>;

export const Header = ({ left, center, right }: Props) => {
  return (
    <StyledHeader role="banner">
      {left}
      <CenterItemsWrapper>{center}</CenterItemsWrapper>
      {right}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: relative;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CenterItemsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
`;
