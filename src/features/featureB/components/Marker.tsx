import { Chip } from '@/core';
import { IconBread } from '@/global/icons';

export default function Marker({
  name,
  bottom,
  right,
}: {
  name: string;
  bottom: number;
  right: number;
}) {
  return (
    <Chip
      font="button3"
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        position: 'absolute',
        bottom: `${bottom}px`,
        right: `${right}px`,

        backgroundColor: '#FC6813',
        padding: '4px 8px',
        '&::after': {
          content: '""', // 가상 요소를 생성
          position: 'absolute',
          bottom: '-6px', // Chip 아래에 위치
          left: '50%',
          transform: 'translateX(-50%)', // 중앙 정렬
          width: '0',
          height: '0',
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
          borderTop: '6px solid #FC6813', // 삼각형 색상
        },
      }}
    >
      <IconBread></IconBread>
      {name}
    </Chip>
  );
}
