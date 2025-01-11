import React from 'react';
import type { HTMLAttributes } from 'react';
import Image from 'next/image';
import { css, useTheme } from '@emotion/react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  imageSrc: string;
  labelMinutes: number;
  title: string;
  subtitle: string;
  remainingCount: number;
  remainingMinutes: number;
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  labelMinutes,
  title,
  subtitle,
  remainingCount,
  remainingMinutes,
  ...props
}) => {
  const theme = useTheme();

  return (
    <div {...props} css={cardStyle}>
      <div css={imageWrapperStyle}>
        <Image src={imageSrc} alt="Image" width={100} height={100} css={imagePlaceholderStyle} />
      </div>

      <div css={contentWrapperStyle}>
        <div css={labelStyle}>가장 가까운 지구로 {labelMinutes}분</div>

        <div css={mainContentStyle}>
          <div css={titleStyle}>{title}</div>
          <div css={subtitleStyle}>{subtitle}</div>
        </div>

        <div css={footerStyle}>
          <div css={countInfoStyle}>{remainingCount}명 남음</div>
          <div css={timeInfoStyle}>마감 {remainingMinutes}분 전</div>
        </div>
      </div>
    </div>
  );
};

const cardStyle = css`
  display: flex;
  flex-direction: row;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const imageWrapperStyle = css`
  flex: 0 0 auto;
  margin-right: 12px;
`;

const imagePlaceholderStyle = css`
  width: 80px;
  height: 80px;
  background-color: #e0e0e0;
  border-radius: 4px;
`;

const contentWrapperStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const labelStyle = css`
  background-color: #dfffd6;
  color: #37a645;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
  width: fit-content;
`;

const mainContentStyle = css`
  flex: 1;
  margin-bottom: 8px;
`;

const subtitleStyle = css`
  font-size: 12px;
  color: #777;
`;

const footerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const countInfoStyle = css`
  font-size: 14px;
  font-weight: bold;
  color: #d54d4d;
`;

const timeInfoStyle = css`
  font-size: 12px;
  color: #d54d4d;
`;

export default Card;
