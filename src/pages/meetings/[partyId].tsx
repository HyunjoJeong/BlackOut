import { Button, Chip } from '@/core';
import { getPartyDetail } from '@/features/meeting/apis';
import { Header } from '@/global/layouts';
import BackButton from '@/global/layouts/header/BackButton';
import styled from '@emotion/styled';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const PartyDetailPage = ({ partyDetailData }: PageProps) => {
  const {
    title,
    organizer_name,
    description,
    destination,
    participants_status,
    num_participants,
    remaining_num,
    available_action,
  } = partyDetailData;

  const router = useRouter();

  return (
    <>
      <Header left={<BackButton />} />
      <StyledMain>
        <Chip variant="filledSecondary" css={{ padding: '6px 12px' }}>
          가장 가까운 지쿠로 5분
        </Chip>
        <h2>{title}</h2>
        <StyledOrganizerWrapper>
          <Image src="/cat_wow.png" alt="s" width={24} height={24} />
          <p>{organizer_name}</p>
        </StyledOrganizerWrapper>
        <GrayBox>{description}</GrayBox>
        <DashLine style={{ margin: '20px 0' }} />
        <h3>파티 정보</h3>
        <GrayBox style={{ margin: '12px 0 24px' }}>
          <StyledPartyInfoItem>
            <p>파티 장소</p>
            <p>{destination}</p>
          </StyledPartyInfoItem>
          <StyledPartyInfoItem>
            <p>파티 시간</p>
            <p>오늘 저녁 9시</p>
          </StyledPartyInfoItem>
        </GrayBox>
        <h3>파티 참여 인원</h3>
        <GrayBox style={{ margin: '12px 0' }}>
          {participants_status.map(({ nickname, status }) => (
            <StyledParticipantItem key={nickname}>
              <div>
                <Image src="/laugh.png" alt="s" width={24} height={24} />
                <p>{nickname}</p>
              </div>
              {status && (
                <Chip variant="filledSecondary" css={{ padding: '6px 12px' }}>
                  출발함
                </Chip>
              )}
            </StyledParticipantItem>
          ))}
          <DashLine />
          <StyledParticipantInfo>
            <p>{num_participants}명 참여중</p>
            <div className="dot" />
            <p>{remaining_num}명 남음</p>
          </StyledParticipantInfo>
        </GrayBox>
        <StyledButtonsWrapper>
          {available_action === 'JOIN' && (
            <Button variant="filledPrimary" font="button1">
              참여하기
            </Button>
          )}
          {available_action === 'START_RIDE' && (
            <>
              <Button variant="outlinedAssistive" font="button1" onClick={router.back}>
                취소하기
              </Button>
              <Button variant="filledPrimary" font="button1">
                출발하기
              </Button>
            </>
          )}
        </StyledButtonsWrapper>
      </StyledMain>
    </>
  );
};

export default PartyDetailPage;

export const getServerSideProps = async ({ req, res, query }: GetServerSidePropsContext) => {
  const partyId = Number(query.partyId);
  const partyDetailData = await getPartyDetail(partyId);

  return {
    props: { partyDetailData },
  };
};

const StyledMain = styled.main`
  padding: 16px 16px 24px;

  h2 {
    margin-top: 8px;
    ${({ theme }) => theme.typography.subTitle3}
    color: ${({ theme }) => theme.colors.gray['800']};
  }

  h3 {
    ${({ theme }) => theme.typography.subTitle4}
    color: ${({ theme }) => theme.colors.gray['800']};
  }
`;

const StyledOrganizerWrapper = styled.div`
  margin-top: 8px;

  display: flex;
  align-items: center;
  gap: 8px;

  p {
    ${({ theme }) => theme.typography.body1}
    color: ${({ theme }) => theme.colors.gray['600']};
  }
`;

const GrayBox = styled.div`
  margin-top: 12px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray['100']};
`;

const DashLine = styled.div`
  border-top: 1px dashed ${({ theme }) => theme.colors.gray['300']};
`;

const StyledPartyInfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p:first-of-type {
    ${({ theme }) => theme.typography.body1}
    color: ${({ theme }) => theme.colors.gray['500']};
  }

  p:last-of-type {
    ${({ theme }) => theme.typography.body1}
    color: ${({ theme }) => theme.colors.gray['700']};
  }
`;

const StyledParticipantItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    p {
      ${({ theme }) => theme.typography.body1}
      color: ${({ theme }) => theme.colors.gray['700']};
    }
  }
`;

const StyledParticipantInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 8px;

  p:first-of-type {
    ${({ theme }) => theme.typography.label0}
    color: ${({ theme }) => theme.colors.gray['600']};
  }

  .dot {
    width: 2px;
    height: 2px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.gray['600']};
  }

  p:last-of-type {
    ${({ theme }) => theme.typography.subTitle4}
    color: ${({ theme }) => theme.colors.gray['700']};
  }
`;

const StyledButtonsWrapper = styled.div`
  width: calc(100% - 32px);
  position: fixed;
  left: 16px;
  bottom: 24px;

  display: flex;
  align-items: center;
  gap: 16px;

  > button {
    padding: 16px 28px;
    flex: 1 0;
  }
`;