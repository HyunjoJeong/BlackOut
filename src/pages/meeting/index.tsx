import Map from '@/features/map/components/Map';
import { MOCKUP_DATA } from '@/features/map/constants';
import BottomSheet from '@/global/components/BottomSheet';
import ScrollArea from '@/global/components/ScrollArea';
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
        <Map datas={MOCKUP_DATA} selectedId={selectedId} onItemClick={handleClick} />
        <BottomSheet>
          <ScrollArea maxHeight={240}>
            <div style={{ height: 100, background: 'red' }}>하이</div>
            <div style={{ height: 100, background: 'yellow' }}>하이</div>
            <div style={{ height: 100, background: 'green' }}>하이</div>
            <div style={{ height: 100, background: 'blue' }}>하이</div>
          </ScrollArea>
        </BottomSheet>
      </main>
    </>
  );
};

export default MeetingMainPage;
