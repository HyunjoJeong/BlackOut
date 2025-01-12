import React from 'react';
import type { HTMLAttributes } from 'react';
import Image from 'next/image';
import { css, useTheme } from '@emotion/react';
import { Chip } from '@/core';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  imageSrc: string;
  title: string;
  hostname: string;
  remainingCount: number;
  remainingMinutes: number;
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  hostname,
  remainingCount,
  remainingMinutes,
  ...props
}) => {
  const theme = useTheme();

  return (
    <div {...props} css={cardStyle}>
      <div css={imageWrapperStyle}>
        <Image
          src={imageSrc}
          alt="Image"
          width={100}
          height={100}
          css={imagePlaceholderStyle}
        />
      </div>

      <div css={contentWrapperStyle}>
        <Chip font="button3" variant="filledSecondary" css={{ padding: '10px' }}>
          가장 가까운 지쿠로 5분
        </Chip>

        <div css={mainContentStyle}>
          <div css={[theme.typography.subTitle3, { color: theme.colors.gray[800] }]}>{title}</div>
          <div css={[theme.typography.label0, { color: theme.colors.gray[700] }]}>{hostname}</div>
        </div>

        <div css={footerStyle}>
          <div>
            <div
              css={[
                theme.typography.subTitle3,
                { textAlign: 'right', color: theme.colors.gray[700] },
              ]}
            >
              {remainingCount}명 남음
            </div>
            <div css={[theme.typography.label0, { textAlign: 'right', color: '#DC6667' }]}>
              마감 {remainingMinutes}분 전
            </div>
          </div>
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

const mainContentStyle = css`
  flex: 1;
  margin-bottom: 8px;
`;

const footerStyle = css`
  display: flex;
  justify-content: right;
  align-items: center;
`;

export default Card;
