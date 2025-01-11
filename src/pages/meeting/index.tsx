import Map from '@/features/map/components/Map';
import MeetingList from '@/features/meeting/components/MeetingList';
import BottomSheet from '@/global/components/BottomSheet';
import { Header } from '@/global/layouts';
import { useState } from 'react';

const MeetingMainPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <>
      <Header center={'지쿰 만나'} />
      <main>
        <Map selectedId={selectedId} onItemClick={handleClick} />
        <BottomSheet>
          <MeetingList />
        </BottomSheet>
      </main>
    </>
  );
};

export default MeetingMainPage;
