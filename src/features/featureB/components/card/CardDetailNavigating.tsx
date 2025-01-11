import { Button, Chip } from '@/core';
import Divider from '@/global/components/Divider';
import { css, useTheme } from '@emotion/react';
import type { HTMLAttributes } from 'react';

type CardDetailNavigatingProps = HTMLAttributes<HTMLDivElement> & {
  labelMinutes: number;
  title: string;
  subtitle: string;
  address: string;
  description: string;
  remainingCount: number;
  remainingMinutes: number;
  onConfirm: () => void;
  onCancel: () => void;
};

const CardDetailNavigating: React.FC<CardDetailNavigatingProps> = ({
  labelMinutes,
  title,
  subtitle,
  address,
  description,
  remainingCount,
  remainingMinutes,
  onConfirm,
  onCancel,
  ...props
}) => {
  const theme = useTheme();

  return (
    <div {...props} css={wrapperStyle}>
      <Divider />

      <Chip variant="filledSecondary" font="button3" css={{ padding: '10px' }}>
        가장 가까운 지구로 {labelMinutes}분
      </Chip>

      <div css={infoStyle}>
        <div css={theme.typography.subTitle3}>{title}</div>
        <div css={[theme.typography.label0, { color: theme.colors.gray[600] }]}>{subtitle}</div>
        <div css={[theme.typography.label1, { color: theme.colors.gray[600] }]}>{address}</div>
      </div>

      <div
        css={[
          descriptionStyle,
          theme.typography.body1,
          { color: theme.colors.gray[700], backgroundColor: theme.colors.gray[100] },
        ]}
      >
        {description}
      </div>

      <div css={footerStyle}>
        <div css={footerInfoStyle}>
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

      <div css={footerButtonsStyle}>
        <Button
          font="button1"
          variant="outlinedAssistive"
          css={{
            padding: '16px 40px',
          }}
          onClick={onCancel}
        >
          취소하기
        </Button>
        <Button
          font="button1"
          variant="filledPrimary"
          css={{ padding: '16px 40px' }}
          onClick={onConfirm}
        >
          도착완료
        </Button>
      </div>
    </div>
  );
};

export default CardDetailNavigating;

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

const infoStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  justify-content: right;
  gap: 16px;
`;

const footerInfoStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

const footerButtonsStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
