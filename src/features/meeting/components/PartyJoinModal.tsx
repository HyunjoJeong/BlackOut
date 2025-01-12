import { Button } from '@/core';
import styled from '@emotion/styled';
import Modal from 'react-modal';

type Props = {
  isOpen: boolean;
  onCancelClick: () => void;
  onJoinClick: () => void;
};

const PartyJoinModal = ({ isOpen, onCancelClick, onJoinClick }: Props) => {
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
      <p>파티에 참여하시겠어요?</p>
      <div>
        <Button variant="outlinedPrimary" onClick={onCancelClick}>
          취소
        </Button>
        <Button variant="filledPrimary" onClick={onJoinClick}>
          참여하기
        </Button>
      </div>
    </StyledModal>
  );
};

export default PartyJoinModal;

const StyledModal = styled(Modal)`
  p {
    ${({ theme }) => theme.typography.subTitle3}
    color: ${({ theme }) => theme.colors.gray['800']};
    margin-bottom: 24px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    button {
      flex: 1 0;
      padding: 16px 28px;
    }
  }
`;
