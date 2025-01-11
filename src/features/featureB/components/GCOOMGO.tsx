import { useState } from 'react';
import type { EventDto, Phase } from '../types';
import GcoomGoBottom from './GcoomGoBottom';
import Map from '../../map/components/Map';
import { MOCKUP_DATA } from '@/features/map/constants';
import type { MapItemDto } from '@/features/map/types/dto';
import { useFetchEventListQuery } from '../hooks/useFetchEventListQuery';

export default function GCOOMGO() {
  const [phase, setPhase] = useState<Phase>('initial');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [pinData, setPinData] = useState<MapItemDto[]>(MOCKUP_DATA);

  const {
    data: eventListData,
    isLoading,
    error,
  } = useFetchEventListQuery({
    onSuccess: (fetchedData: EventDto[]) => {
      setPinData(
        fetchedData.map((event) => ({
          id: Number(event.id),
          title: event.title,
          destination: event.destination,
          coordinates: event.coordinates,
        }))
      );
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Map
          datas={pinData}
          selectedId={selectedId}
          onItemClick={(id: number) => {
            if (id === selectedId) {
              setSelectedId(null);
              setPhase('initial');
            } else {
              setPhase('eventInfo');
              setSelectedId(id);
            }
          }}
        ></Map>
      </div>
      <GcoomGoBottom
        eventList={eventListData}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        phase={phase}
        setPhase={setPhase}
      ></GcoomGoBottom>
    </>
  );
}
