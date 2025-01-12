import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main>
        <Image
          src={'/mainpage.png'}
          alt="메인화면 ㅋ"
          width={560}
          height={1308}
          css={{ width: '100%', height: 'auto', aspectRatio: '560/1308' }}
        />
        <InvisibileButton
          css={{
            width: 100,
            height: 32,
            top: 20,
            left: 20,
          }}
          onClick={() => router.push('/signin')}
        />
        <InvisibileButton
          css={{
            width: 180,
            height: 32,
            top: 120,
            left: 32,
          }}
          onClick={() => router.push('/meetings/2')}
        />
        <InvisibileButton
          css={{
            width: 160,
            height: 144,
            left: 12,
            bottom: 20,
          }}
          onClick={() => router.push('/depart')}
        />
        <InvisibileButton
          css={{
            width: 160,
            height: 144,
            right: 12,
            bottom: 20,
          }}
          onClick={() => router.push('/meetings')}
        />
      </main>
    </>
  );
}

const InvisibileButton = styled.button`
  border: none;
  background-color: transparent;
  position: fixed;
`;
