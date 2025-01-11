/** @jsxImportSource @emotion/react */
import Divider from '@/global/components/Divider';
import { css } from '@emotion/react';
import type { HTMLAttributes } from 'react';

type CardDetailProps = HTMLAttributes<HTMLDivElement> & {
  labelMinutes: number;
  title: string;
  subtitle: string;
  address: string;
  description: string;
  remainingCount: number;
  remainingMinutes: number;
};

const CardDetail: React.FC<CardDetailProps> = ({
  labelMinutes,
  title,
  subtitle,
  address,
  description,
  remainingCount,
  remainingMinutes,
}) => {
  return (
    <div css={wrapperStyle}>
      <Divider />

      <div css={labelStyle}>가장 가까운 지구로 {labelMinutes}분</div>

      <div css={infoStyle}>
        <h2 css={titleStyle}>{title}</h2>
        <p css={subtitleStyle}>{subtitle}</p>
        <p css={addressStyle}>{address}</p>
      </div>

      <div css={descriptionStyle}>{description}</div>

      <div css={footerStyle}>
        <button css={buttonStyle}>참여하기</button>
        <div css={footerInfoStyle}>
          <p css={peopleLeftStyle}>{remainingCount}명 남음</p>
          <p css={timeLeftStyle}>마감 {remainingMinutes}분 전</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;

const wrapperStyle = css`
  position: absolute;
  bottom: 0;

  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
`;

const labelStyle = css`
  background-color: #e9f8e7;
  color: #37a645;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 12px;
  width: fit-content;
`;

const infoStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const titleStyle = css`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
`;

const subtitleStyle = css`
  font-size: 14px;
  color: #555555;
`;

const addressStyle = css`
  font-size: 12px;
  color: #888888;
`;

const descriptionStyle = css`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  color: #555555;
  line-height: 1.5;
`;

const footerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const buttonStyle = css`
  background-color: #37a645;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  flex: 1;
  text-align: center;

  &:hover {
    background-color: #2d8b39;
  }
`;

const footerInfoStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

const peopleLeftStyle = css`
  font-size: 14px;
  font-weight: bold;
  color: #d54d4d;
`;

const timeLeftStyle = css`
  font-size: 12px;
  color: #d54d4d;
`;
