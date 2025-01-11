import Map from '@/features/map/components/Map';
import MeetingList from '@/features/meeting/components/MeetingList';
import { MEET_LIST_MOCKUP } from '@/features/meeting/constants';
import BottomSheet from '@/global/components/BottomSheet';
import { Header } from '@/global/layouts';
import BackButton from '@/global/layouts/header/BackButton';
import { useState } from 'react';

const MeetingMainPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <>
      <Header left={<BackButton />} />
      <main>
        <Map datas={MEET_LIST_MOCKUP} selectedId={selectedId} onItemClick={handleClick} />
        <BottomSheet>
          <MeetingList selectedId={selectedId} />
        </BottomSheet>
      </main>
    </>
  );
};

export default MeetingMainPage;
