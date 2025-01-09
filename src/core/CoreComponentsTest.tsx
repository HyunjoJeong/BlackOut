import { Button } from './button';
import { Chip } from './chip';

export default function CoreComponentsTest() {
  const variants = [
    'filledPrimary',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedAssistive',
    'textPrimary',
    'textAssistive',
  ];

  const variants2 = ['filledPrimary', 'filledAssistive', 'outlinedAssistive'];

  return (
    <>
      <div css={{ display: 'flex', gap: 8, margin: 16 }}>
        {variants.map((variant: any) => (
          <Button css={{ padding: '10px 16px' }} key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
      </div>
      <div css={{ display: 'flex', gap: 8, margin: 16 }}>
        {variants2.map((variant: any) => (
          <Chip css={{ padding: '10px 16px' }} key={variant} variant={variant}>
            {variant}
          </Chip>
        ))}
      </div>
    </>
  );
}
