import type { GcooPartyTabType, GcooPartyTabValue } from './types';

export const GcooPartyTabs: Array<{ label: GcooPartyTabType; value: GcooPartyTabValue }> = [
  { label: '인기', value: 'popular' },
  { label: '참여중', value: 'onBoard' },
  { label: '완료', value: 'done' },
];
