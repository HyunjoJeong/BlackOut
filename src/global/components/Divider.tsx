import { css } from '@emotion/react';

export default function Divider() {
  return <div css={dividerStyle}></div>;
}
const dividerStyle = css`
  height: 4px;
  width: 45px;
  background-color: #ddd;
  margin: 0 auto 16px auto;
  border-radius: 100px;
`;
