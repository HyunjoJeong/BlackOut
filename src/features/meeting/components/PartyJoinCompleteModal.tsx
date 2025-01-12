import { Button } from '@/core';
import styled from '@emotion/styled';
import Modal from 'react-modal';

type Props = {
  isOpen: boolean;
  onConfirmClick: () => void;
};

const PartyJoinCompleteModal = ({ isOpen, onConfirmClick }: Props) => {
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
      <p>파티에 참여가 완료되었어요!</p>
      <p>파티 시작 10분 전에 알려드릴게요</p>
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

export default PartyJoinCompleteModal;

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
