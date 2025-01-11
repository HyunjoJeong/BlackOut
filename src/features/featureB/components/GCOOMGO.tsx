import { Chip } from '@/core';
import BottomSheet from '@/global/components/BottomSheet';
import { css } from '@emotion/react';
import { useState } from 'react';
import Map from '../../map/components/Map';
import { useFetchEventListQuery } from '../hooks/useFetchEventListQuery';
import type { Phase } from '../types';
import GcoomGoBottom from './GcoomGoBottom';

export default function GCOOMGO() {
  const [phase, setPhase] = useState<Phase>('initial');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { data: eventListData } = useFetchEventListQuery();

  return (
    <>
      <div css={header1}>
        <Chip variant="outlinedPrimary" css={{ padding: '5px' }}>
          음식/디저트
        </Chip>
        <Chip variant="outlinedAssistive" css={{ padding: '5px' }}>
          쇼핑
        </Chip>
        <Chip variant="outlinedAssistive" css={{ padding: '5px' }}>
          뷰티/관리
        </Chip>
        <Chip variant="outlinedAssistive" css={{ padding: '5px' }}>
          문화 여가
        </Chip>
      </div>
      <Map
        datas={eventListData}
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
      <BottomSheet>
        <GcoomGoBottom
          eventList={eventListData}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          phase={phase}
          setPhase={setPhase}
        ></GcoomGoBottom>
      </BottomSheet>
    </>
  );
}

const header1 = css`
  display: flex;
  padding-left: 10px;
  gap: 5px;
  height: 30px;
  margin-bottom: 10px;
  background-color: #fff;
`;
const header2 = css`
  display: flex;
  align-items: center;
  padding-left: 10px;
  gap: 5px;
  height: 100px;
  margin-bottom: 10px;
  background-color: #fff;
`;
