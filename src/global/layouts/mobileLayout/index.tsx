import { css } from '@emotion/react';

export const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return <div css={layout}>{children}</div>;
};

const layout = css`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;
