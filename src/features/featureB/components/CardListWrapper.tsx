import { css } from '@emotion/react';
import { ReactNode } from 'react';

const CardListWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div css={wrapperStyle}>
      <div css={dividerStyle}></div>
      <div css={cardListStyle}>{children}</div>
    </div>
  );
};

const wrapperStyle = css`
  position: absolute;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  padding: 16px;
  width: 100%;
  max-width: 600px;
`;

const dividerStyle = css`
  height: 4px;
  width: 45px;
  background-color: #ddd;
  margin: 0 auto 16px auto;
  border-radius: 100px;
`;

const cardListStyle = css`
  max-height: calc(100vh - 200px);
  overflow-y: auto;
`;

export default CardListWrapper;
