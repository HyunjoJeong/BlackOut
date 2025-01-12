import Map from '@/features/map/components/Map';
import { getPartyList } from '@/features/meeting/apis';
import MeetingList from '@/features/meeting/components/MeetingList';
import BottomSheet from '@/global/components/BottomSheet';
import { Header } from '@/global/layouts';
import BackButton from '@/global/layouts/header/BackButton';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useState } from 'react';

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const MeetingMainPage = ({ partyListData }: PageProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <>
      <Header left={<BackButton />} />
      <main>
        <Map datas={partyListData} selectedId={selectedId} onItemClick={handleClick} />
        <BottomSheet>
          <MeetingList datas={partyListData} selectedId={selectedId} />
        </BottomSheet>
      </main>
    </>
  );
};

export default MeetingMainPage;

export const getServerSideProps = async ({}: GetServerSidePropsContext) => {
  const partyListData = await getPartyList();

  return {
    props: { partyListData },
  };
};
