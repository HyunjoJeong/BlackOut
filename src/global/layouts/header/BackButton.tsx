import { IconArrow } from '@/global/icons';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();

  return (
    <StyledWrapper onClick={router.back}>
      <IconArrow />
    </StyledWrapper>
  );
};

export default BackButton;

const StyledWrapper = styled.div`
  width: fit-content;
  line-height: 0;
`;
