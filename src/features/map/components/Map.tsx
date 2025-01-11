import { MEET_LIST_MOCKUP } from '@/features/meeting/constants';
import styled from '@emotion/styled';
import MapPin from './MapPin';

type Props = {
  selectedId: number | null;
  onItemClick: (id: number) => void;
};

const Map = ({ selectedId, onItemClick }: Props) => {
  return (
    <StyledSection>
      {MEET_LIST_MOCKUP.map((itemData) => (
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
