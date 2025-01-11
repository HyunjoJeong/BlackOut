import type { IconProps } from './base';

export const IconBread = ({ size = 15, color = '#000', ...props }: IconProps) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="21" height="21" rx="10.5" fill="white" />
    <rect x="4" y="4" width="13" height="13" fill="url(#pattern0_183_6949)" />
    <defs>
      <pattern id="pattern0_183_6949" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_183_6949" transform="scale(0.00195312)" />
      </pattern>
      <image
        id="image0_183_6949"
        width="512"
        height="512"
        xlinkHref="data:image/png;base64,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gAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBEgATASEMRJgIIIIAAAiEFSABCalIWAggggAACRgRIAIw0FGEigAACCCAQUoAEIKQmZSGAAAIIIGBE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EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQKDwAv8fS2IcrHDvKLsAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);