import styled from '@emotion/styled';
import type { MapItemDto } from '../types/dto';
import MapPin from './MapPin';

type Props = {
  datas: MapItemDto[] | undefined;
  selectedId: number | null;
  onItemClick: (id: number) => void;
};

const Map = ({ datas, selectedId, onItemClick }: Props) => {
  console.log(datas);

  return (
    <StyledSection>
      {datas?.map((itemData) => (
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
