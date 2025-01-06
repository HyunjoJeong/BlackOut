import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

const filledDisabled = (theme: Theme) => css`
  background-color: ${theme.colors['gray-100']};
  color: ${theme.colors['gray-400']};
  border: none;
  cursor: not-allowed;
`;

const outlinedDisabled = (theme: Theme) => css`
  background-color: transparent;
  color: ${theme.colors['gray-400']};
  border: 1px solid ${theme.colors['gray-300']};
  cursor: not-allowed;
`;

export const chipVariant = (theme: Theme) => ({
  filledAssistive: css`
    background-color: ${theme.colors['gray-100']};
    color: ${theme.colors['gray-700']};
    border: none;

    :hover {
      filter: brightness(90%);
    }

    :active {
      filter: brightness(80%);
    }

    :disabled {
      ${filledDisabled(theme)}
    }
  `,

  filledPrimary: css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors['gray-0']};
    border: none;

    :hover {
      filter: brightness(90%);
    }

    :active {
      filter: brightness(80%);
    }

    :disabled {
      ${filledDisabled(theme)}
    }
  `,

  outlinedAssistive: css`
    background-color: transparent;
    color: ${theme.colors['gray-700']};
    border: 1px solid ${theme.colors['gray-300']};

    :hover {
      background-color: ${theme.colors['gray-100']};
    }

    :active {
      background-color: ${theme.colors['gray-200']};
    }

    :disabled {
      ${outlinedDisabled(theme)}
    }
  `,
});
