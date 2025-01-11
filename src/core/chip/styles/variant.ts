import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const chipVariant = (theme: Theme) => ({
  filledAssistive: css`
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[700]};
    border: none;

    :hover {
      filter: brightness(90%);
    }

    :active {
      filter: brightness(80%);
    }
  `,

  filledPrimary: css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.gray[0]};
    border: none;

    :hover {
      filter: brightness(90%);
    }

    :active {
      filter: brightness(80%);
    }
  `,

  outlinedPrimary: css`
    background-color: transparent;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};

    :hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    :active {
      background-color: rgba(0, 0, 0, 0.08);
    }
  `,

  outlinedAssistive: css`
    background-color: transparent;
    color: ${theme.colors.gray[700]};
    border: 1px solid ${theme.colors.gray[300]};

    :hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    :active {
      background-color: rgba(0, 0, 0, 0.08);
    }
  `,

  filledDisabled: css`
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[400]};
    border: none;
    cursor: not-allowed;
  `,

  outlinedDisabled: css`
    background-color: transparent;
    color: ${theme.colors.gray[400]};
    border: 1px solid ${theme.colors.gray[300]};
    cursor: not-allowed;
  `,
});
