import React from 'react';
import Marker from './Marker';
import { css } from '@emotion/react';
import { IconUser } from '@/global/icons/IconUser';

const MockMap: React.FC = () => {
  return (
    <div css={mapStyle}>
      <Marker bottom={200} right={100} name="파리바게뜨" />
      <Marker bottom={350} right={50} name="장블랑제리" />
      <Marker bottom={220} right={250} name="아띠" />
      <IconUser css={{ position: 'absolute', bottom: '200px', right: '200px' }} />
    </div>
  );
};
const mapStyle = css`
  width: 100%;
  height: 500px;
  color: #333;
  background-image: url(/mockmap.png);
  background-size: cover;
  background-position: center;
  position: relative;
`;
export default MockMap;
