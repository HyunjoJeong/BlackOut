import { Chip } from '@/core';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { MeetItemDto } from '../types/dto';

type Props = {
  data: MeetItemDto;
};

const MOCK_IMAGE =
  'https://stlgehffhjwkneboewar.supabase.co/storage/v1/object/public/images/028997f1-519b-44cb-b9d3-a1ba3bc8cf19.png';

const MeetingListItem = ({ data }: Props) => {
  const router = useRouter();

  const { id, title, destination } = data;

  return (
    <StyledWrapper>
      <Image src={MOCK_IMAGE} alt={title} width={110} height={140} />
      <StyledInfosWrapper onClick={() => router.push(`/meetings/${id}`)}>
        <Chip variant="filledSecondary" css={{ padding: '6px 12px' }}>
          가장 가까운 지쿠로 5분
        </Chip>
        <h2>{title}</h2>
        <p>{destination}</p>
        <p>날짜...</p>
        <StyledConstraintsWrapper>
          <StyledParticipantsWrapper>
            <p>2명 참여중</p>
            <p>2명 남음</p>
          </StyledParticipantsWrapper>
          <p>마감 30분 전</p>
        </StyledConstraintsWrapper>
      </StyledInfosWrapper>
    </StyledWrapper>
  );
};

export default MeetingListItem;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;

  img {
    border-radius: 4px;
  }
`;

const StyledInfosWrapper = styled.div`
  flex-shrink: 0;
  flex-grow: 1;

  cursor: pointer;

  h2 {
    margin: 8px 0 4px;

    ${({ theme }) => theme.typography.subTitle3}
    color: ${({ theme }) => theme.colors.gray['800']};
  }

  > p {
    ${({ theme }) => theme.typography.label0}
    color: ${({ theme }) => theme.colors.gray['600']};
  }
`;

const StyledConstraintsWrapper = styled.div`
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > p {
    ${({ theme }) => theme.typography.label0}
    color: #DC6667;
  }
`;

const StyledParticipantsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 18px;

  p:first-of-type {
    ${({ theme }) => theme.typography.label0}
    color: ${({ theme }) => theme.colors.gray['600']};
  }

  p:last-of-type {
    ${({ theme }) => theme.typography.subTitle3}
    color: ${({ theme }) => theme.colors.gray['700']};
  }
`;
