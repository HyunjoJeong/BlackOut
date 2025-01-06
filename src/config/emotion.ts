import { theme } from '@/global/styles/theme';

type CustomTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
