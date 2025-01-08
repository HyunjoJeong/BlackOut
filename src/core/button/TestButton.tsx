import { IconHome } from '@/global/icons';
import { Button } from '.';
const TestButton = () => {
  const variants = ['primary', 'secondary', 'assistive'] as const;
  const sizes = ['small', 'medium', 'large'] as const;
  const types = [
    { outlined: false, text: false, label: 'Filled' },
    { outlined: true, text: false, label: 'Outlined' },
    { outlined: false, text: true, label: 'Text' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h1>Button Variants</h1>
      {sizes.map((size) => (
        <div key={size}>
          <h2>{size.charAt(0).toUpperCase() + size.slice(1)} Buttons</h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {variants.map((variant) =>
              types.map(({ outlined, text, label }) => (
                <div
                  key={`${variant}-${label}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ marginBottom: '8px', fontSize: '12px' }}>
                    {`${variant.charAt(0).toUpperCase() + variant.slice(1)} - ${label}`}
                  </span>
                  <Button
                    variant={variant}
                    iconLeft={(props) => <IconHome size={10} {...props} />}
                    size={size}
                    outlined={outlined}
                    text={text}
                  >
                    button
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
      <h2>Disabled Buttons</h2>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {variants.map((variant) => (
          <div
            key={`${variant}-disabled`}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <span style={{ marginBottom: '8px', fontSize: '12px' }}>
              {`${variant.charAt(0).toUpperCase() + variant.slice(1)} - Disabled`}
            </span>
            <Button variant={variant} size="medium" disabled>
              button
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestButton;
