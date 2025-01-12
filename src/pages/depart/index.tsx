import { Chip } from '@/core';
import GCOOMGO from '@/features/featureB/components/GCOOMGO';
import { IconArrow } from '@/global/icons';
import { Footer, Header } from '@/global/layouts';
import BackButton from '@/global/layouts/header/BackButton';
import { useState } from 'react';

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <Header
        left={<BackButton />}
        right={
          <Chip font="button3" variant="filledDisabled" css={{ padding: '8px 16px' }}>
            지쿠 위치 ON
          </Chip>
        }
      />
      <GCOOMGO></GCOOMGO>
      <Footer />
    </>
  );
}
