import { IconBell } from '@/global/icons';
import styled from '@emotion/styled';
import { PIN_COLOR } from '../constants';
import { IconPinArrow } from '../icons/IconPinArrow';
import type { MapItemDto } from '../types/dto';

// TODO: 아이콘 변경 및 실제 타입으로 연동

type Props = {
  data: MapItemDto;
  isSelected?: boolean;
  onClick: () => void;
};

const MapPin = ({ data, isSelected, onClick }: Props) => {
  const { destination, coordinate } = data;

  return (
    <StyledWrapper $isSelected={isSelected} css={{ left: coordinate[0], top: coordinate[1] }}>
      <div onClick={onClick}>
        <StyledIconWrapper>
          <IconBell size={13} />
        </StyledIconWrapper>
        <p>{destination}</p>
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

const StyledIconWrapper = styled.div`
  padding: 4px;
  width: fit-content;
  border-radius: 50%;
  background-color: #fff;
  line-height: 0;
`;
