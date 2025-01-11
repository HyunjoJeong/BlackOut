import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type Props = {
  maxHeight: number;
  children?: ReactNode;
};

const ScrollArea = ({ maxHeight, children }: Props) => {
  return <StyledWrapper css={{ maxHeight }}>{children}</StyledWrapper>;
};

export default ScrollArea;

const StyledWrapper = styled.section`
  padding-bottom: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  overflow-y: scroll;

  > * {
    flex-shrink: 0;
  }
`;
