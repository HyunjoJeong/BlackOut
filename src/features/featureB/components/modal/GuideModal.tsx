import React from 'react';
import Modal from 'react-modal';
import { css, useTheme } from '@emotion/react';
import { IconX } from '@/global/icons';
import { Button } from '@/core';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

Modal.setAppElement('#__next');

const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose, onConfirm }) => {
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
          padding: '0',
          border: 'none',
          borderRadius: '16px',
          width: '328px',
          height: '306px',
          maxWidth: '400px',
          margin: 'auto',
          inset: '50% auto auto 50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <div css={modalContentStyle}>
        <div>
          <IconX css={closeButtonStyle} onClick={onClose} />
        </div>

        <div css={[titleStyle, theme.typography.subTitle3, { color: theme.colors.gray[800] }]}>
          참여 방법
        </div>

        <ol css={listStyle}>
          <li>
            <span>이벤트 장소 위치와 세부 정보를 확인해주세요</span>
          </li>
          <li>
            <span>하단 참여하기 버튼을 눌러주세요</span>
          </li>
          <li>
            <span>지쿠를 타고 목적지에 도착 이후, 도착 완료 버튼을 눌러주세요</span>
          </li>
        </ol>

        <div css={footerStyle}>
          <Button
            css={{
              backgroundColor: theme.colors.gray[300],
              color: theme.colors.gray[0],
              padding: '16px 50px',
            }}
            onClick={onClose}
          >
            취소
          </Button>
          <Button variant="filledPrimary" css={{ padding: '16px 36px' }} onClick={onConfirm}>
            참여하기
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default GuideModal;

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

const titleStyle = css`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const listStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: list-counter;
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    counter-increment: list-counter;
    display: flex;
    flex: 1;
    align-items: flex-start;
    gap: 8px;

    &::before {
      content: counter(list-counter);
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f5f5f5;
      border-radius: 50%;
      font-weight: bold;
      color: #555;
      font-size: 14px;
    }

    span {
      font-size: 14px;
      color: #555;
    }
  }
`;

const footerStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
