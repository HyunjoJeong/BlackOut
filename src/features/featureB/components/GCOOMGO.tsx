import MockMap from '@/features/featureB/components/MockMap';
import { useState } from 'react';
import type { Phase } from '../types';
import GcoomGoBottom from './GcoomGoBottom';
import Map from '../../map/components/Map';
import { MOCKUP_DATA } from '@/features/map/constants';
import { MapItemDto } from '@/features/map/types/dto';

export default function GCOOMGO() {
  const [phase, setPhase] = useState<Phase>('initial');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const data: MapItemDto[] = MOCKUP_DATA;
  return (
    <>
      <Map
        datas={data}
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
      <GcoomGoBottom
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        phase={phase}
        setPhase={setPhase}
      ></GcoomGoBottom>
    </>
  );
}
