import React, { useState } from 'react';
import Modal from 'react-modal';
import { css, useTheme } from '@emotion/react';
import { Button } from '@/core';

interface CompletedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

Modal.setAppElement('#__next'); // Next.js 사용 시 접근성 설정

const CompletedModal: React.FC<CompletedModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const theme = useTheme();

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
          width: '300px',
          maxWidth: '400px',
          margin: 'auto',
          inset: '50% auto auto 50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <div css={modalContentStyle}>
        <div css={[theme.typography.subTitle3, { color: theme.colors.gray[800] }]}>축하드려요!</div>
        <div css={[theme.typography.body1, { color: theme.colors.gray[700] }]}>
          10분만에 동네 빵집 마감 특가를 득템했어요
        </div>
        <Button
          onClick={() => {
            onConfirm();
          }}
          css={{ padding: '10px' }}
          variant="filledPrimary"
        >
          인증샷 남기고 자랑하기
        </Button>
        <Button
          onClick={() => {
            onClose();
          }}
          css={{ padding: '10px' }}
          variant="outlinedPrimary"
        >
          홈으로 돌아가기
        </Button>
      </div>
    </Modal>
  );
};

export default CompletedModal;

const modalContentStyle = css`
  background: #ffffff;
  border-radius: 16px;
  padding: 8px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;
