import Divider from '@/global/components/Divider';
import { css } from '@emotion/react';
import { ReactNode } from 'react';

const CardListWrapper = ({ children }: { children: ReactNode }) => {
  return <div css={wrapperStyle}>{children}</div>;
};

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
`;

const cardListStyle = css``;

export default CardListWrapper;
