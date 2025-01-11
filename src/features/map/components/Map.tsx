import styled from '@emotion/styled';
import type { MapItemDto } from '../types/dto';
import MapPin from './MapPin';

type Props = {
  datas: MapItemDto[];
  selectedId: number | null;
  onItemClick: (id: number) => void;
};

const Map = ({ datas, selectedId, onItemClick }: Props) => {
  return (
    <StyledSection>
      {datas.map((itemData) => (
        <MapPin
          key={itemData.id}
          data={itemData}
          isSelected={itemData.id === selectedId}
          onClick={() => onItemClick(itemData.id)}
        />
      ))}
    </StyledSection>
  );
};

export default Map;

const StyledSection = styled.section`
  position: relative;
  aspect-ratio: 3/4;

  background-size: 100%;
  background-image: url('/map.png');
`;
