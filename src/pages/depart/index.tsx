import { Chip } from '@/core';
import GCOOMGO from '@/features/featureB/components/GCOOMGO';
import { IconArrow } from '@/global/icons';
import { Footer, Header } from '@/global/layouts';
import { useState } from 'react';

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <Header
        left={<IconArrow />}
        center={'타이틀'}
        right={
          <Chip font="button3" variant="filledDisabled">
            지쿠 위치 ON
          </Chip>
        }
      />
      <GCOOMGO></GCOOMGO>
      <Footer />
    </>
  );
}
