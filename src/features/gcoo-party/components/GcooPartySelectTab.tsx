import { Chip } from '@/core';
import styled from '@emotion/styled';
import type { Dispatch, SetStateAction } from 'react';
import { GcooPartyTabs } from '../constants';
import type { GcooPartyTabValue } from '../types';

type Props = {
  activeTab: GcooPartyTabValue;
  setActiveTab: Dispatch<SetStateAction<GcooPartyTabValue>>;
};

const GcooPartySelectTab = ({ activeTab, setActiveTab }: Props) => {
  return (
    <StyledWrapper>
      {GcooPartyTabs.map(({ label, value }) => {
        return (
          <StyledChip
            key={value}
            variant={value === activeTab ? 'filledPrimary' : 'outlinedPrimary'}
            onClick={() => setActiveTab(value)}
          >
            {label}
          </StyledChip>
        );
      })}
    </StyledWrapper>
  );
};

export default GcooPartySelectTab;

const StyledWrapper = styled.div`
  padding: 20px;

  display: flex;
  gap: 6px;
`;

const StyledChip = styled(Chip)`
  padding: 8px 12px;
`;
