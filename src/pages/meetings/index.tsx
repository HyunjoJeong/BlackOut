import Map from '@/features/map/components/Map';
import MeetingList from '@/features/meeting/components/MeetingList';
import { usePartyListQuery } from '@/features/meeting/hooks/usePartyListQuery';
import BottomSheet from '@/global/components/BottomSheet';
import { Header } from '@/global/layouts';
import BackButton from '@/global/layouts/header/BackButton';
import { useState } from 'react';

const MeetingMainPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { data } = usePartyListQuery();

  const handleClick = (id: number) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <>
      <Header left={<BackButton />} />
      <main>
        <Map datas={data} selectedId={selectedId} onItemClick={handleClick} />
        <BottomSheet>
          <MeetingList datas={data} selectedId={selectedId} />
        </BottomSheet>
      </main>
    </>
  );
};

export default MeetingMainPage;
