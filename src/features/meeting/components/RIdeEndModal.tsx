import { Button } from '@/core';
import styled from '@emotion/styled';
import Modal from 'react-modal';

type Props = {
  isOpen: boolean;
  onConfirmClick: () => void;
};

const RideEndModal = ({ isOpen, onConfirmClick }: Props) => {
  return (
    <StyledModal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          backgroundColor: '#fff',
          padding: '24px 16px 16px',
          border: 'none',
          borderRadius: '4px',
          width: '328px',
        },
      }}
    >
      <p>운행이 종료되었어요</p>
      <p>
        파티가 끝난 후 인증샷을 남겨 <br />
        추억을 기록할 수 있어요
      </p>
      <Button
        variant="filledPrimary"
        onClick={onConfirmClick}
        css={{ padding: '16px 28px', width: '100%' }}
      >
        확인
      </Button>
    </StyledModal>
  );
};

export default RideEndModal;

const StyledModal = styled(Modal)`
  p:first-of-type {
    ${({ theme }) => theme.typography.subTitle3}
    color: ${({ theme }) => theme.colors.gray['800']};
    margin-bottom: 12px;
  }

  p:last-of-type {
    ${({ theme }) => theme.typography.body1}
    color: ${({ theme }) => theme.colors.gray['700']};
    margin-bottom: 32px;
  }
`;
