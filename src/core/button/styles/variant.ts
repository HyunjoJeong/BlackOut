import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

const filledDisabled = (theme: Theme) => css`
  background-color: ${theme.colors['gray-300']};
  color: ${theme.colors['gray-0']};
  border: none;
  cursor: not-allowed;
`;

const outlinedDisabled = (theme: Theme) => css`
  background-color: transparent;
  color: ${theme.colors['gray-300']};
  border: 1px solid ${theme.colors['gray-300']};
  cursor: not-allowed;
`;

const textDisabled = (theme: Theme) => css`
  background-color: transparent;
  color: ${theme.colors['gray-300']};
  border: none;
  cursor: not-allowed;
`;

const noBackgroundHovered = (theme: Theme) => css`
  background-color: ${theme.colors['gray-100']};
`;

const noBackgroundActive = (theme: Theme) => css`
  background-color: ${theme.colors['gray-200']};
`;

export const buttonVariant = (theme: Theme) => ({
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

  outlinedPrimary: css`
    background-color: transparent;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};

    :hover {
      ${noBackgroundHovered(theme)}
    }

    :active {
      ${noBackgroundActive(theme)}
    }

    :disabled {
      ${outlinedDisabled(theme)}
    }
  `,

  outlinedSecondary: css`
    background-color: transparent;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors['gray-300']};

    :hover {
      ${noBackgroundHovered(theme)}
    }

    :active {
      ${noBackgroundActive(theme)}
    }

    :disabled {
      ${outlinedDisabled(theme)}
    }
  `,

  outlinedAssistive: css`
    background-color: transparent;
    color: ${theme.colors['gray-700']};
    border: 1px solid ${theme.colors['gray-300']};

    :hover {
      ${noBackgroundHovered(theme)}
    }

    :active {
      ${noBackgroundActive(theme)}
    }

    :disabled {
      ${outlinedDisabled(theme)}
    }
  `,

  textPrimary: css`
    background-color: transparent;
    color: ${theme.colors.primary};
    border: none;

    :hover {
      ${noBackgroundHovered(theme)}
    }

    :active {
      ${noBackgroundActive(theme)}
    }

    :disabled {
      ${textDisabled(theme)}
    }
  `,

  textAssistive: css`
    background-color: transparent;
    color: ${theme.colors['gray-700']};
    border: none;

    :hover {
      ${noBackgroundHovered(theme)}
    }

    :active {
      ${noBackgroundActive(theme)}
    }

    :disabled {
      ${textDisabled(theme)}
    }
  `,
});
