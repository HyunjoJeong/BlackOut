import { Button, Chip } from '@/core';
import Divider from '@/global/components/Divider';
import { css, useTheme } from '@emotion/react';
import type { HTMLAttributes } from 'react';
import { EventDetailDto } from '../../types';

type CardDetailProps = HTMLAttributes<HTMLDivElement> & {
  eventDetail?: EventDetailDto;
  onConfirm: () => void;
};

const CardDetail: React.FC<CardDetailProps> = ({ eventDetail, onConfirm, ...props }) => {
  const theme = useTheme();

  if (!eventDetail) return null;
  const currentTime = new Date();
  const expiryTime = new Date(eventDetail.expiry);
  const remainingMinutes = Math.floor((expiryTime.getTime() - currentTime.getTime()) / (1000 * 60)); // 남은 시간(분 단위)
  return (
    <div {...props} css={wrapperStyle}>
      <Chip variant="filledSecondary" font="button3" css={{ padding: '10px' }}>
        가장 가까운 지구로 5분
      </Chip>

      <div css={infoStyle}>
        <div css={theme.typography.subTitle3}>{eventDetail.title}</div>
        <div css={[theme.typography.label0, { color: theme.colors.gray[600] }]}>
          {eventDetail.host_name}
        </div>
        <div css={[theme.typography.label1, { color: theme.colors.gray[600] }]}>
          {eventDetail.destination}
        </div>
      </div>

      <div
        css={[
          descriptionStyle,
          theme.typography.body1,
          { color: theme.colors.gray[700], backgroundColor: theme.colors.gray[100] },
        ]}
      >
        {eventDetail.description}
      </div>

      <div css={footerStyle}>
        <Button
          onClick={onConfirm}
          variant="filledPrimary"
          font="button1"
          css={{ padding: '12px 70px' }}
          disabled={eventDetail.remaining_num <= 0}
        >
          참여하기
        </Button>
        <div css={footerInfoStyle}>
          <div>
            <div
              css={[
                theme.typography.subTitle3,
                { textAlign: 'right', color: theme.colors.gray[700] },
              ]}
            >
              {eventDetail.remaining_num}명 남음
            </div>
            <div css={[theme.typography.label0, { textAlign: 'right', color: '#DC6667' }]}>
              마감 {remainingMinutes}분 전
            </div>
          </div>
        </div>
      </div>
      <div css={{ height: '30px' }}></div>
    </div>
  );
};

export default CardDetail;

const wrapperStyle = css`
  background-color: #ffffff;
  border-radius: 16px;
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
  justify-content: space-between;
  gap: 16px;
`;

const footerInfoStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;
