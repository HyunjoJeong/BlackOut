export const theme = {
  colors: {
    primary: '#6f42c1',
    secondary: '#e83e8c',
  },
};

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
    };
  }
}
