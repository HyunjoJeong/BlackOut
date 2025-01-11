import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const BottomSheet = ({ children }: Props) => {
  return (
    <StyledWrapper>
      <div className="handle" />
      {children}
    </StyledWrapper>
  );
};

export default BottomSheet;

const StyledWrapper = styled.div`
  padding: 12px 16px 0;
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;

  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px -2px 6px 0px rgba(0, 0, 0, 0.2);

  .handle {
    margin: 0 auto 24px;
    width: 45px;
    height: 4px;

    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.gray['300']};
  }
`;
