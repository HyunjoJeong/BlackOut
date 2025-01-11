import React, { useState } from 'react';
import Modal from 'react-modal';
import { css, useTheme } from '@emotion/react';
import { IconX } from '@/global/icons';
import CodeInput from './CodeInput';
import { postEventComplete } from '../../apis';
import { on } from 'events';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  selectedId: number | null;
}

Modal.setAppElement('#__next'); // Next.js 사용 시 접근성 설정

const VerificationModal: React.FC<VerificationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  selectedId,
}) => {
  const theme = useTheme();
  const [code, setCode] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isWrong, setIsWrong] = useState(true);

  const handleCodeComplete = (enteredCode: string) => {
    setCode(enteredCode);
    setIsCompleted(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          padding: '24px',
          border: 'none',
          borderRadius: '16px',
          maxWidth: '400px',
          margin: 'auto',
          inset: '50% auto auto 50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <div css={modalContentStyle}>
        <div>
          <IconX
            css={closeButtonStyle}
            onClick={() => {
              setCode('');
              setIsCompleted(false);
              onClose();
            }}
          />
        </div>
        <div css={[theme.typography.subTitle3, { color: theme.colors.gray[800] }]}>
          목적지에 도착하셨나요?
        </div>
        <p css={[theme.typography.body1, { color: theme.colors.gray[700] }]}>
          주최자의 참여 코드를 입력해주세요
        </p>

        <CodeInput length={4} onComplete={handleCodeComplete} />

        {isWrong && (
          <p css={[theme.typography.body2, { color: 'red' }]}>
            잘못된 코드입니다. 다시 시도해주세요.
          </p>
        )}

        <button
          css={buttonStyle(isCompleted)}
          onClick={() => {
            setCode('');
            setIsCompleted(false);
            if (!selectedId) return;
            postEventComplete(selectedId, code)
              .then((_) => {
                onConfirm();
              })
              .catch((_) => {});
          }}
          disabled={!isCompleted} // 입력이 완료되지 않으면 버튼 비활성화
        >
          확인하기
        </button>
      </div>
    </Modal>
  );
};

export default VerificationModal;

const modalContentStyle = css`
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

const closeButtonStyle = css`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  color: #555;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;

const buttonStyle = (isCompleted: boolean) => css`
  background: ${isCompleted ? '#35d32f' : '#e0e0e0'};
  color: ${isCompleted ? '#fff' : '#a0a0a0'};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: ${isCompleted ? 'pointer' : 'not-allowed'};

  &:hover {
    background: ${isCompleted ? '#2cb428' : '#e0e0e0'};
  }
`;
