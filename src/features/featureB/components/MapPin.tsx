import { PIN_COLOR } from '@/features/map/constants';
import { IconPinArrow } from '@/features/map/icons/IconPinArrow';
import { MapItemDto } from '@/features/map/types/dto';
import styled from '@emotion/styled';
import Image from 'next/image';

// TODO: 아이콘 변경 및 실제 타입으로 연동

type Props = {
  data: MapItemDto;
  isSelected?: boolean;
  onClick: () => void;
};

const MapPin = ({ data, isSelected, onClick }: Props) => {
  const { title, coordinates } = data;

  return (
    <StyledWrapper $isSelected={isSelected} css={{ left: coordinates[0], top: coordinates[1] }}>
      <div onClick={onClick}>
        <StyledImageWrapper>
          <Image src="/bread.png" alt="아이콘" width={13} height={13} />
        </StyledImageWrapper>
        <p>{title}</p>
      </div>
      <IconPinArrow />
    </StyledWrapper>
  );
};

export default MapPin;

const StyledWrapper = styled.div<{ $isSelected?: boolean }>`
  width: fit-content;

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    padding: 4px 8px 4px 4px;
    width: fit-content;

    border-radius: 20px;
    border: 2px solid ${PIN_COLOR};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;

    cursor: pointer;

    ${({ theme }) => theme.typography.button3}

    ${({ $isSelected }) => ({
      color: $isSelected ? PIN_COLOR : '#fff',
      backgroundColor: $isSelected ? '#fff' : PIN_COLOR,
    })};
  }
`;

const StyledImageWrapper = styled.div`
  padding: 4px;
  width: fit-content;
  border-radius: 50%;
  background-color: #fff;
  line-height: 0;
`;
