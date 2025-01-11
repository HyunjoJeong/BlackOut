import Map from '@/features/map/components/Map';
import { MOCKUP_DATA } from '@/features/map/constants';
import { Header } from '@/global/layouts';
import styled from '@emotion/styled';
import { useState } from 'react';

const MeetingMainPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <>
      <Header center={'지쿰 만나'} />
      <StyledMain>
        <Map datas={MOCKUP_DATA} selectedId={selectedId} onItemClick={handleClick} />
      </StyledMain>
    </>
  );
};

export default MeetingMainPage;

const StyledMain = styled.main``;
