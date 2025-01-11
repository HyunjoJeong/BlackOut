import GcooPartySelectTab from '@/features/gcoo-party/components/GcooPartySelectTab';
import type { GcooPartyTabValue } from '@/features/gcoo-party/types';
import { Header } from '@/global/layouts';
import styled from '@emotion/styled';
import { useState } from 'react';

const GcooPartyPage = () => {
  const [activeTab, setActiveTab] = useState<GcooPartyTabValue>('popular');

  return (
    <>
      <Header center={'지쿠 파티'} />
      <StyledMain>
        <GcooPartySelectTab activeTab={activeTab} setActiveTab={setActiveTab} />
      </StyledMain>
    </>
  );
};

export default GcooPartyPage;

const StyledMain = styled.main``;
